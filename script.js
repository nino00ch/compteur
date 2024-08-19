// const zero = document.querySelector(".initial");
// const plus = document.querySelector("#plus");
// const moins = document.querySelector("#moins");
// const reset = document.querySelector("#reset");
const plus = document.querySelector("#plus");
plus.textContent="plus"
plus.id= "+";

let count = 0;
plus.addEventListener("click", () => {
  count++;
  zero.textContent = count;
});
moins.addEventListener("click", () => {
  count--;
  zero.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  zero.textContent = 0;
});
