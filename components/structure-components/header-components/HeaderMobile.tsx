import styles from "../../../scss/components/_header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";
import HeaderLogo from "../../../public/logos/edm-full-logo.png";
import { FaArrowRight } from "react-icons/fa";

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

export default function HeaderMobile() {
  return (
    <>
      <header className={styles.header_mobile_container}>
        <div className={styles.header_mobile_content}>
          <div className={styles.header_logo}>
            <Link href="/" alt="Go to homepage">
              <Image src={HeaderLogo} alt="Enduring Mystery" />
            </Link>
          </div>
          <div className={styles.header_burger_button}>
            <Hamburger
              id="burgerIcon"
              label="Open and close to show navigation menu"
              duration={0.3}
              hideOutline={false}
              rounded
              direction="right"
              onToggle={(heeee) => {
                if (heeee) {
                  document.getElementById("mobileNav").style.visibility =
                    "visible";
                  document.getElementById("mobileNav").style.width = "100%";
                  document.getElementById("mobileNav").style.opacity = "1";
                } else {
                  document.getElementById("mobileNav").style.visibility =
                    "hidden";
                  document.getElementById("mobileNav").style.width = "0%";
                  document.getElementById("mobileNav").style.opacity = "0";
                }
              }}
            />
          </div>
        </div>
      </header>
      <nav
        className={styles.navigation_mobile_container}
        id="mobileNav"
        aria-label="Mobile navigation menu"
      >
        <ul>
          <li>
            <Link
              href="/"
              alt="Go to homepage"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>Home</h3>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              alt="Go to shop page"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>Shop</h3>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="/entries"
              alt="Go to entries page"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>Entries</h3>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="/origin"
              alt="Go to origin page"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>origin</h3>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              alt="Go to contact page"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>contact</h3>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="/checkout"
              alt="Go to checkout page"
              id="mobileNavigationLink"
              className={styles.mobile_navigation_links}
            >
              <h3>checkout</h3>
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
