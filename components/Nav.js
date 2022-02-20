import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Nav;
