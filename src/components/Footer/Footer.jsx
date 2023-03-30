import s from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className={s.footer_wrapper}>
      <div className={s.logo_here}>Logo Here</div>
      <hr />
      <div className={s.footer_main}>
        <div className={s.footer_section}>
          <div className={s.topic}>Reach</div>
          <div className={s.footer_section_group}>
            <div className={s.footer_img}><FontAwesomeIcon  icon={faPhoneVolume} /></div>
            <a href="tel:+1012 3456 789">+1012 3456 789</a>
          </div>
          <div className={s.footer_section_group}>
            <div className={s.footer_img}><FontAwesomeIcon  icon={faEnvelope} /></div>
            <a href="email:demo@gmail.com">demo@gmail.com</a>
          </div>
          <div className={s.footer_section_group}>
            <div className={s.footer_img}><FontAwesomeIcon  icon={faLocationDot} /></div>
            <a href="tel:+1012 3456 789">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
          </div>
        </div>

        <div className={s.footer_section}>
          <div className={s.topic}>Company</div>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blogs</a>
        </div>

        <div className={s.footer_section}>
          <div className={s.topic}>Legal</div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Services</a>
          <a href="#">Terms of Use</a>
          <a href="#">Refund Policy</a>
        </div>

        <div className={s.footer_section}>
          <div className={s.topic}>Quick Links</div>
          <a href="#">Techlabz Keybox</a>
          <a href="#">Downloads</a>
          <a href="#">Forum</a>
        </div>

        <div className={s.footer_section}>
          <div className={s.topic}>Join Our Newsletter</div>
          <div className={s.button_input_group}>
            <input
              type="email"
              placeholder="Your email address"
              name=""
              id=""
            />
            <button>Subscribe</button>
          </div>
          <p>* Will send you weekly updates for your better tool management.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
