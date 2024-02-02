const elList = document.querySelector(".main__img-list ");
elList.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) {
    e.target.classList.add("active");
  }
  for (const el of elList.children) {
    if (el != e.target) {
      el.classList.remove("active");
    }
  }
});
console.log(elList);
