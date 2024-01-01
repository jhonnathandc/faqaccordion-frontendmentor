const buttons = document.querySelectorAll(".main button");

function handleClick(e) {
  const button = e.currentTarget;
  const dd = e.currentTarget.nextElementSibling;

  buttons.forEach((button) => {
    const dd = button.nextElementSibling;
    if (
      button.classList.contains("active") &&
      dd.classList.contains("active")
    ) {
      button.classList.remove("active");
      dd.classList.remove("active");
    }
  });

  button.classList.add("active");
  dd.classList.add("active");
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
