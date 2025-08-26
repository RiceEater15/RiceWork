// Live search for notes
document.querySelectorAll(".search-input").forEach(input => {
  input.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const list = this.nextElementSibling.querySelectorAll("li");
    list.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
  });
});
// Accordion for chapters and subtopics
document.addEventListener("DOMContentLoaded", () => {
  const chapterToggles = document.querySelectorAll(".chapter-toggle");
  const subtopicToggles = document.querySelectorAll(".subtopic-toggle");

  chapterToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  subtopicToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Chapter toggle
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  // Topic toggle
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });
});
