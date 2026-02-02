document.body.style.outline = "5px solid red";
console.log("body exists?", !!document.body);

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("krds-header");
  if (!header) return;

  fetch("html/header.html")
    .then(res => res.text())
    .then(html => {
      header.innerHTML = html;

      // 🔥 헤더가 붙은 뒤에 필요한 초기화 있으면 여기서
      // initGnb();
      // initAccordion();
    })
    .catch(err => {
      console.error("header load error", err);
    });
});
