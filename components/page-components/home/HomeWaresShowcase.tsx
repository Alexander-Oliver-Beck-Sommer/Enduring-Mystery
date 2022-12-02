import styles from "../../../scss/pages/_home.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomeWaresShowcase() {
  return (
    <section
      className={styles.wares_showcase_container}
      aria-label="Wares Showcase Section"
    >
      <div className={styles.ware_showcase_title}>
        <h3>Home wares showcase</h3>
      </div>
    </section>
  );
}
