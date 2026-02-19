/* =========================
   초기 실행 + AOS 
========================= */
document.addEventListener("DOMContentLoaded", () => {
  ui_accordion.init();
  ui_modal.init();

  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      offset: 50,
      duration: 700,
      easing: "ease-out-cubic",
      disableMutationObserver: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }
});

window.addEventListener("load", () => {
  if (typeof AOS !== "undefined") {
    // 레이아웃 + 이미지 다 로드된 뒤 최종 계산
    AOS.refreshHard();
  }
});


// document.querySelectorAll('[data-aos]')[1].style.opacity = 1;
// document.querySelectorAll('[data-aos]')[1].getBoundingClientRect()

window.addEventListener("load", () => {
  if (typeof AOS !== "undefined") {
    AOS.refreshHard();
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  document
    .querySelectorAll(".btn_side_sup01, .btn_side_sup02")
    .forEach(el => el.style.display = "block");

  const btn03 = document.querySelector(".btn_side_sup03");
  if (!btn03) return;

  // 
  btn03.classList.toggle("show", scrollTop > 600);
});

/* =========================
   최상단 이동 버튼
========================= */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".wrap_side_btn .btn_top");
  if (!btn) return;

  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


/* =========================
   아코디언
========================= */
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


/* =========================
   로그인 비밀번호 on/off
========================= */
document.addEventListener("click", (e) => {
  const btnPw = e.target.closest(".btn-ico-wrap .krds-btn");
  if (!btnPw) return;

  const wrapPw = btnPw.closest(".btn-ico-wrap");
  const inputPw = wrapPw.querySelector("input");
  const srTextPw = btnPw.querySelector(".sr-only");

  const isPassword = inputPw.type === "password";

  // 비밀번호 타입 토글
  inputPw.type = isPassword ? "text" : "password";

  // 버튼 aria-pressed 상태 토글
  btnPw.setAttribute("aria-pressed", String(isPassword));

  // 화면 읽기용 텍스트 변경
  if (srTextPw) {
    srTextPw.textContent = isPassword
      ? "입력한 비밀번호 숨기기"
      : "입력한 비밀번호 보기";
  }

  // 버튼 시각적 상태 토글
  btnPw.classList.toggle("is-active", !isPassword);
});


/* =========================
   로그인 모달
========================= */
const ui_modal = {
  modalOpenTriggers: null,
  modalCloseTriggers: null,
  outsideClickHandlers: {},

  init() {
    this.modalOpenTriggers = document.querySelectorAll(".open-modal");
    this.modalCloseTriggers = document.querySelectorAll(".close-modal");
    if (!this.modalOpenTriggers.length) return;
    this.setupTriggers();
  },

  setupTriggers() {
    this.modalOpenTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const id = trigger.dataset.target;
        if (!id) return;

        trigger.classList.add("modal-opened");
        trigger.setAttribute("tabindex", "-1");
        trigger.setAttribute("data-modal-id", id);
        this.openModal(id);
      });
    });

    this.modalCloseTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
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
    back.classList.add("in");

    if (conts.scrollHeight > conts.clientHeight) {
      conts.setAttribute("tabindex", "0");
    } else {
      conts.removeAttribute("tabindex");
    }

    setTimeout(() => modal.classList.add("in"), 150);

    const focusables = modal.querySelectorAll(
      'a, button, input, textarea, select, [tabindex="0"]'
    );
    if (focusables.length) {
      setTimeout(() => focusables[0].focus(), 300);
    }

    dialog.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") this.closeModal(id);
      },
      { once: true }
    );

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
  },
};


/* =========================
   체크박스 전체 선택 (체크리스트)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const all = document.getElementById("check-agree-all");
  const items = document.querySelectorAll(".terms-item");
  if (!all || !items.length) return;

  all.addEventListener("change", () => {
    items.forEach((item) => {
      item.checked = all.checked;
      item.indeterminate = false;
    });
  });

  items.forEach((item) => {
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
});

/* =========================
   체크박스 전체 선택 (라디오 약관)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const all = document.getElementById("check-agree-all");
  const agreeYes = document.querySelectorAll(".agree-yes");
  const radios = document.querySelectorAll('input[type="radio"]');
  if (!all || !agreeYes.length) return;

  all.addEventListener("change", () => {
    if (all.checked) {
      agreeYes.forEach(r => (r.checked = true));
    }
  });

  radios.forEach((radio) => {
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
});


/* =========================
   스크롤 이벤트 (사이드 버튼)
========================= */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  document
    .querySelectorAll(".btn_side_sup01, .btn_side_sup02")
    .forEach(el => (el.style.display = "block"));

  const btn03 = document.querySelector(".btn_side_sup03");
  if (!btn03) return;

  btn03.classList.toggle("show", scrollTop > 600);
});


