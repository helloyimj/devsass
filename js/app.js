/* =========================================================
   APP INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  ui_accordion.init();
  ui_modal.init();
  initCheckAgree();
  initRadioAgree();
  // initTooltip();

  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      offset: 50,
      duration: 700,
      easing: "ease-out-cubic",
      disableMutationObserver: true,
    });

    setTimeout(() => AOS.refresh(), 300);
  }
});

window.addEventListener("load", () => {
  if (typeof AOS !== "undefined") {
    AOS.refreshHard();
  }
});


/* =========================================================
   GLOBAL SCROLL (통합)
========================================================= */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  document
    .querySelectorAll(".btn_side_sup01, .btn_side_sup02")
    .forEach(el => (el.style.display = "block"));

  const btn03 = document.querySelector(".btn_side_sup03");
  if (btn03) {
    btn03.classList.toggle("show", scrollTop > 400);
  }
});


/* =========================================================
   최상단 이동 버튼
========================================================= */
document.addEventListener("click", (e) => {
  const btnTop = e.target.closest(".wrap_side_btn .btn_top");
  if (btnTop) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const btnPw = e.target.closest(".btn-ico-wrap .krds-btn");
  if (btnPw) togglePassword(btnPw);
});


/* =========================================================
   비밀번호 토글
========================================================= */
function togglePassword(btnPw) {
  const wrapPw = btnPw.closest(".btn-ico-wrap");
  const inputPw = wrapPw?.querySelector("input");
  const srTextPw = btnPw.querySelector(".sr-only");
  if (!inputPw) return;

  const isPassword = inputPw.type === "password";

  inputPw.type = isPassword ? "text" : "password";
  btnPw.setAttribute("aria-pressed", String(isPassword));

  if (srTextPw) {
    srTextPw.textContent = isPassword
      ? "입력한 비밀번호 숨기기"
      : "입력한 비밀번호 보기";
  }

  btnPw.classList.toggle("is-active", !isPassword);
}


/* =========================================================
   아코디언
========================================================= */
const ui_accordion = {
  init() {
    const answerButtons = document.querySelectorAll(".page_answer .btn-accordion");
    if (!answerButtons.length) return;

    answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".accordion-item");
        const container = button.closest(".krds-accordion");
        const panel = item.querySelector(".accordion-collapse");
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const type = container.dataset.type || "singleOpen";

        // singleOpen → 다른 아이템 닫기
        if (type !== "multiOpen" && !isExpanded) {
          container.querySelectorAll(".accordion-item").forEach((otherItem) => {
            if (otherItem !== item) {
              const otherBtn = otherItem.querySelector(".btn-accordion");
              const otherPanel = otherItem.querySelector(".accordion-collapse");

              otherBtn.setAttribute("aria-expanded", "false");
              otherItem.classList.remove("active");
              otherPanel.classList.remove("active");
            }
          });
        }

        // 현재 아이템 토글
        button.setAttribute("aria-expanded", String(!isExpanded));
        item.classList.toggle("active", !isExpanded);
        panel.classList.toggle("active", !isExpanded);
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ui_accordion.init();
});


/* =========================================================
   모달
========================================================= */
const ui_modal = {
  init() {
    const openTriggers = document.querySelectorAll(".open-modal");
    const closeTriggers = document.querySelectorAll(".close-modal");
    if (!openTriggers.length) return;

    openTriggers.forEach(trigger => {
      trigger.addEventListener("click", e => {
        e.preventDefault();
        const id = trigger.dataset.target;
        if (!id) return;

        trigger.classList.add("modal-opened");
        trigger.setAttribute("tabindex", "-1");
        trigger.setAttribute("data-modal-id", id);
        this.openModal(id);
      });
    });

    closeTriggers.forEach(trigger => {
      trigger.addEventListener("click", e => {
        e.preventDefault();
        const modal = trigger.closest(".krds-modal");
        if (modal) this.closeModal(modal.id);
      });
    });
  },

  openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    const dialog = modal.querySelector(".modal-content");
    const back = modal.querySelector(".modal-back");
    const conts = modal.querySelector(".modal-conts");

    document.body.classList.add("scroll-no");
    modal.classList.add("shown");
    back?.classList.add("in");

    if (conts && conts.scrollHeight > conts.clientHeight) {
      conts.setAttribute("tabindex", "0");
    } else {
      conts?.removeAttribute("tabindex");
    }

    setTimeout(() => modal.classList.add("in"), 150);

    const focusables = modal.querySelectorAll(
      'a, button, input, textarea, select, [tabindex="0"]'
    );

    if (focusables.length) {
      setTimeout(() => focusables[0].focus(), 300);
    }

    dialog?.addEventListener("keydown", e => {
      if (e.key === "Escape") this.closeModal(id);
    }, { once: true });

    document.getElementById("wrap")?.setAttribute("inert", "");
  },

  closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("in");
    modal.querySelector(".modal-back")?.classList.remove("in");

    setTimeout(() => modal.classList.remove("shown"), 300);

    document.body.classList.remove("scroll-no");
    document.getElementById("wrap")?.removeAttribute("inert");

    const trigger = document.querySelector(
      `.modal-opened[data-modal-id="${id}"]`
    );

    if (trigger) {
      trigger.focus();
      trigger.classList.remove("modal-opened");
      trigger.removeAttribute("data-modal-id");
      trigger.removeAttribute("tabindex");
    }
  }
};


