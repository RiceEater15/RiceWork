document.addEventListener("DOMContentLoaded", () => {

  // Chapter toggle
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      if (content.style.height && content.style.height !== "0px") {
        content.style.height = "0px";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });
  });

  // Topic toggle
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const wrapper = btn.nextElementSibling; // topic-content-wrapper
      if (wrapper.style.height && wrapper.style.height !== "0px") {
        wrapper.style.height = "0px";
      } else {
        wrapper.style.height = wrapper.scrollHeight + "px";
      }
    });
  });

  // Optional: live search if needed
  document.querySelectorAll(".search-input").forEach(input => {
    input.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const list = this.nextElementSibling.querySelectorAll("li");
      list.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
      });
    });
  });

});
