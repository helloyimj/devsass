// // // top_btn
// // $(window).scroll(function () {

// //     // console.log($(this).scrollTop())

// //     if ($(this).scrollTop() > 600) {
// //         $(".wrap_side_btn").fadeIn();
// //         // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
// //     } else if ($(this).scrollTop() < 600) {
// //         $(".wrap_side_btn").fadeOut();
// //     }
// // });

// // $(document).on("click", ".wrap_side_btn .btn_top", function () {
// //   // $(document).on("click",".top_btn", function () {
// //     $("html, body").stop().animate({    
// //         scrollTop: 0,
// //     },
// //     "500"
// //     );
// //     return false;
// // });


// $(window).scroll(function () {

    
//     var scrollTop = $(this).scrollTop();

//     // btn_side_sup01, btn_side_sup02는 항상 보이도록 설정
//     $(".btn_side_sup01, .btn_side_sup02").fadeIn();

//     // 스크롤 위치가 600px 초과일 때만 btn_side_sup03 보이기
//     if (scrollTop > 600) {
//         $(".btn_side_sup03").addClass("show"); // .show 클래스를 추가하여 효과 적용
//     } else {
//         $(".btn_side_sup03").removeClass("show"); // .show 클래스를 제거하여 버튼 숨김
//     }
// });

// // 최상단 이동 버튼 클릭 시
// $(document).on("click", ".wrap_side_btn .btn_top", function () {
//     $("html, body").stop().animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });





//..

// // top_btn
// $(window).scroll(function () {

//     // console.log($(this).scrollTop())

//     if ($(this).scrollTop() > 600) {
//         $(".wrap_side_btn").fadeIn();
//         // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
//     } else if ($(this).scrollTop() < 600) {
//         $(".wrap_side_btn").fadeOut();
//     }
// });

// $(document).on("click", ".wrap_side_btn .btn_top", function () {
//   // $(document).on("click",".top_btn", function () {
//     $("html, body").stop().animate({    
//         scrollTop: 0,
//     },
//     "500"
//     );
//     return false;
// });


// $(window).scroll(function () {

    
//     var scrollTop = $(this).scrollTop();

//     // btn_side_sup01, btn_side_sup02는 항상 보이도록 설정
//     $(".btn_side_sup01, .btn_side_sup02").fadeIn();

//     // 스크롤 위치가 600px 초과일 때만 btn_side_sup03 보이기
//     if (scrollTop > 600) {
//         $(".btn_side_sup03").addClass("show"); // .show 클래스를 추가하여 효과 적용
//     } else {
//         $(".btn_side_sup03").removeClass("show"); // .show 클래스를 제거하여 버튼 숨김
//     }
// });









// // 최상단 이동 버튼 클릭 시
// $(document).on("click", ".wrap_side_btn .btn_top", function () {
//     $("html, body").stop().animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });

// //아코디언  (김효진 작업)
// let krds_accordion = {
//   accordionButtons: null,
//   accordionHandlers: new Map(),
//   init() {
//     this.accordionButtons = document.querySelectorAll(".btn-accordion");

//     if (!this.accordionButtons.length) return;

//     this.setupAccordions();
//   },
//   accordionToggle(button, accordionItems, accordionType, currentItem) {
//     const isExpanded = button.getAttribute("aria-expanded") === "true";
//     // singleOpen 타입일 경우, 다른 항목 닫기
//     if (accordionType !== "multiOpen" && !currentItem.classList.contains("active")) {
//       accordionItems.forEach((otherItem) => {
//         const otherButton = otherItem.querySelector(".btn-accordion");
//         otherButton.setAttribute("aria-expanded", "false");
//         otherButton.classList.remove("active");
//         otherItem.classList.remove("active");
//       });
//     }
//     // 현재 항목 상태 토글
//     button.setAttribute("aria-expanded", !isExpanded);
//     button.classList.toggle("active", !isExpanded);
//     currentItem.classList.toggle("active", !isExpanded);
//   },
//   setupAccordions() {
//     this.accordionButtons.forEach((button, idx) => {
//       const accordionContainer = button.closest(".krds-accordion");
//       const accordionItems = accordionContainer.querySelectorAll(".accordion-item");
//       const currentItem = button.closest(".accordion-item");
//       const accordionContent = currentItem.querySelector(".accordion-collapse");
//       const accordionType = accordionContainer.dataset.type || "singleOpen";
//       const isOpen = accordionContainer.classList.contains("is-open");

