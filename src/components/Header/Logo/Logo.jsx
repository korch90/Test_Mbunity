import s from "./Logo.module.css";

const Logo = ({ show_burger }) => {
  return (
    <div className={show_burger ? s.logo_wrapper : s.logo_wrapper_black}>
      Logo Here
    </div>
  );
};

export default Logo;
