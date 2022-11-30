import { useRouter } from "next/router";
import ColorBarComponent from "./structure-components/colorbar-component/ColorBar";
import HeaderComponent from "./structure-components/Header";
import FooterComponent from "./structure-components/footer-component/Footer";

export default function Layout({ children }) {
  const router = useRouter();
  // Basically hide the navigation and footer when we land on the 404 page. We can also change it to something else if we want to
  const showColorBar = router.pathname === "/404" ? false : true;
  const showHeader = router.pathname === "/404" ? false : true;
  const showFooter = router.pathname === "/404" ? false : true;
  return (
    <>
      {showColorBar && <ColorBarComponent />}
      {showHeader && <HeaderComponent />}
      {children}
      {showFooter && <FooterComponent />}
    </>
  );
}
