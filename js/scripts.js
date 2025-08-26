document.addEventListener("DOMContentLoaded", () => {
  // Toggle chapters
  document.querySelectorAll(".chapter-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const chapter = btn.parentElement;
      const content = chapter.querySelector(".chapter-content");

      if (chapter.classList.contains("active")) {
        // Close
        content.style.maxHeight = "0px";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        chapter.classList.remove("active");
      } else {
        // Open
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "0.5rem";
        content.style.paddingBottom = "0.5rem";
        chapter.classList.add("active");
      }
    });
  });

  // Toggle topics
  document.querySelectorAll(".topic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const topic = btn.parentElement;
      const content = topic.querySelector(".topic-content");

      if (topic.classList.contains("active")) {
        // Close
        content.style.maxHeight = "0px";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        topic.classList.remove("active");
      } else {
        // Open
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingTop = "0.5rem";
        content.style.paddingBottom = "0.5rem";
        topic.classList.add("active");
      }
    });
  });
});