// /* =========================
//    툴팁
// ========================= */
document.addEventListener("DOMContentLoaded", () => {
  if (typeof krds_contextualTooltip !== 'undefined') {
    krds_contextualTooltip.init();
  }
});
const krds_contextualTooltip = {
  tooltipButtons: null,
  init() {
    this.tooltipButtons = document.querySelectorAll(".krds-contextual-help .tooltip-btn");

    if (!this.tooltipButtons.length) return;

    this.setupTooltips();
    this.setupFocusOutEvent();
  },
  setupTooltips() {
    this.tooltipButtons.forEach((button) => {
      const tooltipContainer = button.closest(".krds-contextual-help");
      const tooltipPopover = tooltipContainer.querySelector(".tooltip-popover");
      const closeButton = tooltipPopover.querySelector(".tooltip-close");

      button.setAttribute("aria-expanded", "false");
      tooltipPopover.setAttribute("role", "tooltip");

      // tooltipWrap에 포지션이 없을때 기본값 설정
      if (tooltipContainer && tooltipContainer.classList.length === 1) {
        tooltipContainer.classList.add("top", "left");
      }

      button.addEventListener("click", () => {
        this.toggleTooltip(button, tooltipPopover, tooltipContainer);
      });
      closeButton.addEventListener("click", () => {
        this.closeAllTooltips();
      });

      window.addEventListener("resize", () => {
        this.adjustTooltipPosition(tooltipContainer, tooltipPopover);
      });

      // ESC 닫기
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" || event.key === "Esc") {
          this.closeAllTooltips();
        }
      });
    });
  },
  toggleTooltip(button, tooltipPopover, tooltipContainer) {
    const isVisible = tooltipPopover.style.display === "block";

    this.closeAllTooltips();

    if (!isVisible) {
      tooltipPopover.style.display = "block";
      const focusables = tooltipPopover.querySelector(`a, button, [tabindex="0"], input, textarea, select`);
      focusables?.focus();
      button.setAttribute("aria-expanded", "true");

      this.adjustTooltipPosition(tooltipContainer, tooltipPopover);
    }
  },
  closeAllTooltips() {
    const otherPopovers = document.querySelectorAll(".krds-contextual-help .tooltip-popover");
    otherPopovers.forEach((popover) => {
      popover.style.display = "none";
    });
    this.tooltipButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  },
  adjustTooltipPosition(tooltipContainer, tooltipPopover) {
    // const isMobile = windowSize.getWinSize() === "mob";
    const isMobile = window.innerWidth <= 768;
    const tooltipAction = tooltipContainer.querySelector(".tooltip-action");

    if (isMobile) {
      const rootStyles = getComputedStyle(document.querySelector(":root"));
      const contentsPaddingX = rootStyles.getPropertyValue("--krds-contents-padding-x").trim().split("px")[0];
      const tooltipActionRect = tooltipAction.getBoundingClientRect();
      const offsetLeft = tooltipActionRect.left - contentsPaddingX;
      const width = document.body.clientWidth - (contentsPaddingX * 2);
      tooltipPopover.style.left = `-${offsetLeft}px`;
      tooltipPopover.style.width = `${width}px`;
    } else {
      tooltipPopover.style.left = "";
      tooltipPopover.style.right = "";
      // tooltipPopover.style.width = "360px";
    }
  },
  setupFocusOutEvent() {
    document.addEventListener("click", (event) => {
      const clickedInsideTooltip = event.target.closest(".tooltip-action");
      if (!clickedInsideTooltip) {
        this.closeAllTooltips();
      } else {
        const FocusPopover = clickedInsideTooltip.querySelector(".tooltip-popover");
        FocusPopover.addEventListener("focusout", (event) => {
          if (FocusPopover.contains(event.relatedTarget)) {
            return;
          }
          this.closeAllTooltips();
          clickedInsideTooltip.querySelector(".tooltip-btn")?.focus();
        });
      }
    });
  },
};