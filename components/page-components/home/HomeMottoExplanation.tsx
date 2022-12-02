import styles from "../../../scss/pages/_home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BsFillEyeFill } from "react-icons/bs";
import { GiEyeShield, GiBlackHandShield, GiDiceShield } from "react-icons/gi";

export default function HomeMottoExplanation() {
  return (
    <section
      className={styles.motto_explanation_container}
      aria-label="Motto Explanation Section"
    >
      <div className={styles.motto_title}>
        <h2>scout - collect - sell</h2>
      </div>
      <div className={styles.motto_content}>
        <div className={styles.content_cube_container}>
          <div className={styles.content_cube}>
            <GiEyeShield className={styles.cube_icon} />
          </div>
          <div className={styles.content_text}>
            <h3>Scout</h3>
            <p>
              In informance of a new ware to be collected and sold, we first
              scout & study the danger-level of that-said-item.
            </p>
          </div>
        </div>
        <div className={styles.content_dotted_line}>
          <div className={styles.dotted_line_dot}></div>
          <div className={styles.dotted_line_line}></div>
          <div className={styles.dotted_line_dot}></div>
        </div>
        <div className={styles.content_cube_container}>
          <div className={styles.content_cube}>
            <GiBlackHandShield className={styles.cube_icon} />
          </div>
          <div className={styles.content_text}>
            <h3>collect</h3>
            <p>
              After deeming the item to be safe enough to be collected by our
              collectors, we collect and secure that item to avoid any possible
              harm to us or it.
            </p>
          </div>
        </div>
        <div className={styles.content_dotted_line}>
          <div className={styles.dotted_line_dot}></div>
          <div className={styles.dotted_line_line}></div>
          <div className={styles.dotted_line_dot}></div>
        </div>
        <div className={styles.content_cube_container}>
          <div className={styles.content_cube}>
            <GiDiceShield className={styles.cube_icon} />
          </div>
          <div className={styles.content_text}>
            <h3>sell</h3>
            <p>
              When the ware has gotten a safe-rating along with being
              categorized, it will be packed and prepared for shipment, avaiable
              to buy globally.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.motto_button_container}>
        <Link
          href="/origin"
          aria-label="Click to read more about who we are, on the origin page"
        >
          <div className={styles.motto_button}>
            <h4>Read more on origin</h4>
          </div>
        </Link>
      </div>
    </section>
  );
}
