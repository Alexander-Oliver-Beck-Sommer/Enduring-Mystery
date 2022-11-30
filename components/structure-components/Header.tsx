import styles from "../../../scss/components/_header.module.scss";
import HeaderDesktop from "./header-components/HeaderDesktop";
import HeaderMobile from "./header-components/HeaderMobile";

export default function HeaderComponent() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
