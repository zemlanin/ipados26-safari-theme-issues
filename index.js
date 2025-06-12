update();
window.addEventListener("scroll", update);
document.querySelector("#change-to-green").addEventListener("change", update);

function update() {
  const scrolled = window.scrollY > 10;

  if (scrolled) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  const changeToGreen = document.querySelector("#change-to-green").checked;

  const themeColor = !scrolled
    ? "black"
    : changeToGreen
      ? "#00a500"
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "#13171f"
        : "#fff";

  document.querySelector('meta[name="theme-color"]').content = themeColor;
}
