import styles from "../../../scss/pages/_home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import ArtifactsThumbnail from "../../../public/images/thumbnails/artifacts-thumbnail.png";
import TaboosThumbnail from "../../../public/images/thumbnails/taboos-thumbnail.png";
import RelicsThumbnail from "../../../public/images/thumbnails/relics-thumbnail.png";
import ObjectsThumbnail from "../../../public/images/thumbnails/objects-thumbnail.png";
import AnomaliesThumbnail from "../../../public/images/thumbnails/anomalies-thumbnail.png";

export default function HomeWaresShowcase() {
  return (
    // <section
    //   className={styles.wares_showcase_container}
    //   aria-label="Wares Showcase Section"
    // >
    //   <div className={styles.wares_showcase_title}>
    //     <h2>What we can offer:</h2>
    //   </div>
    //   <div className={styles.wares_showcase_content}>
    //     <div className={styles.wares_item_boxes}>
    //       <div className={styles.item_thumbnail}>
    //         <Image src={ArtifactsThumbnail} alt="Metallic alien artifact" />
    //       </div>
    //       <div className={styles.item_text}>
    //         <h6>Category: Artifacts</h6>
    //         <div className={styles.text_title}>
    //           <h4>Tribute Ichor</h4>
    //           <div className={styles.ware_status_icon}></div>
    //         </div>
    //         <p>
    //           <i>
    //             Ancient tribute artifact, possibly derived from a another time &
    //             place.
    //           </i>
    //         </p>
    //         <div className={styles.item_buttons}>
    //           <Link href="/shop/artifacts" className={styles.ware_button_cart}>
    //             <h5>Add to cart</h5>
    //             <MdOutlineShoppingCart className={styles.ware_button_icon} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.wares_item_boxes}>
    //       <div className={styles.item_thumbnail}>
    //         <Image
    //           src={TaboosThumbnail}
    //           alt="Metallic & glitchy statuette, of a person with a metal head."
    //         />
    //       </div>
    //       <div className={styles.item_text}>
    //         <h6>Category: Taboos</h6>
    //         <div className={styles.text_title}>
    //           <h4>Void Statuette</h4>
    //           <div className={styles.ware_status_icon}></div>
    //         </div>
    //         <p>
    //           <i>
    //             <b>Unlocked:</b> Statuette with a possible chance to curse the
    //             buyer.
    //           </i>
    //         </p>
    //         <div className={styles.item_buttons}>
    //           <Link href="/shop/artifacts" className={styles.ware_button_cart}>
    //             <h5>Add to cart</h5>
    //             <MdOutlineShoppingCart className={styles.ware_button_icon} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.wares_item_boxes}>
    //       <div className={styles.item_thumbnail}>
    //         <Image src={RelicsThumbnail} alt="Metallic alien artifact" />
    //       </div>
    //       <div className={styles.item_text}>
    //         <h6>Category: relics</h6>
    //         <div className={styles.text_title}>
    //           <h4>Ancient Kitsune Medallion</h4>
    //           <div className={styles.ware_status_icon}></div>
    //         </div>
    //         <p>
    //           <i>
    //             Kitsune medallion possibly from the early 1500s china, where it
    //             was speculated to fight against...
    //           </i>
    //         </p>
    //         <div className={styles.item_buttons}>
    //           <Link href="/shop/artifacts" className={styles.ware_button_cart}>
    //             <h5>Out of stock</h5>
    //             <MdOutlineShoppingCart className={styles.ware_button_icon} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.wares_item_boxes}>
    //       <div className={styles.item_thumbnail}>
    //         <Image
    //           src={AnomaliesThumbnail}
    //           alt="Extra terrestrial triangle-device"
    //         />
    //       </div>
    //       <div className={styles.item_text}>
    //         <h6>Category: Anomalies</h6>
    //         <div className={styles.text_title}>
    //           <h4>Triangelic Alien Device</h4>
    //           <div className={styles.ware_status_icon}></div>
    //         </div>
    //         <p>
    //           <i>
    //             Anomalous device with an unspoken device. Light emits from its
    //             core randomly.
    //           </i>
    //         </p>
    //         <div className={styles.item_buttons}>
    //           <Link href="/shop/artifacts" className={styles.ware_button_cart}>
    //             <h5>Add to cart</h5>
    //             <MdOutlineShoppingCart className={styles.ware_button_icon} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.wares_item_boxes}>
    //       <div className={styles.item_thumbnail}>
    //         <Image src={ObjectsThumbnail} alt="Futuristic alien cube" />
    //       </div>
    //       <div className={styles.item_text}>
    //         <h6>Category: Objects</h6>
    //         <div className={styles.text_title}>
    //           <h4>Reflectioning 360° Cube</h4>
    //           <div className={styles.ware_status_icon}></div>
    //         </div>
    //         <p>
    //           <i>
    //             Reflective cube that can manipulate reflections and transform
    //             recieved reflection.
    //           </i>
    //         </p>
    //         <div className={styles.item_buttons}>
    //           <Link href="/checkout" className={styles.ware_button_cart}>
    //             <h5>add to cart</h5>
    //             <MdOutlineShoppingCart className={styles.ware_button_icon} />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <></>
  );
}
