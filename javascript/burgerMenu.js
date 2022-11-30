if (typeof window !== "undefined") {
  const burgerIcon = document.getElementById("burgerIcon");
  const mobileNav = document.getElementById("mobileNav");
  const mobileLink = document
    .querySelectorAll(`.${styles.mobile_navigation_links}`)
    .forEach((el) => {
      el.addEventListener("click", () => {
        location.reload();
      });
    });
}
