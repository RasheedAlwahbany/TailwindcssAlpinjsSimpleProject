import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
// Wait for alpine to be instantiated before processing
document.addEventListener("alpine:init", () => {
    Alpine.data("portfolio", () => ({
      title: "Hunter Trammell",
      showNav: false,
      handleNav() {
        this.showNav = !this.showNav;
      },
    }));
  });