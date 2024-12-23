var focusedElementBeforeModal;
var modal = $(".popup_layer");
var modalOverlay = $(".mask");
var modalToggle = $(".pop_open");

modalToggle.on("click", openModal);

function openModal() {
  focusedElementBeforeModal = document.activeElement;

  modal.on("keydown", trapTabKey);
  modalOverlay.on("click", closeModal);

  var signUpBtn = modal.find(".popup_close");
  signUpBtn.on("click", closeModal);

  var focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var focusableElements = modal.find(focusableElementsString);
  focusableElements = Array.prototype.slice.call(focusableElements);

  var firstTabStop = focusableElements[0];
  var lastTabStop = focusableElements[focusableElements.length - 1];

  modal.css("display", "block");
  modalOverlay.css("display", "block");

  firstTabStop.focus();

  function trapTabKey(e) {
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    if (e.keyCode === 27) {
      closeModal();
    }
  }
}

// function closeModal() {
//   modal.css("display", "none");
//   modalOverlay.css("display", "none");

//   modal.off("keydown", trapTabKey);
//   modalOverlay.off("click", closeModal);

//   focusedElementBeforeModal.focus();
// }


//--------------------------


     var op = $(this);
     var lp = $("#" + $(this).attr("aria-controls"));
     var lpObj = lp.children(".layer-pop__inner");
     var lpObjClose = lp.find(".layer-pop__close");
     var lpObjTabbable = lpObj.find(
       "button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex]:not([tabindex='-1'])"
     );
     var lpObjTabbableFirst = lpObjTabbable && lpObjTabbable.first();
     var lpObjTabbableLast = lpObjTabbable && lpObjTabbable.last();
     //  var lpOuterObjHidden = $(".skip-links, .masthead, .initial-content, .search-content, .page__footer"); // 레이어 바깥 영역의 요소
     var lpOuterObjHidden = $(".skip, .header, body .wrapper, .footer"); // 레이어 바깥 영역의 요소
     var all = $(".masthead, .page__footer").add(lp);
     var tabDisable;
     var nowScrollPos = $(window).scrollTop();
    


		 // 닫기

		 
   $("body").removeClass("scroll-off").css("top", "").off("scroll touchmove mousewheel");
   $(window).scrollTop(nowScrollPos); // 레이어 닫은 후 화면 최상단으로 이동 방지
   if (tabDisable === true) lpObj.attr("tabindex", "-1");
   all.removeClass("on");
   lpOuterObjHidden.removeAttr("aria-hidden");
   op.focus(); // 레이어 닫은 후 원래 있던 곳으로 초점 이동
   $(document).off("keydown.lp_keydown");




	 
	 // ++




	 
 $(this).blur();
 all.addClass("on");
 lpOuterObjHidden.attr("aria-hidden", "true"); // 레이어 바깥 영역을 스크린리더가 읽지 않게
 lpObjTabbable.length
   ? lpObjTabbableFirst.focus().on("keydown", function (event) {
       // 레이어 열리자마자 초점 받을 수 있는 첫번째 요소로 초점 이동
       if (event.shiftKey && (event.keyCode || event.which) === 9) {
         // Shift + Tab키 : 초점 받을 수 있는 첫번째 요소에서 마지막 요소로 초점 이동
         event.preventDefault();
         lpObjTabbableLast.focus();
       }
     })
   : lpObj
       .attr("tabindex", "0")
       .focus()
       .on("keydown", function (event) {
         tabDisable = true;
         if ((event.keyCode || event.which) === 9) event.preventDefault();
         // Tab키 / Shift + Tab키 : 초점 받을 수 있는 요소가 없을 경우 레이어 밖으로 초점 이동 안되게
       });

 lpObjTabbableLast.on("keydown", function (event) {
   if (!event.shiftKey && (event.keyCode || event.which) === 9) {
     // Tab키 : 초점 받을 수 있는 마지막 요소에서 첫번째 요소으로 초점 이동
     event.preventDefault();
     lpObjTabbableFirst.focus();
   }
 });

 lpObjClose.on("click", lpClose); // 닫기 버튼 클릭 시 레이어 닫기

 lp.on("click", function (event) {
   if (event.target === event.currentTarget) {
     // 반투명 배경 클릭 시 레이어 닫기
     lpClose();
   }
 });

 $(document).on("keydown.lp_keydown", function (event) {
   // Esc키 : 레이어 닫기
   var keyType = event.keyCode || event.which;

   if (keyType === 27 && lp.hasClass("on")) {
     lpClose();
   }
 });

