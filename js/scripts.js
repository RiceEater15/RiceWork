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

// Accordion for chapters and topics
document.addEventListener("DOMContentLoaded", () => {
  // Chapter toggles
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  // Topic toggles
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });
});
