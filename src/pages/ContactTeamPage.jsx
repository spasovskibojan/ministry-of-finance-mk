import HeroOtherPages from "../components/HeroOtherPages.jsx";
import './styles/ContactTeamPage.css'
import {useTranslation} from "react-i18next";
const ContactTeamPage = () => {
    const {t}=useTranslation()
    return (
        <>
            <HeroOtherPages title={t('contactTeam.title')} subtitle={t('contactTeam.subtitle')}/>
            <div className={'team-container'}>
                <h1>{t('contactTeam.head1')}</h1>
                <div className="teamMember">
                    <p className="imeMember">{t('contactTeam.paragraph1.p1')}</p>
                    <p className="brojMember">02/3255-466</p>
                    <p className="mailMember"><a href="mailto:drzaven.sekretar@finance.gov.mk">drzaven.sekretar@finance.gov.mk</a></p>
                </div>
                <h1>{t('contactTeam.head2')}</h1>
                <div className="teamMember">
                    <p className="imeMember">{t('contactTeam.paragraph2.p1')}</p>
                    <p className="role">{t('contactTeam.paragraph2.d')}</p>
                    <p className="brojMember">02/3255-373</p>
                    <p className="mailMember"><a href="mailto:suzana.stoimceva@finance.gov.mk">suzana.stoimceva@finance.gov.mk</a></p>
                </div>
                <div className="teamMember">
                    <p className="imeMember">{t('contactTeam.paragraph3.p1')}</p>
                    <p className="role">{t('contactTeam.paragraph3.d')}</p>
                    <p className="brojMember">02/3255-352</p>
                    <p className="mailMember"><a href="mailto:dzelal.ramadani@finance.gov.mk">dzelal.ramadani@finance.gov.mk</a></p>
                </div>
                <div className="teamMember">
                    <p className="imeMember">{t('contactTeam.paragraph4.p1')}</p>
                    <p className="role">{t('contactTeam.paragraph4.d')}</p>
                    <p className="brojMember">02/3255-557</p>
                    <p className="mailMember"><a href="mailto:liljana.gjurovska@finance.gov.mk">liljana.gjurovska@finance.gov.mk</a></p>
                </div>
                <div className="teamMember">
                    <p className="imeMember">{t('contactTeam.paragraph5.p1')}</p>
                    <p className="role">{t('contactTeam.paragraph5.d')}</p>
                    <p className="brojMember">02/3255-587</p>
                    <p className="mailMember"><a href="mailto:nevzat.velii@finance.gov.mk">nevzat.velii@finance.gov.mk</a></p>
                </div>
            </div>
        </>
    );
};

export default ContactTeamPage;
