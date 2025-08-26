document.addEventListener("DOMContentLoaded", () => {
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

  // Chapter toggle
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const chapter = btn.parentElement;
      const content = btn.nextElementSibling;
      chapter.classList.toggle("active");
      if (chapter.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Topic toggle
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const topic = btn.parentElement;
      const wrapper = btn.nextElementSibling; // topic-content-wrapper
      topic.classList.toggle("active");
      if (topic.classList.contains("active")) {
        wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      } else {
        wrapper.style.maxHeight = null;
      }
    });
  });
});
