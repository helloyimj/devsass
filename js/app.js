// 팝업 

// 마스크 클릭 시 팝업 닫기 
// $(document).on("click", ".mask", function () {
//     closePop();
//   });
  
  let maskOverlay = $(".popup_mask");
  let focusedElementBeforePopup; // 팝업 버튼 링크 위치  
  
  function openPop(type, id) {
    $("html, body, .wrapper").css({
      "overflow-y": "hidden",
    });

    $("html, body, .wrapper").on("scroll touchmove touchmove", function (e) {
        e.preventDefault();
      });
    
      $(".popup_layer").attr({
      "role": "dialog",
      // "aria-modal": "true",
    });
  
    focusedElementBeforePopup = document.activeElement;
  
    $("#" + id).on("keydown", trapTabKey);
  
   
    if (type == "layer") {
  
      $(".popup_layer").fadeOut(); // 열려있는 다른 팝업 닫기
      $("#" + id).show();
      $(".popup_mask").fadeIn();
  
      // // iOS 스크롤 막기 ( body padding-top 체크 )
      // $(document).on("scroll touchmove touchmove", function (e) {
      //   e.preventDefault();
      // });
      //     $("body").css("top", - ($(window).scrollTop())).addClass("scroll-off").on("scroll touchmove mousewheel", function(e){
      //           e.preventDefault(); // iOS 레이어 열린 상태에서 body 스크롤되는 문제 방지
      //       });
      // }
    }
  
    // 포커스 막기
    //  $(document).on("focusin", function (e) {
    //    if ($(e.target).closest(id).length === 0) {
    //      $(id).focus();
    //    }
    //  });  
  
    let focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = $("#" + id).find(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];
  
    firstTabStop.focus();
  
    // 팝업 내부에서만 포커스 작동
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
        closePop(id);
      }
    }
    }
  
  function closePop(type, id) {

   $("html, body, .wrapper").css({
     "overflow-y": "auto",
   });
  
  $("html, body, .wrapper").off("scroll touchmove touchmove", function (e) {
      e.preventDefault();
    });
  
    $(".popup_mask").fadeOut();
    $(".popup_layer").hide();
  
    // 최초 팝업 열기 버튼으로 포커스 이동
    // (이중 레이어 팝업 시 data-focus="beforePopup 추가)
    // firstPopupBtn = $('.btn_submit[data-focus="firstPopupBtn"]');
    // firstPopupBtn.focus();
  
    // 단일 레이어 팝업 시 포커스 이동  
    focusedElementBeforePopup.focus();
  
  }
  

////////////////////////////////////////////////////////
// top 버튼  

// $(document).ready(function () {

// let tBtn = "";
// tBtn += '<!-- 최상단 이동 -->';
// tBtn += '<div class="wrap_top_btn">';
// tBtn += '    <a href="#wrapper" aria-label="최상단으로 이동" role="button"></a>';
// tBtn += '</div>';
//   //top button add & scroll event
//   // new markup

//     $(".footer").after(tBtn); 
//     // $(".wrap_top_btn").hide();
// });


// $(window.parent).scroll(function () {
// $(window).scroll(function () {

//   // top_btn
//     // console.log($(this).scrollTop())

//     if ($(this).scrollTop() > 600) {
//         $(".wrap_top_btn").fadeIn();
//         // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
//     } else if ($(this).scrollTop() < 600) {
//         $(".wrap_top_btn").fadeOut();
//     }
// });

// $(document).on("click", ".wrap_top_btn a", function () {
//   // $(document).on("click",".top_btn", function () {
//     $("html, body").stop().animate({    
//         scrollTop: 0,
//     },
//     "500"
//     );
//     return false;
// });

// // 클릭 시 스크롤 부드럽게 이동 
//     $(document).ready(function() {
//         $(".scroll_down_btn").click(function(event) {      
//             event.preventDefault();   
//             var targetPosition = $($(this).attr("href")).offset().top;        

//             $("html, body").animate({
//                 scrollTop: targetPosition
//             }, {
//                 duration: 600, 
//                 easing: "easeInOutQuad"
//             });
//         });
//     });

// 접근성 관련 스크립트 

function popupAriaAttrAdd() {

    $(".popup_layer").attr({
        "role": "dialog",
        "aria-modal": "true",
    });

}
$(document).ready(function () {
    popupAriaAttrAdd();
});

