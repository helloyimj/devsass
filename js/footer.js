// footer

document.addEventListener("DOMContentLoaded", () => {
  const familySelect = document.querySelector(".footer .footer_select_family");
  if (!familySelect) return;

  const list = familySelect.querySelector("ul");
  const label = familySelect.querySelector(".rel_link_sel");

  // 초기 상태 세팅 (닫힘)
  if (list) {
    list.style.overflow = "hidden";
    list.style.transition = "max-height 0.2s ease";
    list.style.maxHeight = null;
  }

  familySelect.addEventListener("click", () => {
    familySelect.classList.toggle("toggle");

    const isOpen = familySelect.classList.contains("toggle");

    // slideToggle 대체
    if (list) {
      if (isOpen) {
        list.style.maxHeight = list.scrollHeight + "px";
      } else {
        list.style.maxHeight = null;
      }
    }

    // title 변경 (접근성)
    if (label) {
      label.setAttribute(
        "title",
        isOpen
          ? "관련기관 누리집 목록 열림"
          : "관련기관 누리집 목록 닫힘"
      );
    }
  });
});
