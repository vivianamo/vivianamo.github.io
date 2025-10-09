function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");

  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("dark-mode");
}
