import { useContext } from "react";
import { AppContext } from "../../context";
import Image from "next/image";
import Link from "next/link";
import menu from "../../assets/svg/menu.svg";
import styles from "./styles";
import Logo from "../Logo";
import Drawer from "../Drawer";
import { useRouter } from "next/router";
// import News from "../News";

const Header = () => {
  const { setShowDrawer } = useContext(AppContext);
  const router = useRouter()
  return (
    <>
      <Drawer />
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Logo />
          <div className="lg:flex items-center justify-center hidden">
            <nav className={styles.nav}>
              <div className={router.pathname === '/' ? styles.activeNavLink : styles.navLink}>
                <Link href="/">Home</Link>
              </div>
              <div className={router.pathname === '/about' ? styles.activeNavLink : styles.navLink}>
                <Link href="/about">About</Link>
              </div>
              <div className="m-3">|</div>
              <div className={router.pathname === '/contact' ? styles.activeNavLink : styles.navLink}>
                <Link href="/contact">Contact</Link>
              </div>
            </nav>
          </div>
          <div className={styles.menuIcon} onClick={() => setShowDrawer(true)}>
            <Image src={menu} alt="menu" width={50} height={50} />
          </div>
        </div>
      </header>
      {/* <News label="We are celebrating our 24hrs anniversary. 30% discount on all services" /> */}
    </>
  );
};

export default Header;
