import {useState, useRef} from 'react';
import './styles/ContactPage.css';
import HeroOtherPages from "../components/HeroOtherPages.jsx";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t} = useTranslation()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs // Mailovite stigaat na https://dashboard.emailjs.com/admin/history
            .sendForm(
                'service_sufalji',
                'template_kx68mls',
                form.current, {
                publicKey: 'mMeY_4qQHh5MQpP_D',
            })
            .then(
                () => {
                    toast.success('EMAIL SENT SUCCESSFULLY')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <HeroOtherPages title={t('contact.title')}/>

            <div className="contact-container">
                <div className="contact-content">
                    <h1>{t('contact.h1')}</h1>
                    <div className="contact-details">
                        <div className="contact-info">
                            <p>{t('contact.p1')}</p><br/>
                            <p>{t('contact.p2')}</p>
                            <p>{t('contact.p3')}</p>
                            <p>{t('contact.p4')}</p>
                            <p>{t('contact.p5')}</p>
                            <p>
                                <a href="mailto:finance@finance.gov.mk?subject=Contacting Ministry of Finance">
                                    finance@finance.gov.mk
                                </a>
                            </p> <br/>
                            <p>{t('contact.p6')} <Link to={'/contact/team'} onClick={handleLinkClick}>{t('contact.p7')}</Link></p>
                        </div>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.l1')}</label>
                                    <input type="text" id="name" name="name" value={formData.name}
                                           onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">{t('contact.l2')}</label>
                                    <input type="text" id="surname" name="surname" value={formData.surname}
                                           onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.l3')}</label>
                                    <input type="email" id="email" name="email" value={formData.email}
                                           onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">{t('contact.l4')}</label>
                                    <input type="text" id="subject" name="subject" value={formData.subject}
                                           onChange={handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.l5')}</label>
                                    <textarea id="message" name="message" value={formData.message}
                                              onChange={handleChange} required/>
                                </div>
                                <button type="submit">{t('contact.b')}</button>
                            </form>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d23721.814733475734!2d21.426322!3d41.995407!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDU5JzM1LjciTiAyMcKwMjUnNDIuNiJF!5e0!3m2!1sen!2sus!4v1720784696786!5m2!1sen!2sus"
                            width={'100%'} height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;