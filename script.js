 const burger = document.querySelector(".burger");
 const menu = document.querySelector (".show");

function handleClick() {
   menu.classList.toggle("active");
}

burger.addEventListener("click", handleClick);