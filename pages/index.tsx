import HeadingHome from "../components/heading-tags/HeadingHome";
import HomeLandingBanner from "../components/page-components/home/HomeLandingBanner";
import HomeMottoExplanation from "../components/page-components/home/HomeMottoExplanation";
import HomeWaresShowcase from "../components/page-components/home/HomeWaresShowcase";
import styles from "../scss/pages/_home.module.scss";

export default function HomePage() {
  return (
    <>
      <HeadingHome />
      <HomeLandingBanner />
      <div
        className={`${styles["home_page_container"]} ${styles["layout_wrapper_page"]}`}
      >
        <HomeMottoExplanation />
        <HomeWaresShowcase />
      </div>
    </>
  );
}
