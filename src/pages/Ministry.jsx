import HeroOtherPages from "../components/HeroOtherPages.jsx";
import './styles/Ministry.css'
import {useTranslation} from "react-i18next";
const Ministry = () => {
    const {t}=useTranslation()
    return (
        <>
            <HeroOtherPages title={t('ministry.title')} subtitle={t('ministry.subtitle')}/>
            <div className={'Ministry-division'}>
                <h2>{t('ministry.h2')}</h2>
                <ul>
                    <li>{t('ministry.ul.li1')}</li>
                    <li>{t('ministry.ul.li2')}</li>
                    <li>{t('ministry.ul.li3')}</li>
                    <li>{t('ministry.ul.li4')}</li>
                    <li>{t('ministry.ul.li5')}</li>
                    <li>{t('ministry.ul.li6')}</li>
                    <li>{t('ministry.ul.li7')}</li>
                    <li>{t('ministry.ul.li8')}</li>
                    <li>{t('ministry.ul.li9')}</li>
                    <li>{t('ministry.ul.li10')}</li>
                    <li>{t('ministry.ul.li11')}</li>
                    <li>{t('ministry.ul.li12')}</li>
                    <li>{t('ministry.ul.li13')}</li>
                    <li>{t('ministry.ul.li14')}</li>
                    <li>{t('ministry.ul.li15')}</li>
                    <li>{t('ministry.ul.li16')}</li>
                    <li>{t('ministry.ul.li17')}</li>
                    <li>{t('ministry.ul.li18')}</li>
                </ul>
            </div>
        </>
    );
};

export default Ministry;
