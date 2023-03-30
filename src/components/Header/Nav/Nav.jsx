import s from "./Nav.module.css";

const Nav = ({ show_burger, setShow_burger }) => {
  return (
    <div className={show_burger ? s.nav_wrapper : s.nav_wrapper_black}>
      <div className={show_burger ? s.links : s.links_black}>
        <a href="">Home</a>

        <a href="">
          Features <div className={show_burger ? s.arrow : s.arrow_black}></div>{" "}
        </a>
        <a href="">Blog</a>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className={show_burger ? s.icons : s.icons_black}>
        <a href="">
          {" "}
          <div
            className={
              show_burger ? s.icons_img_round : s.icons_img_round_black
            }
          ></div>{" "}
          <div className={s.icons_img_basket}></div>{" "}
        </a>
        <a href="">
          {" "}
          <div
            className={
              show_burger ? s.icons_img_round : s.icons_img_round_black
            }
          ></div>{" "}
          <div className={s.icons_img_user}></div>{" "}
        </a>
      </div>
      <div
        onClick={() => setShow_burger((prev) => !prev)}
        className={show_burger ? s.burger : s.close_burger}
      ></div>
    </div>
  );
};

export default Nav;
