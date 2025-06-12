handleScroll();
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const scrolled = window.scrollY > 10;

  if (scrolled) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  const themeColor = !scrolled
    ? "black"
    : matchMedia("(prefers-color-scheme: dark)").matches
      ? "#13171f"
      : "#fff";

  document.querySelector('meta[name="theme-color"]').content = themeColor;
}
