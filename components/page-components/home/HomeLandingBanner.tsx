import styles from "../../../scss/components/_landingBanner.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BsTriangle } from "react-icons/bs";
import BannerSkullImage from "../../../public/images/landing-banner-images/landing-banner-skull.png";

export default function HomeLandingBanner() {
  return (
    <section
      className={styles.landing_banner_container}
      aria-label="Landing Banner Section"
    >
      <div className={styles.landing_banner_content}>
        <div className={styles.banner_text_container}>
          <div className={styles.text_title}>
            <h2>
              Mysteries worth solving
              <span className={styles.title_dots}>...</span>
            </h2>
          </div>
          <div className={styles.text_sub_title}>
            <BsTriangle className={styles.sub_title_icons} />
            <h6>Welcome to enduring mystery</h6>
            <BsTriangle className={styles.sub_title_icons} />
          </div>
          <div className={styles.text_body_text}>
            <p>
              We specialize in scouting, collecting and selling artifacts
              throughout the whole world.
            </p>
            <p>
              The items we sell, can at times be unobtainable for longer
              periods. This is however only mainly applicable for rarer items,
              such as: <b>Taboos</b>, <b>Momentoes</b> & <b>Relics</b>.
            </p>
            <p>
              Besides selling acquired items at our disposition,{" "}
              <span className={styles.colored_body_text}>ENDURING MYSTERY</span>{" "}
              also operates as a paid-service for those who are in search for
              lost/hidden items, artifacts and etc.
            </p>
          </div>
          <div className={styles.text_buttons_wrapper}>
            <Link
              className={styles.button_redirect_transparentWhite}
              href="/shop"
              alt="Click to browse our shop catalogue."
            >
              <h4>Browse shop</h4>
            </Link>
            <Link
              className={styles.button_redirect_transparentWhite}
              href="/services"
              alt="Click to read more about our service prices."
            >
              <h4>Services</h4>
            </Link>
          </div>
        </div>
        <div className={styles.banner_image_container}>
          <Image
            src={BannerSkullImage}
            alt="Yellow skull with roses around it."
          />
        </div>
      </div>
    </section>
  );
}
