import s from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    
    <div className={s.contact_main_text}>
           

      Contact Us
      <p>Any question or remarks? Just write us a message!</p>
      <div className={s.contact_container}>
        <div className={s.contact_black_box}>
          <div className={s.big_round}></div>
          <div className={s.small_round}></div>
          <div className={s.contact_black_box_top}>
            <h3>Contact Information</h3>
            <p>Say something to start a live chat!</p>
          </div>
          <div className={s.contact_black_box_center}>
            <div className={s.contact_black_box_center_info}>
              <div className={s.contact_img}><FontAwesomeIcon  icon={faPhoneVolume}/></div>
              <a href="tel:+1012 3456 789">+1012 3456 789</a>
            </div>

            <div className={s.contact_black_box_center_info}>
              <div className={s.contact_img}><FontAwesomeIcon  icon={faEnvelope}/></div>
              <a href="email:demo@gmail.com">demo@gmail.com</a>
            </div>

            <div className={s.contact_black_box_center_info}>
              <div className={s.contact_img}><FontAwesomeIcon  icon={faLocationDot}/></div>
              <a href="tel:+1012 3456 789">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </a>
            </div>
          </div>
          <div className={s.contact_black_box_bottom}>
            <div className={s.contact_black_box_bottom_img}> <FontAwesomeIcon  icon={faTwitter} /></div>
            <div className={s.contact_black_box_bottom_img}> <FontAwesomeIcon  icon={faInstagram} /></div>
            <div className={s.contact_black_box_bottom_img}> <FontAwesomeIcon  icon={faLinkedinIn} /></div>
          </div>
        </div>
        <div className={s.contact_white_box}>
          <div className={s.contact_white_box_input_forms}>
            <label htmlFor="first_name">
              First Name <input type="text" placeholder=" " name="first_name" />
            </label>

            <label htmlFor="last_name">
              Last Name{" "}
              <input type="text" defaultValue="Doe" placeholder=" " name="last_name" />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" placeholder=" " name="email" />
            </label>

            <label htmlFor="phone_number">
              Phone Number
              <input
                type="tel"
                placeholder=" "
                defaultValue="+1 012 3456 789"
                name="phone_number"
              />
            </label>
          </div>
          <div className={s.contact_white_box_select_subject}>
            <fieldset>
              <legend>Select Subject?</legend>
              <div className={s.contact_white_box_select_subject_radio}>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  defaultValue="email"
                />
                <label htmlFor="contactChoice1">General Inquiry</label>

                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  defaultValue="email"
                />
                <label htmlFor="contactChoice2">General Inquiry</label>

                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  defaultValue="email"
                />
                <label htmlFor="contactChoice3">General Inquiry</label>

                <input
                  type="radio"
                  id="contactChoice4"
                  name="contact"
                  defaultValue="mail"
                />
                <label htmlFor="contactChoice4">General Inquiry</label>
              </div>
            </fieldset>
            <div className={s.message}>
              <label htmlFor="message">
              Email{" "}
                <input
                  type="text"
                  placeholder="Write your message.."
                  name="message"
                />
              </label>
            </div>
          </div>
          <div className={s.contact_white_box_bottom}>
            <button> Send Message</button>
            <div className={s.contact_white_box_bottom_img}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
