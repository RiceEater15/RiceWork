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
      const content = btn.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  // Topic toggle
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const wrapper = btn.nextElementSibling; // topic-content-wrapper
      wrapper.style.maxHeight = wrapper.style.maxHeight ? null : wrapper.scrollHeight + "px";
    });
  });
});
