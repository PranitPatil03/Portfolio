import React,{useState} from 'react'
import {images} from '../../constants'
import {client} from '../../Client'
import {AppWrap} from '../../wrapper'
import './Footer.scss'

const Footer = () => {

  const [formData, setformData] = useState({name:"",email:"",message:""})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;

  const handleChangeInput=(e)=>{
    const {name,value}=e.target

    setformData({...formData,[name]:value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Connect with Me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email"/>
          <a href='mailto:patilpranit3112@gmail.com' className='p-text'>Patilpranit3112@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href='tel:8698437788' className='p-text'>8698437788</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className='app__flex app__footer-form'>
        <div className='app__flex'>
          <input className='p=text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p=text' type="email" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
          name="message"          
          vlaue={message}
          className='p-text'
          placeholder='Your Message'
          onChange={handleChangeInput}
          />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit}>{loading ? "Sending": "Send Message"}</button>
      </div>
      :<div>
        <h3 className='head-text'>Thank you getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(Footer,'footer')
