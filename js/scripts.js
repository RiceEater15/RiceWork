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