/* =========================================================
   체크박스 (체크리스트)
========================================================= */
function initCheckAgree() {
  const all = document.getElementById("check-agree-all");
  const items = document.querySelectorAll(".terms-item");
  if (!all || !items.length) return;

  all.addEventListener("change", () => {
    items.forEach(item => {
      item.checked = all.checked;
      item.indeterminate = false;
    });
  });

  items.forEach(item => {
    item.addEventListener("change", () => {
      const checked = [...items].filter(i => i.checked).length;

      if (checked === 0) {
        all.checked = false;
        all.indeterminate = false;
      } else if (checked === items.length) {
        all.checked = true;
        all.indeterminate = false;
      } else {
        all.checked = false;
        all.indeterminate = true;
      }
    });
  });
}


/* =========================================================
   체크박스 (라디오 약관)
========================================================= */
function initRadioAgree() {
  const all = document.getElementById("check-agree-all");
  const agreeYes = document.querySelectorAll(".agree-yes");
  const radios = document.querySelectorAll('input[type="radio"]');
  if (!all || !agreeYes.length) return;

  all.addEventListener("change", () => {
    if (all.checked) agreeYes.forEach(r => (r.checked = true));
  });

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const checked = [...agreeYes].filter(r => r.checked).length;

      if (checked === agreeYes.length) {
        all.checked = true;
        all.indeterminate = false;
      } else if (checked === 0) {
        all.checked = false;
        all.indeterminate = false;
      } else {
        all.checked = false;
        all.indeterminate = true;
      }
    });
  });
}


// /* =========================================================
//    툴팁
// ========================================================= */

const krds_contextualTooltip = {
  init() {
    if (window.KRDS_TOOLTIP_READY) return;
    window.KRDS_TOOLTIP_READY = true;

    // 이벤트 캡처링(true)으로 다른 스크립트의 간섭을 먼저 차단합니다.
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".tooltip-btn");
      const closeBtn = e.target.closest(".tooltip-close");
      const popoverInContent = e.target.closest(".tooltip-popover");

      // 1. 열기 버튼 클릭 시
      if (btn) {
        e.preventDefault();
        e.stopImmediatePropagation(); // KRDS 기본 스크립트 실행 방지

        const actionWrap = btn.closest(".tooltip-action");
        const popover = actionWrap?.querySelector(".tooltip-popover");

        if (popover) {
          const isHidden = window.getComputedStyle(popover).display === "none";
          
          this.closeAll(); // 기존에 열린 툴팁들 정리

          if (isHidden) {
            // CSS에서 잡은 위치를 유지하기 위해 display 속성만 제어합니다.
            popover.style.setProperty("display", "block", "important");
            btn.setAttribute("aria-expanded", "true");
            
            // 접근성: 내부 첫 번째 버튼/링크로 포커스
            const focusTarget = popover.querySelector("button, a");
            focusTarget?.focus();
          }
        }
        return;
      }

      // 2. 닫기 버튼 클릭 시
      if (closeBtn) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.closeAll();
        return;
      }

      // 3. 툴팁 내부 클릭 시 (아무것도 안 함)
      if (popoverInContent) {
        e.stopPropagation();
        return;
      }

      // 4. 바깥 영역 클릭 시 모두 닫기
      this.closeAll();
    }, true); 

    // ESC 키 대응
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeAll();
    });

  },

  closeAll() {
    document.querySelectorAll(".tooltip-popover").forEach(p => {
      p.style.setProperty("display", "none", "important");
    });
    document.querySelectorAll(".tooltip-btn").forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
    });
  }
};

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  krds_contextualTooltip.init();
});

/* GNB 대메뉴 활성화  20260408*/

(function () {
  // 중복 실행 방지
  if (window.__gnbSelectedInit) return;
  window.__gnbSelectedInit = true;

  function normalize(str) {
    return str.replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function getBreadcrumbTexts() {
    const items = document.querySelectorAll('.krds-breadcrumb-wrap .breadcrumb li:not(.home) .txt');
    return Array.from(items).map(el => normalize(el.textContent));
  }

  function applySelected() {
    const breadcrumbTexts = getBreadcrumbTexts();
    if (breadcrumbTexts.length === 0) return false;

    // PC: .gnb-main-trigger 버튼
    const pcTriggers = document.querySelectorAll('.gnb-main-trigger');
    // 모바일: .gnb-sub-trigger 링크
    const mobileTriggers = document.querySelectorAll('.gnb-sub-trigger');

    // 헤더 요소가 아직 없으면 false 반환 → 계속 대기
    if (pcTriggers.length === 0 && mobileTriggers.length === 0) return false;

    pcTriggers.forEach(el => {
      if (breadcrumbTexts.includes(normalize(el.textContent))) {
        el.classList.add('selected');
      }
    });

    mobileTriggers.forEach(el => {
      if (breadcrumbTexts.includes(normalize(el.textContent))) {
        el.classList.add('selected');
      }
    });

    return true;
  }

  function observe() {
    // 이미 헤더가 있으면 바로 실행
    if (applySelected()) return;

    const observer = new MutationObserver(function (mutations, obs) {
      // 헤더 요소가 생기면 클래스 추가 후 감지 종료
      if (applySelected()) {
        obs.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,   // 자식 노드 추가 감지
      subtree: true      // 하위 모든 노드 감지
    });
  }

  // DOM 준비 후 시작
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }
})();