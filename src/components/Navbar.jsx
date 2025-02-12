import { React, useState, useEffect } from 'react';
import Logo from '../assets/images/Logo.png';
import './styles/Navbar.css';
import macedonianFlag from '../assets/images/macedonian-flag.png';
import englishFlag from '../assets/images/english-flag.png';
import {Link, NavLink, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBuilding, faCogs, faNewspaper, faBook, faChevronDown, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { auth } from "../config/firebase.js";
import {signOut} from "firebase/auth";

function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hoveredUser, setHoveredUser] = useState(false);
    const { i18n, t } = useTranslation();

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || 'mk';
        i18n.changeLanguage(storedLanguage);
    }, [i18n])

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const toggleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDropdown(false);
    };

    const toggleDropdown = (menu) => {
        console.log("Toggling dropdown for:", menu);
        console.log("Current activeDropdown:", activeDropdown);

        setActiveDropdown((activeDropdown === menu) ? null : menu);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };
    const navigate = useNavigate()
    const logout = async () => {
        try {
            await signOut(auth);
            alert(t('signInPart.signOutAlert'));
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    const navItems = [
        {
            key: 'ministry',
            name: t('nav.line1'),
            path: '/ministry',
            icon: faBuilding,
            subItems: [
                { name: t('nav.subItems.minister'), path: '/ministry/minister-of-finance' },
                { name: t('nav.subItems.deputyMinister'), path: '/ministry/deputy-minister' }
            ]
        },
        {
            key: 'news',
            name: t('nav.line2'),
            path: '/news',
            icon: faNewspaper
        },
        {
            key: 'resources',
            name: t('nav.line3'),
            path: '/resources',
            icon: faBook,
            subItems: [
                { name: t('nav.subItems.statistics'), path: '/resources/statistics' },
                { name: t('nav.subItems.reforms'), path: '/resources/reforms' },
                { name: t('nav.subItems.projects'), path: '/resources/projects' },
                { name: t('nav.subItems.publicationsAndPosts'), path: '/resources/publications-and-posts' },
                { name: t('nav.subItems.publicAcquisitions'), path: '/resources/public-acquisitions' },
                { name: t('nav.subItems.laws'), path: '/resources/laws' }
            ]
        },
        {
            key: 'services',
            name: t('nav.line4'),
            path: '/services',
            icon: faCogs,
            subItems: [
                { name: t('nav.subItems.jobs'), path: '/services/jobs' },
                { name: t('servicesPage.otherServices'), path: '/services/e-services' },
            ]
        },
        {
            key: 'contact',
            name: t('nav.line5'),
            path: '/contact',
            icon: faEnvelope,
            subItems: [
                { name: t('nav.subItems.team'), path: '/contact/team' }
            ]
        }
    ];

    const user = auth?.currentUser?.email;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.nav-links') && !event.target.closest('.menu-icon')) {
                setIsMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar" id="top">
            <div className="navbar-bottom">
                <Link to="https://www.facebook.com/MinistryOfFinanceMK" className="social-link" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="https://x.com/MOF_MKD" className="social-link" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link to="https://www.instagram.com/mf_mkd/" className="social-link" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </div>

            <div className="navbar-top">
                <NavLink to='/'><img src={Logo} alt="Ministry Logo" className="logo"/></NavLink>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <div key={index} className="nav-item" onMouseEnter={() => handleMouseEnter(item.key)} onMouseLeave={handleMouseLeave}>
                            <NavLink to={item.path} onClick={()=>{setIsMenuOpen(false)}}>
                                <FontAwesomeIcon className="navlinkIcon" icon={item.icon} aria-hidden="true"/> {item.name}
                            </NavLink>
                            {item.subItems && (
                                <>
                                    <span className="moreOptions" onClick={() => toggleDropdown(item.key)}>
                                        <FontAwesomeIcon icon={activeDropdown === item.key ? faChevronUp : faChevronDown} />
                                    </span>
                                    {(hoveredLink === item.key || activeDropdown === item.key) && (
                                        <div className={`dropdown-menu ${activeDropdown === item.key ? 'dropActive' : ''}`}>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Link key={subIndex} to={subItem.path} onClick={()=>{setIsMenuOpen(false)}}>{subItem.name}</Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="menu-icon">
                    <button onClick={toggleButtonClick}><FontAwesomeIcon icon={faBars}/></button>
                </div>
                <div className="language-switcher">
                    <button onClick={() => changeLanguage('mk')} className={i18n.language === 'mk' ? 'selected' : ''}>
                        <img src={macedonianFlag} alt="Macedonian Flag" className="flag" width="20px" />
                    </button>
                    <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'selected' : ''}>
                        <img src={englishFlag} alt="English Flag" className="flag" width="20px" />
                    </button>

                    <span
                        className={'signInLogoutPart'}
                        onMouseEnter={() => setHoveredUser(true)}
                        onMouseLeave={() => setHoveredUser(false)}
                    >
                        {user  ?
                            (
                                <Link className={'signInLink'}>{user.slice(0, 8)}..</Link>
                            ) :
                            (
                                <Link className={'signInLink'} to={'/sign-in'}>{t('signInPart.signIn')}</Link>
                            )
                        }
                        { hoveredUser && user && (  // moze i bez hoveredUser ?
                            <div className="user-details">
                                <p>{user}</p>
                                <button onClick={logout}>{t('signInPart.signOut')}</button>
                            </div>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
