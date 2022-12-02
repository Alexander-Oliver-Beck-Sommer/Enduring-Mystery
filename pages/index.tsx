import HeadingHome from "../components/heading-tags/HeadingHome";
import HomeLandingBanner from "../components/page-components/home/HomeLandingBanner";
import styles from "../scss/pages/_home.module.scss";

export default function HomePage() {
  return (
    <>
      <HeadingHome />
      <HomeLandingBanner />
      <div
        className={`${styles["home_page_container"]} ${styles["layout_wrapper_page"]}`}
      >
        <h1>Hello, World!</h1>
      </div>
    </>
  );
}
