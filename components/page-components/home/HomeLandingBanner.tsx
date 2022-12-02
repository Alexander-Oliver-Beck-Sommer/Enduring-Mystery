import styles from "../../../scss/pages/_home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { TbTriangleInverted, TbTriangle } from "react-icons/tb";
import LandingBannerImage from "../../../public/images/section-images/golden-statue-skull-within.png";

export default function HomeLandingBanner() {
  return (
    <section
      className={`${styles["landing_banner_container"]} ${styles["layout_wrapper_page"]}`}
      aria-label="Landing Banner Section"
    >
      <div className={styles.landing_banner_text}>
        <h5>Scout - Collect - Sell</h5>
        <h2>Mysteries worth solving...</h2>
        <div className={styles.banner_title_icons}>
          <TbTriangleInverted />
          <TbTriangle />
          <TbTriangleInverted />
          <TbTriangle />
          <TbTriangleInverted />
          <TbTriangle />
        </div>
        <p>Welcome to a bizzare experience.</p>
        <p>
          We specialize in scouting, collecting, and selling artifacts
          throughout our whole word... or from others.
        </p>
        <p>
          You might not have heard of us before untill now. This is mainly
          because we operate independently from most other sellers due. to the
          nature of the items we collect and sell.
        </p>
        <p>
          We sell a huge array of different objects we have collected throughout
          our active years. These objects can sometimes compose of artifacts,
          relics, momentoes or even forbidden taboos that can endanger life
          itself.
        </p>
        <Link href="/shop" alt="Click to browse our shop catalogue">
          <div className={styles.button_white_redirect}>
            <h4>Browse shop catalogue</h4>
          </div>
        </Link>
      </div>
      <div className={styles.landing_banner_image}>
        <Image
          src={LandingBannerImage}
          alt="Cracked statue head, with a golden skull within."
        />
      </div>
    </section>
  );
}