//       // 접근성 속성 초기값 설정
//       this.setupAriaAttributes(button, accordionContent, idx);

//       // 초기 오픈 상태 설정
//       if (isOpen || currentItem.classList.contains("active")) {
//         button.setAttribute("aria-expanded", "true");
//         button.classList.add("active");
//         currentItem.classList.add("active");
//       }

//       // 핸들러 고정 및 저장
//       let toggleHandler = this.accordionHandlers.get(button);
//       if (!toggleHandler) {
//         toggleHandler = this.accordionToggle.bind(this, button, accordionItems, accordionType, currentItem);
//         this.accordionHandlers.set(button, toggleHandler);
//       }

//       // 기존 이벤트 리스너 제거 및 새로 등록
//       button.removeEventListener("click", toggleHandler);
//       button.addEventListener("click", toggleHandler);
//     });
//   },
//   setupAriaAttributes(button, accordionContent, idx) {
//     const uniqueIdx = `${idx}${Math.random().toString(36).substring(2, 9)}`;
//     button.setAttribute("aria-expanded", "false");
//     button.setAttribute("id", `accordionHeader-id-${uniqueIdx}`);
//     button.setAttribute("aria-controls", `accordionCollapse-id-${uniqueIdx}`);
//     accordionContent.setAttribute("role", "region");
//     accordionContent.setAttribute("id", `accordionCollapse-id-${uniqueIdx}`);
//     accordionContent.setAttribute("aria-labelledby", `accordionHeader-id-${uniqueIdx}`);
//   },
// };

// //로그인 비밀번호 on/off (김효진 작업)
// document.addEventListener("click", function (e) {
//   const btn = e.target.closest(".btn-ico-wrap .krds-btn");
//   if (!btn) return;

//   const wrap = btn.closest(".btn-ico-wrap");
//   const input = wrap.querySelector("input");
//   const srText = btn.querySelector(".sr-only");

//   const isPassword = input.type === "password";

//   // input type 토글
//   input.type = isPassword ? "text" : "password";

//   // aria-pressed 상태 업데이트 (접근성)
//   btn.setAttribute("aria-pressed", String(isPassword));

//   // 스크린리더용 문구 변경
//   if (srText) {
//     srText.textContent = isPassword
//       ? "입력한 비밀번호 숨기기"
//       : "입력한 비밀번호 보기";
//   }

//   // 아이콘/스타일용 상태 클래스 (선택)
//   btn.classList.toggle("is-active", isPassword);
// });

// //로그인 팝업
// const krds_modal = {
//   modalOpenTriggers: null,
//   modalCloseTriggers: null,
//   outsideClickHandlers: {},
//   init() {
//     this.modalOpenTriggers = document.querySelectorAll(".open-modal");
//     this.modalCloseTriggers = document.querySelectorAll(".close-modal");

//     if (!this.modalOpenTriggers.length || !this.modalCloseTriggers.length) return;

//     this.setupTriggers();
//   },
//   setupTriggers() {
//     // 모달 열기 이벤트 설정
//     this.modalOpenTriggers.forEach((trigger) => {
//       trigger.addEventListener("click", (event) => {
//         event.preventDefault();
//         const modalId = trigger.getAttribute("data-target");
//         if (modalId) {
//           // aria 설정
//           trigger.setAttribute("data-modal-id", modalId);
//           trigger.classList.add("modal-opened");
//           trigger.setAttribute("tabindex", "-1");
			
//           this.openModal(modalId);
//         }
//       });
//     });
//     // 모달 닫기 이벤트 설정
//     this.modalCloseTriggers.forEach((trigger) => {
//       trigger.addEventListener("click", (event) => {
//         event.preventDefault();
//         const modalId = trigger.closest(".krds-modal").getAttribute("id");

//         if (modalId) {
//           this.closeModal(modalId);
//         }
//       });
//     });
//   },
//   openModal(id) {
//     const modalElement = document.getElementById(id);
//     const dialogElement = modalElement.querySelector(".modal-content");
//     const modalBack = modalElement.querySelector(".modal-back");
//     // const modalTitle = modalElement.querySelector(".modal-title");
//     const modalConts = modalElement.querySelector(".modal-conts");

//     document.querySelector("body").classList.add("scroll-no");
//     dialogElement.removeAttribute("tabindex");
//     modalElement.setAttribute("role", "dialog");
//     modalElement.classList.add("shown");
//     modalBack.classList.add("in");
//     // modalTitle.setAttribute("tabindex", "0");

