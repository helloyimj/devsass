



/**
연계한 민간 saas 카드에 적용된 툴팁 작동 코드 
(KRDS 외에 추가 적용 필요)
**/




(() => {
  if (window.__customTooltipInit) return;
  window.__customTooltipInit = true;

  /* ===============================
   * Tooltip position adjust (local)
   * =============================== */
  function adjustTooltipPosition(tooltipContainer, tooltipPopover) {
    const isMobile = window.innerWidth <= 768;
    const tooltipAction = tooltipContainer.querySelector(".tooltip-btn");

    if (!tooltipAction) return;

    if (isMobile) {
      const rootStyles = getComputedStyle(document.documentElement);
      const contentsPaddingX = parseFloat(
        rootStyles.getPropertyValue("--krds-contents-padding-x")
      ) || 0;

      const rect = tooltipAction.getBoundingClientRect();
      const offsetLeft = rect.left - contentsPaddingX;
      const width =
        document.body.clientWidth - contentsPaddingX * 2;

      tooltipPopover.style.left = `-${offsetLeft}px`;
      tooltipPopover.style.right = "";
      tooltipPopover.style.width = `${width}px`;
    } else {
      tooltipPopover.style.left = "";
      tooltipPopover.style.right = "";
      tooltipPopover.style.width = "310px";
    }
  }

  /* ===============================
   * Close all tooltips
   * =============================== */
  function closeAll() {
    document
      .querySelectorAll(".krds-contextual-help .tooltip-popover")
      .forEach(p => (p.style.display = "none"));

    document
      .querySelectorAll(".krds-contextual-help .tooltip-btn")
      .forEach(b => b.setAttribute("aria-expanded", "false"));
  }

  /* ===============================
   * Click toggle
   * =============================== */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".krds-contextual-help .tooltip-btn");
    if (!btn) {
      closeAll();
      return;
    }

    const wrap = btn.closest(".krds-contextual-help");
    const popover = wrap?.querySelector(".tooltip-popover");
    if (!popover) return;

    const isOpen = popover.style.display === "block";
    closeAll();

    if (!isOpen) {
      popover.style.display = "block";
      btn.setAttribute("aria-expanded", "true");

      popover.setAttribute("role", "tooltip");
      popover.setAttribute("tabindex", "-1");
      popover.focus();

      adjustTooltipPosition(wrap, popover);
    }
  });

  /* ===============================
   * ESC key close
   * =============================== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  /* ===============================
   * Focus out close
   * =============================== */
  document.addEventListener("focusin", (e) => {
    const inside = e.target.closest(".krds-contextual-help");
    if (!inside) closeAll();
  });

  /* ===============================
   * Resize 대응 (모바일만)
   * =============================== */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) return;

    document
      .querySelectorAll(".krds-contextual-help .tooltip-popover")
      .forEach(popover => {
        if (popover.style.display === "block") {
          const wrap = popover.closest(".krds-contextual-help");
          if (wrap) adjustTooltipPosition(wrap, popover);
        }
      });
  });
})();









/* 
(() => {
  if (window.__customTooltipInit) return;
  window.__customTooltipInit = true;

  function closeAll() {
    document.querySelectorAll(".krds-contextual-help .tooltip-popover")
      .forEach(p => p.style.display = "none");

    document.querySelectorAll(".krds-contextual-help .tooltip-btn")
      .forEach(b => b.setAttribute("aria-expanded", "false"));
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".krds-contextual-help .tooltip-btn");
    if (!btn) {
      closeAll();
      return;
    }

    const wrap = btn.closest(".krds-contextual-help");
    const popover = wrap?.querySelector(".tooltip-popover");
    if (!popover) return;

    const isOpen = popover.style.display === "block";
    closeAll();

    if (!isOpen) {
      popover.style.display = "block";
      btn.setAttribute("aria-expanded", "true");

      popover.setAttribute("role", "tooltip");
      popover.setAttribute("tabindex", "-1");
      popover.focus();

      adjustTooltipPosition(wrap, popover);
    }
    //adjustMobileTooltip(popover);
  });




  // ESC 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // 포커스가 tooltip 영역 밖으로 나가면 닫기
  document.addEventListener("focusin", (e) => {
    const inside = e.target.closest(".krds-contextual-help");
    if (!inside) closeAll();
  });

  window.addEventListener("resize", () => {
  if (window.innerWidth > 768) return;

  document
    .querySelectorAll(".krds-contextual-help .tooltip-popover")
    .forEach(popover => {
      if (popover.style.display === "block") {
        const wrap = popover.closest(".krds-contextual-help");
        if (wrap) adjustTooltipPosition(wrap, popover);
      }
    });
});
})(); 

 */
/**
 * KRDS tooltip 방향 보정
 * - KRDS 기본 토글 로직에 간섭 없이
 * - 카드 index + breakpoint 기준으로 left/right만 제어
 */
/* 
function getItemsPerRow() {
  const w = window.innerWidth;
  if (w >= 1421) return 4;
  if (w >= 1101) return 3;
  if (w >= 711) return 2;
  return 1;
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.tooltip-btn');
  if (!btn) return;

  const item = btn.closest('.structured-item');
  const help = btn.closest('.krds-contextual-help');
  if (!item || !help) return;

  const items = Array.from(
    item.parentElement.querySelectorAll('.structured-item')
  );

  const index = items.indexOf(item);
  const perRow = getItemsPerRow();

  // 🔥 KRDS가 붙인 클래스 무시하고 다시 세팅
  help.classList.remove('center', 'right');
  help.classList.add(index % perRow === 0 ? 'center' : 'right');
});
 */




