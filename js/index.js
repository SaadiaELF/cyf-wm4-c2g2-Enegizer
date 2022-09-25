function hideMenu() {
  let menuOpen = document.querySelector("#h__side-menu").checked;

  if ((menuOpen = true)) {
    document.querySelector("#h__side-menu").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);
