
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Map from '../../components/footer/Map/Map';
const About = () => {


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
        toast.error("Please fill in all fields before sending the message.");
        return;
    }

    emailjs.sendForm('service_t7b30gx', 'template_dhfkwdd', form.current, 'sNoXwNTrfWNHcgqk8')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          toast.error("Error sending message. Please try again later.");
      });
  };



    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='border cursor-pointer' type="submit" value="Send" />
    </form>
    <Map/>
        </div>
    );
};

export default About;



