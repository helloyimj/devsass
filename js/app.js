/* =========================================================
   APP INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  ui_accordion.init();
  ui_modal.init();
  initCheckAgree();
  initRadioAgree();
  initTooltip();

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
    btn03.classList.toggle("show", scrollTop > 600);
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
    const buttons = document.querySelectorAll(".page_answer .btn-accordion");
    if (!buttons.length) return;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const item = button.closest(".accordion-item");
        const container = button.closest(".krds-accordion");
        const panel = item?.querySelector(".accordion-collapse");
        if (!item || !container || !panel) return;

        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const type = container.dataset.type || "singleOpen";

        if (type !== "multiOpen" && !isExpanded) {
          container.querySelectorAll(".accordion-item").forEach(other => {
            if (other !== item) {
              other.querySelector(".btn-accordion")
                ?.setAttribute("aria-expanded", "false");
              other.classList.remove("active");
              other.querySelector(".accordion-collapse")
                ?.classList.remove("active");
            }
          });
        }

        button.setAttribute("aria-expanded", String(!isExpanded));
        item.classList.toggle("active", !isExpanded);
        panel.classList.toggle("active", !isExpanded);
      });
    });
  }
};


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


/* =========================================================
   툴팁
========================================================= */
function initTooltip() {
  if (typeof krds_contextualTooltip !== "undefined") {
    krds_contextualTooltip.init();
  }
}

const krds_contextualTooltip = {
  tooltipButtons: null,

  init() {
    this.tooltipButtons = document.querySelectorAll(
      ".krds-contextual-help .tooltip-btn"
    );
    if (!this.tooltipButtons.length) return;

    this.setupTooltips();
    this.setupFocusOutEvent();
  },

  setupTooltips() {
    this.tooltipButtons.forEach(button => {
      const container = button.closest(".krds-contextual-help");
      const popover = container.querySelector(".tooltip-popover");
      const closeBtn = popover.querySelector(".tooltip-close");

      button.setAttribute("aria-expanded", "false");
      popover.setAttribute("role", "tooltip");

      if (container.classList.length === 1) {
        container.classList.add("top", "left");
      }

      button.addEventListener("click", () =>
        this.toggleTooltip(button, popover, container)
      );

      closeBtn?.addEventListener("click", () =>
        this.closeAllTooltips()
      );

      window.addEventListener("resize", () =>
        this.adjustTooltipPosition(container, popover)
      );

      document.addEventListener("keydown", e => {
        if (e.key === "Escape") this.closeAllTooltips();
      });
    });
  },

  toggleTooltip(button, popover, container) {
    const isVisible = popover.style.display === "block";
    this.closeAllTooltips();

    if (!isVisible) {
      popover.style.display = "block";
      button.setAttribute("aria-expanded", "true");

      popover
        .querySelector("a, button, [tabindex='0'], input, textarea, select")
        ?.focus();

      this.adjustTooltipPosition(container, popover);
    }
  },

  closeAllTooltips() {
    document.querySelectorAll(".tooltip-popover")
      .forEach(p => (p.style.display = "none"));

    this.tooltipButtons.forEach(btn =>
      btn.setAttribute("aria-expanded", "false")
    );
  },

  adjustTooltipPosition(container, popover) {
    const isMobile = window.innerWidth <= 768;
    const action = container.querySelector(".tooltip-action");

    if (isMobile && action) {
      const rootStyles = getComputedStyle(document.documentElement);
      const padding = parseFloat(
        rootStyles.getPropertyValue("--krds-contents-padding-x")
      );

      const rect = action.getBoundingClientRect();
      const offsetLeft = rect.left - padding;
      const width = document.body.clientWidth - padding * 2;

      popover.style.left = `-${offsetLeft}px`;
      popover.style.width = `${width}px`;
    } else {
      popover.style.left = "";
      popover.style.width = "";
    }
  },

  setupFocusOutEvent() {
    document.addEventListener("click", e => {
      const inside = e.target.closest(".tooltip-action");
      if (!inside) {
        this.closeAllTooltips();
      }
    });
  }
};
