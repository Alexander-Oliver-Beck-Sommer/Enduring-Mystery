import styles from "../../scss/components/_footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../public/logos/edm-full-logo.png";
import { MdWebAsset, MdRule, MdPhoneIphone } from "react-icons/md";

export default function FooterComponent() {
  return (
    <footer
      className={`${styles["footer_overall_container"]} ${styles["footer_layout_wrapper"]}`}
    >
      <div
        className={`${styles["footer_content_container"]} ${styles["layout_wrapper_default_sides"]}`}
      >
        <div className={styles.footer_content_logo}>
          <div className={styles.content_logo_container}>
            <Image src={FooterLogo} alt="Enduring Mystery" />
          </div>
        </div>
        <div className={styles.content_links_containers}>
          <div className={styles.content_title}>
            <h3>overview</h3>
            <MdWebAsset className={styles.content_title_icon} />
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className={styles.content_quick_links}
                aria-label="Go to home page"
              >
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={styles.content_quick_links}
                aria-label="Go to shop page"
              >
                <p>shop</p>
              </Link>
            </li>
            <li>
              <Link
                href="/entries"
                className={styles.content_quick_links}
                aria-label="Go to entries page"
              >
                <p>entries</p>
              </Link>
            </li>
            <li>
              <Link
                href="/origin"
                className={styles.content_quick_links}
                aria-label="Go to origin page"
              >
                <p>origin</p>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.content_quick_links}
                aria-label="Go to contact page"
              >
                <p>contact</p>
              </Link>
            </li>
            <li>
              <Link
                href="/user-wishlist"
                className={styles.content_quick_links}
                aria-label="Go to wishlist page"
              >
                <p>wishlist</p>
              </Link>
            </li>
            <li>
              <Link
                href="/user-account"
                className={styles.content_quick_links}
                aria-label="Go to account page"
              >
                <p>account</p>
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className={styles.content_quick_links}
                aria-label="Go to checkout page"
              >
                <p>checkout</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content_links_containers}>
          <div className={styles.content_title}>
            <h3>Legal</h3>
            <MdRule className={styles.content_title_icon} />
          </div>
          <ul>
            <li>
              <Link
                href="/legal/terms-and-conditions"
                className={styles.content_quick_links}
                aria-label="Click to read more about our terms and conditions"
              >
                <p>terms & conditions</p>
              </Link>
            </li>
            <li>
              <Link
                href="/legal/privacy-policy"
                className={styles.content_quick_links}
                aria-label="Click to read more about our privacy policy"
              >
                <p>privacy policy</p>
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms-of-use"
                className={styles.content_quick_links}
                aria-label="Click to read more about our terms of use"
              >
                <p>terms of use</p>
              </Link>
            </li>
            <li>
              <Link
                href="/legal/cookie-policy"
                className={styles.content_quick_links}
                aria-label="Click to read more about our cookie policy"
              >
                <p>Cookie policy</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content_links_containers}>
          <div className={styles.content_title}>
            <h3>contact</h3>
            <MdPhoneIphone className={styles.content_title_icon} />
          </div>
          <ul>
            <li>
              <a
                href="mailto: enduring-mystery@company.com"
                className={styles.content_quick_links}
                aria-label="Click to read more about our terms and conditions"
              >
                <p>
                  <b>Mail: </b>enduring-mystery@company.com
                </p>
              </a>
            </li>
            <li>
              <a
                href="tel:+4550416576"
                className={styles.content_quick_links}
                aria-label="Click to read more about our privacy policy"
              >
                <p>
                  <b>tel: </b>6644 2064
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/9chd6nEEJD6a1LR26"
                target="_blank"
                rel="noreferrer"
                className={styles.content_quick_links}
                aria-label="Click to read more about our terms of use"
              >
                <p>
                  <b>offices: </b>Skæringvej 88, 8520 Lystrup
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles["footer_copyright_container"]} ${styles["layout_wrapper_default"]}`}
      >
        <p>© 2022 www.enduringmystery.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
