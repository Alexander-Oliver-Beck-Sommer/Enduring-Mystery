import styles from "../../../scss/pages/_home.module.scss";
import Link from "next/link";
import Image from "next/image";
import ArtifactsThumbnail from "../../../public/images/thumbnails/artifacts-thumbnail.png";

export default function HomeWaresShowcase() {
  return (
    <section
      className={styles.wares_showcase_container}
      aria-label="Wares Showcase Section"
    >
      <div className={styles.wares_showcase_title}>
        <h2>What we can offer:</h2>
      </div>
      <div className={styles.wares_showcase_content}>
        <div className={styles.wares_item_boxes}>
          <div className={styles.item_thumbnail}>
            <Image src={ArtifactsThumbnail} alt="Metallic alien ball" />
          </div>
          <div className={styles.item_text}>
            <h6>Category: Artifacts</h6>
            <h4>Tribute Ichor</h4>
            <p>
              <i>
                Ancient tribute artifact, possibly used to worship something
                ungodly.
              </i>
            </p>
            <div className={styles.item_buttons}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
