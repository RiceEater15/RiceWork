document.addEventListener("DOMContentLoaded", () => {

  // Toggle chapters
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  // Toggle topics
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

});
