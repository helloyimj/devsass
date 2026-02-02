


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
    const answerButtons = document.querySelectorAll(
      ".page_answer .btn-accordion"
    );
    if (!answerButtons.length) return;

    answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".accordion-item");
        const container = button.closest(".krds-accordion");
        const panel = item.querySelector(".accordion-collapse");
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const type = container.dataset.type || "singleOpen";

        if (type !== "multiOpen" && !isExpanded) {
          container
            .querySelectorAll(".accordion-item")
            .forEach((otherItem) => {
              if (otherItem !== item) {
                const otherBtn =
                  otherItem.querySelector(".btn-accordion");
                const otherPanel =
                  otherItem.querySelector(".accordion-collapse");

                otherBtn.setAttribute("aria-expanded", "false");
                otherItem.classList.remove("active");
                otherPanel.classList.remove("active");
              }
            });
        }

        button.setAttribute("aria-expanded", String(!isExpanded));
        item.classList.toggle("active", !isExpanded);
        panel.classList.toggle("active", !isExpanded);
      });
    });
  },
};

/* =========================
   로그인 비밀번호 on/off
========================= */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-ico-wrap .krds-btn");
  if (!btn) return;

  const wrap = btn.closest(".btn-ico-wrap");
  const input = wrap.querySelector("input");
  const srText = btn.querySelector(".sr-only");

  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";

  btn.setAttribute("aria-pressed", String(isPassword));
  btn.classList.toggle("is-active", isPassword);

  if (srText) {
    srText.textContent = isPassword
      ? "입력한 비밀번호 숨기기"
      : "입력한 비밀번호 보기";
  }
});

/* =========================
   모달
========================= */
const ui_modal = {
  modalOpenTriggers: null,
  modalCloseTriggers: null,

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
   체크박스 전체 선택
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
   초기 실행 + AOS (핵심)
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
    AOS.refreshHard();
  }
});

// document.querySelectorAll('[data-aos]')[1].style.opacity = 1;
// document.querySelectorAll('[data-aos]')[1].getBoundingClientRect()






















// // // 통합 재작성 중
// // // 통합 재작성 중
// // // 통합 재작성 중
// // // 통합 재작성 중
// // // 통합 재작성 중
// // // 통합 재작성 중











// /* =========================
//    스크롤 이벤트 (사이드 버튼)
// ========================= */
// window.addEventListener("scroll", () => {
//   const scrollTop = window.scrollY;

//   document
//     .querySelectorAll(".btn_side_sup01, .btn_side_sup02")
//     .forEach(el => (el.style.display = "block"));

//   const btn03 = document.querySelector(".btn_side_sup03");
//   if (!btn03) return;

//   btn03.classList.toggle("show", scrollTop > 600);
// });

// /* =========================
//    최상단 이동 버튼
// ========================= */
// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".wrap_side_btn .btn_top");
//   if (!btn) return;

//   e.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// /* =========================
//    아코디언
// ========================= */
// const ui_accordion = {
//   init() {
//     const answerButtons = document.querySelectorAll(
//       ".page_answer .btn-accordion"
//     );
//     if (!answerButtons.length) return;

//     answerButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const item = button.closest(".accordion-item");
//         const container = button.closest(".krds-accordion");
//         const panel = item.querySelector(".accordion-collapse");
//         const isExpanded = button.getAttribute("aria-expanded") === "true";
//         const type = container.dataset.type || "singleOpen";

//         if (type !== "multiOpen" && !isExpanded) {
//           container
//             .querySelectorAll(".accordion-item")
//             .forEach((otherItem) => {
//               if (otherItem !== item) {
//                 const otherBtn =
//                   otherItem.querySelector(".btn-accordion");
//                 const otherPanel =
//                   otherItem.querySelector(".accordion-collapse");

//                 otherBtn.setAttribute("aria-expanded", "false");
//                 otherItem.classList.remove("active");
//                 otherPanel.classList.remove("active");
//               }
//             });
//         }

//         button.setAttribute("aria-expanded", String(!isExpanded));
//         item.classList.toggle("active", !isExpanded);
//         panel.classList.toggle("active", !isExpanded);
//       });
//     });
//   },
// };

// /* =========================
//    로그인 비밀번호 on/off
// ========================= */
// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".btn-ico-wrap .krds-btn");
//   if (!btn) return;

//   const wrap = btn.closest(".btn-ico-wrap");
//   const input = wrap.querySelector("input");
//   const srText = btn.querySelector(".sr-only");

//   const isPassword = input.type === "password";
//   input.type = isPassword ? "text" : "password";

//   btn.setAttribute("aria-pressed", String(isPassword));
//   btn.classList.toggle("is-active", isPassword);