//     // modal-conts 스크롤 일때 tabindex 처리
//     if (modalConts.scrollHeight > modalConts.clientHeight) {
//       modalConts.setAttribute("tabindex", "0");
//     } else {
//       modalConts.removeAttribute("tabindex");
//     }

//     // css transition 딜레이
//     setTimeout(() => {
//       modalElement.classList.add("in");
//     }, 150);
    
//     //열린 팝업창 포커스
//     const focusables = modalElement.querySelectorAll(`a, button, [tabindex="0"], input, textarea, select`);
//     setTimeout(() => {
//       // modalTitle.focus();
//       focusables[0].focus();
//     }, 350);

//     // ESC 모달 닫기
//     dialogElement.addEventListener(
//       "keydown",
//       (event) => {
//         if (event.key === "Escape" || event.key === "Esc") {
//           this.closeModal(dialogElement.closest(".krds-modal").id);
//         }
//       },
//       { once: true }
//     );

//     // 모달 외부 클릭 처리 핸들러 정의 및 저장
//     if (!this.outsideClickHandlers[id]) {
//       this.outsideClickHandlers[id] = (event) => {
//         if (!event.target.closest(".modal-content")) {
//           // modalTitle.focus();
//           focusables[0].focus();

//           // dialogElement.focus();
//           // this.closeModal(id);
//         }
//       };
//     }
//     // 이벤트 리스너 제거 후 다시 등록
//     modalElement.removeEventListener("click", this.outsideClickHandlers[id]);
//     modalElement.addEventListener("click", this.outsideClickHandlers[id]);

//     // 포커스 트랩 설정
//     common.focusTrap(dialogElement);

//     // 2개 이상의 모달이 열려 있는 경우 z-index 업데이트
//     this.updateZIndex(modalElement);

//     // inert 설정
//     document.getElementById("wrap")?.setAttribute("inert", "");
//   },
//   closeModal(id) {
//     const modalElement = document.getElementById(id);
//     const openModals = document.querySelectorAll(".modal.in:not(.sample)");
//     const modalBack = modalElement.querySelector(".modal-back");

//     modalElement.classList.remove("in");
//     modalBack.classList.remove("in");

//     // css transition 딜레이
//     setTimeout(() => {
//       modalElement.classList.remove("shown");
//     }, 350);

//     // 마지막 모달이 닫힐 때 페이지 스크롤 복원
//     if (openModals.length < 2) {
//       document.querySelector("body").classList.remove("scroll-no");
//     }
    
//     // inert 설정
//     document.getElementById("wrap")?.removeAttribute("inert");

//     // 모달을 열었던 버튼으로 포커스 복귀
//     this.returnFocusToTrigger(id);
//   },
//   updateZIndex(modalElement) {
//     const openModals = document.querySelectorAll(".modal.in:not(.sample)");
//     const openModalsLengtn = openModals.length + 1;
//     const newZIndex = 1010 + openModalsLengtn;
//     if (openModalsLengtn > 1) {
//       modalElement.style.zIndex = newZIndex;
//       modalElement.querySelector(".modal-back").classList.remove("in");
//     }
//   },
//   returnFocusToTrigger(id) {
//     const triggerButton = document.querySelector(`.modal-opened[data-modal-id="${id}"]`);
//     if (triggerButton) {
//       triggerButton.focus();
//       triggerButton.setAttribute("tabindex", "0");
//       triggerButton.classList.remove("modal-opened");
//       triggerButton.removeAttribute("data-modal-id");
//     }
//   },
// };

// //


// /* 체크박스 전체 선택/해제 - 체크박스(체크리스트) */

// $(document).ready(function () {
//   const $all = $('#check-agree-all');
//   const $items = $('.terms-item');

//   // ✅ 전체 동의 클릭
//   $all.on('change', function () {
//     const checked = this.checked;

//     $items
//       .prop('checked', checked)
//       .prop('indeterminate', false);
//   });

//   // ✅ 개별 항목 클릭
//   $items.on('change', function () {
//     const total = $items.length;
//     const checkedCount = $items.filter(':checked').length;

