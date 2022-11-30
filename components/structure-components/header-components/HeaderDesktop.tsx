import styles from "../../../scss/components/_header.module.scss";
import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "../../../public/logos/edm-full-logo.png";
import {
  MdOutlineShoppingCart,
  MdPersonOutline,
  MdArrowForwardIos,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
// Images
import ArtifactsImage from "../../../public/images/thumbnails/artifacts-thumbnail.png";
import AnomaliesImage from "../../../public/images/thumbnails/anomalies-thumbnail.png";
import RaritiesImage from "../../../public/images/thumbnails/rarities-thumbnail.png";
import ObjectsImage from "../../../public/images/thumbnails/objects-thumbnail.png";
import RelicsThumbnail from "../../../public/images/thumbnails/relics-thumbnail.png";
import MomentosThumbnail from "../../../public/images/thumbnails/momentos-thumbnail.png";

if (typeof window !== "undefined") {
  const container = document.getElementById("shop-sub-menu");
  const navButton = document.getElementById("shop-submenu-button");
  const navButtonArrow = document.getElementById(
    "shop-submenu-button-arrow-icon"
  );
  const quickLinks = document
    .querySelectorAll(`.${styles.desktop_quick_links}`)
    .forEach((el) => {
      el.addEventListener("click", () => {
        location.reload();
      });
    });
  const subMenuButton = document
    .querySelectorAll(`.${styles.submenu_button}`)
    .forEach((el) => {
      el.addEventListener("click", () => {
        location.reload();
      });
    });
  navButton.addEventListener("click", () => {
    if (container.style.visibility === "visible") {
      container.style = "visibility: hidden; max-height: 0;";
      navButton.style = "color: #fdfdfd;";
      navButtonArrow.style = "transform: rotate(-90deg);";
    } else {
      container.style = "visibility: visible; max-height: 1000px;";
      navButton.style = "color: #8f8f8f;";
      navButtonArrow.style = "transform: rotate(90deg);";
    }
  });
}

export default function HeaderDesktop() {
  return (
    <>
      <header className={styles.header_desktop_container}>
        <div className={styles.header_desktop_content}>
          <div className={styles.header_logo}>
            <Link href="/" alt="Go to homepage">
              <Image src={HeaderLogo} alt="Enduring Mystery" />
            </Link>
          </div>
          <div className={styles.right_side_content}>
            <ul>
              <li>
                <Link
                  href="/checkout"
                  alt="Go to checkout page"
                  className={styles.right_side_icons}
                >
                  <MdOutlineShoppingCart />
                </Link>
              </li>
              <li>
                <Link
                  href="/user-account"
                  alt="Go to account page"
                  className={styles.right_side_icons}
                >
                  <MdPersonOutline />
                </Link>
              </li>
              <li>
                <Link
                  href="/user-wishlist"
                  alt="Go to user wishlist page"
                  className={styles.right_side_icons}
                >
                  <IoMdHeartEmpty />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  alt="Click here to get helped, in case you have any technical issues or questions"
                  className={styles.right_side_icons}
                >
                  <HiOutlineWrenchScrewdriver />
                </Link>
              </li>
              <li>
                <div className={styles.search_field_container}>
                  <input
                    type="search"
                    placeholder="Search here..."
                    className={styles.search_field_input}
                  />
                  <button className={styles.search_field_button}>
                    <AiOutlineSearch />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.navigation_desktop_container}>
        <nav className={styles.quick_links_container}>
          <ul>
            <li>
              <Link
                href="/"
                className={styles.desktop_quick_links}
                alt="Go to homepage"
              >
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <button
                className={styles.shop_preview_button}
                id="shop-submenu-button"
                aria-label="Click to show and close shop-sub-menu"
              >
                <h3>Shop</h3>
                <MdArrowForwardIos
                  className={styles.shop_button_icon}
                  id="shop-submenu-button-arrow-icon"
                />
              </button>
            </li>
            <li>
              <Link
                href="/entries"
                className={styles.desktop_quick_links}
                alt="Go to entries page"
              >
                <h3>entries</h3>
              </Link>
            </li>
            <li>
              <Link
                href="/origin"
                className={styles.desktop_quick_links}
                alt="Go to origin page"
              >
                <h3>origin</h3>
              </Link>
            </li>
          </ul>
        </nav>
        <section className={styles.shop_submenu_container} id="shop-sub-menu">
          <div className={styles.submenu_content_container}>
            <div className={styles.submenu_description}>
              <h2>Shop Categories:</h2>
              <p>
                Buyable goods, that consist of rare artifacts, scavenged through
                our excellent hunters & trackers.
              </p>
            </div>
            <div>
              <ul className={styles.submenu_categories}>
                <li>
                  <Link
                    href="/shop/artifacts"
                    alt="Go to artifacts shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image src={ArtifactsImage} alt="Alien cube artifact" />
                    </div>
                    <div className={styles.category_title}>
                      <h3>Artifacts</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Ancient artifacts, able to tell a thousand words.</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/anomalies"
                    alt="Go to anomalies shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image
                        src={AnomaliesImage}
                        alt="Futuristic trianglic device"
                      />
                    </div>
                    <div className={styles.category_title}>
                      <h3>Anomalies</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Anomalies with a hint of the vast unknown universe</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/rarities"
                    alt="Go to rarities shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image
                        src={RaritiesImage}
                        alt="Abstract shaped object, with incomprehensible dimensions"
                      />
                    </div>
                    <div className={styles.category_title}>
                      <h3>Rarities</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Rare and famous pieces of pure brain fantasy</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/objects"
                    alt="Go to objects shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image
                        src={ObjectsImage}
                        alt="Glass cube with unknown reflections reflecting upon it"
                      />
                    </div>
                    <div className={styles.category_title}>
                      <h3>Objects</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Incomprehensible objects yet to be understood</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/relics"
                    alt="Go to relics shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image
                        src={RelicsThumbnail}
                        alt="Metallic kitsune mask, from the 1500's China era."
                      />
                    </div>
                    <div className={styles.category_title}>
                      <h3>relics</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Long lasting relics that has stood the test of time</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/momentos"
                    alt="Go to momentos shop page"
                    className={styles.category_items_containers}
                  >
                    <div className={styles.category_image}>
                      <Image
                        src={MomentosThumbnail}
                        alt="Metallic & golden momentum, with wings on it's side and a red ruby-gem in the middle"
                      />
                    </div>
                    <div className={styles.category_title}>
                      <h3>momentos</h3>
                    </div>
                    <div className={styles.category_description}>
                      <p>Momentos handed down, through several generations</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.submenu_navigation_button}>
              <Link
                href="/shop"
                alt="Go to shop page"
                className={styles.submenu_button}
              >
                <div className={styles.button_navigation_link}>
                  <h4>Click to navigate to shop</h4>
                  <MdArrowForwardIos />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