//   if (srText) {
//     srText.textContent = isPassword
//       ? "입력한 비밀번호 숨기기"
//       : "입력한 비밀번호 보기";
//   }
// });

// /* =========================
//    모달
// ========================= */
// const ui_modal = {
//   modalOpenTriggers: null,
//   modalCloseTriggers: null,

//   init() {
//     this.modalOpenTriggers = document.querySelectorAll(".open-modal");
//     this.modalCloseTriggers = document.querySelectorAll(".close-modal");
//     if (!this.modalOpenTriggers.length) return;

//     this.setupTriggers();
//   },

//   setupTriggers() {
//     this.modalOpenTriggers.forEach((trigger) => {
//       trigger.addEventListener("click", (e) => {
//         e.preventDefault();
//         const id = trigger.dataset.target;
//         if (!id) return;

//         trigger.classList.add("modal-opened");
//         trigger.setAttribute("tabindex", "-1");
//         trigger.setAttribute("data-modal-id", id);
//         this.openModal(id);
//       });
//     });

//     this.modalCloseTriggers.forEach((trigger) => {
//       trigger.addEventListener("click", (e) => {
//         e.preventDefault();
//         const modal = trigger.closest(".krds-modal");
//         if (modal) this.closeModal(modal.id);
//       });
//     });
//   },

//   openModal(id) {
//     const modal = document.getElementById(id);
//     if (!modal) return;

//     const dialog = modal.querySelector(".modal-content");
//     const back = modal.querySelector(".modal-back");
//     const conts = modal.querySelector(".modal-conts");

//     document.body.classList.add("scroll-no");
//     modal.classList.add("shown");
//     back.classList.add("in");

//     if (conts.scrollHeight > conts.clientHeight) {
//       conts.setAttribute("tabindex", "0");
//     } else {
//       conts.removeAttribute("tabindex");
//     }

//     setTimeout(() => modal.classList.add("in"), 150);

//     const focusables = modal.querySelectorAll(
//       'a, button, input, textarea, select, [tabindex="0"]'
//     );
//     if (focusables.length) {
//       setTimeout(() => focusables[0].focus(), 300);
//     }

//     dialog.addEventListener(
//       "keydown",
//       (e) => {
//         if (e.key === "Escape") this.closeModal(id);
//       },
//       { once: true }
//     );

//     document.getElementById("wrap")?.setAttribute("inert", "");
//   },

//   closeModal(id) {
//     const modal = document.getElementById(id);
//     if (!modal) return;

//     modal.classList.remove("in");
//     modal.querySelector(".modal-back")?.classList.remove("in");

//     setTimeout(() => modal.classList.remove("shown"), 300);

//     document.body.classList.remove("scroll-no");
//     document.getElementById("wrap")?.removeAttribute("inert");

//     const trigger = document.querySelector(
//       `.modal-opened[data-modal-id="${id}"]`
//     );
//     if (trigger) {
//       trigger.focus();
//       trigger.classList.remove("modal-opened");
//       trigger.removeAttribute("data-modal-id");
//       trigger.removeAttribute("tabindex");
//     }
//   },
// };

// /* =========================
//    체크박스 전체 선택
// ========================= */
// document.addEventListener("DOMContentLoaded", () => {
//   const all = document.getElementById("check-agree-all");
//   const items = document.querySelectorAll(".terms-item");
//   if (!all || !items.length) return;

//   all.addEventListener("change", () => {
//     items.forEach((item) => {
//       item.checked = all.checked;
//       item.indeterminate = false;
//     });
//   });

//   items.forEach((item) => {
//     item.addEventListener("change", () => {
//       const checked = [...items].filter(i => i.checked).length;

//       if (checked === 0) {
//         all.checked = false;
//         all.indeterminate = false;
//       } else if (checked === items.length) {
//         all.checked = true;
//         all.indeterminate = false;
//       } else {
//         all.checked = false;
//         all.indeterminate = true;
//       }
//     });
//   });
// });

// /* =========================
//    초기 실행 + AOS (핵심)
// ========================= */
// document.addEventListener("DOMContentLoaded", () => {
//   ui_accordion.init();
//   ui_modal.init();

//   if (typeof AOS !== "undefined") {
//     AOS.init({
//       once: false,
//       offset: 50,
//       duration: 700,
//       easing: "ease-out-cubic",
//       disableMutationObserver: true,
//     });

//     setTimeout(() => {
//       AOS.refresh();
//     }, 300);
//   }
// });

// window.addEventListener("load", () => {
//   if (typeof AOS !== "undefined") {
//     AOS.refreshHard();
//   }
// });

// // document.querySelectorAll('[data-aos]')[1].style.opacity = 1;
// // document.querySelectorAll('[data-aos]')[1].getBoundingClientRect()