//     if (checkedCount === 0) {
//       // 모두 해제
//       $all
//         .prop('checked', false)
//         .prop('indeterminate', false);
//     } 
//     else if (checkedCount === total) {
//       // 모두 체크
//       $all
//         .prop('checked', true)
//         .prop('indeterminate', false);
//     } 
//     else {
//       // 일부만 체크 → KRDS 권장 UX
//       $all
//         .prop('checked', false)
//         .prop('indeterminate', true);
//     }
//   });
// });


// /* 체크박스 전체 선택/해제 - 라디오 버튼(약관 동의)*/

// $(document).ready(function () {
//   const $all = $('#check-agree-all');
//   const $agreeYes = $('.agree-yes');

//   // 전체 동의 클릭
//   $all.on('change', function () {
//     const checked = this.checked;

//     if (checked) {
//       // 모든 "동의함" 라디오 체크
//       $agreeYes.each(function () {
//         this.checked = true;
//       });
//     } else {
//       // 전체 동의 해제 시 → 라디오는 해제하지 않음 (UX 관행)
//       // 라디오는 하나는 반드시 선택돼야 하므로 건드리지 않는 게 안전
//     }
//   });

//   // 개별 라디오 변경 시
//   $('input[type="radio"]').on('change', function () {
//     updateAllAgreeState();
//   });

//   function updateAllAgreeState() {
//     const total = $agreeYes.length;
//     const checkedCount = $agreeYes.filter(':checked').length;

//     if (checkedCount === total && total > 0) {
//       $all
//         .prop('checked', true)
//         .prop('indeterminate', false);
//     } else if (checkedCount === 0) {
//       $all
//         .prop('checked', false)
//         .prop('indeterminate', false);
//     } else {
//       // 일부만 동의
//       $all
//         .prop('checked', false)
//         .prop('indeterminate', true);
//     }
//   }
// });


/**
 * ui-script.js
 * jQuery 제거 버전
 * KRDS 네이밍 유지
 */

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
   아코디언 (김효진 작업)
========================= */
let ui_accordion = {
  accordionButtons: null,
  accordionHandlers: new Map(),

  init() {
    this.accordionButtons = document.querySelectorAll(".btn-accordion");
    if (!this.accordionButtons.length) return;
    this.setupAccordions();
  },

  accordionToggle(button, accordionItems, accordionType, currentItem) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // singleOpen일 경우 다른 항목 닫기
    if (accordionType !== "multiOpen" && !currentItem.classList.contains("active")) {
      accordionItems.forEach((item) => {
        const otherBtn = item.querySelector(".btn-accordion");
        otherBtn.setAttribute("aria-expanded", "false");
        otherBtn.classList.remove("active");
        item.classList.remove("active");
      });
    }

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.classList.toggle("active", !isExpanded);
    currentItem.classList.toggle("active", !isExpanded);
  },

  setupAccordions() {
    this.accordionButtons.forEach((button, idx) => {
      const container = button.closest(".krds-accordion");
      if (!container) return;

      const items = container.querySelectorAll(".accordion-item");
      const currentItem = button.closest(".accordion-item");
      const content = currentItem.querySelector(".accordion-collapse");
      const type = container.dataset.type || "singleOpen";
      const isOpen = container.classList.contains("is-open");

      this.setupAriaAttributes(button, content, idx);

      if (isOpen || currentItem.classList.contains("active")) {
        button.setAttribute("aria-expanded", "true");
        button.classList.add("active");
        currentItem.classList.add("active");
      }

      let handler = this.accordionHandlers.get(button);
      if (!handler) {
        handler = this.accordionToggle.bind(
          this,
          button,
          items,
          type,
          currentItem
        );
        this.accordionHandlers.set(button, handler);
      }

      button.removeEventListener("click", handler);
      button.addEventListener("click", handler);
    });
  },

  setupAriaAttributes(button, content, idx) {
    const uid = `${idx}-${Math.random().toString(36).slice(2, 8)}`;

    button.setAttribute("aria-expanded", "false");
    button.id = `accordionHeader-${uid}`;
    button.setAttribute("aria-controls", `accordionPanel-${uid}`);

    content.setAttribute("role", "region");
    content.id = `accordionPanel-${uid}`;
    content.setAttribute("aria-labelledby", `accordionHeader-${uid}`);
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

  if (srText) {
    srText.textContent = isPassword
      ? "입력한 비밀번호 숨기기"
      : "입력한 비밀번호 보기";
  }

  btn.classList.toggle("is-active", isPassword);
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
   초기 실행
========================= */
document.addEventListener("DOMContentLoaded", () => {
  ui_accordion.init();
  ui_modal.init();
});



