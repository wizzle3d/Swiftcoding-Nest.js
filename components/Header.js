import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span style={{ color: "rgb(79, 91, 196)" }}>Swift </span>Coding
      </h1>
      <p className={headerStyles.description}>
        Web developement news and fast coding techniques to improve your skills
      </p>
    </div>
  );
};

export default Header;
