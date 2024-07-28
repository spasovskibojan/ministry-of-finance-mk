import './styles/FiscalCounter.css'
import {useTranslation} from "react-i18next";

const FiscalCounter = () => {
    const {t} = useTranslation()
    return (
        <>
            <h1 className={'fiscal-heading'}>{t("fiscalCounter.head1")}</h1>
            <div className="fiscal-counter">
                <div className="counter-item">
                    <h2>{t("fiscalCounter.counterItems.i1.Header")}</h2>
                    <p>{t("fiscalCounter.counterItems.i1.p1")}</p>
                    <div className="loader">
                        <div className="loader-bar" style={{ width: '75%' }}></div> {/* Adjust width for percentage */}
                    </div>
                    <p className="amount">{t("fiscalCounter.counterItems.i1.p2")}</p>
                    <p className="currency">{t("fiscalCounter.counterItems.i1.p3")}</p>
                    <p className="date">{t("fiscalCounter.counterItems.i1.p4")}</p>
                </div>
                <div className="counter-item">
                    <h2>{t("fiscalCounter.counterItems.i2.Header")}</h2>
                    <p>{t("fiscalCounter.counterItems.i2.p1")}</p>
                    <div className="loader">
                        <div className="loader-bar" style={{ width: '95%' }}></div> {/* Adjust width for percentage */}
                    </div>
                    <p className="amount">{t("fiscalCounter.counterItems.i2.p2")}</p>
                    <p className="currency">{t("fiscalCounter.counterItems.i2.p3")}</p>
                    <p className="date">{t("fiscalCounter.counterItems.i2.p4")}</p>
                </div>
                <div className="counter-item">
                    <h2>{t("fiscalCounter.counterItems.i3.Header")}</h2>
                    <p>{t("fiscalCounter.counterItems.i3.p1")}</p>
                    <div className="loader">
                        <div className="loader-bar" style={{ width: '55%' }}></div> {/* Adjust width for percentage */}
                    </div>
                    <p className="amount">{t("fiscalCounter.counterItems.i3.p2")}</p>
                    <p className="currency">{t("fiscalCounter.counterItems.i3.p3")}</p>
                    <p className="date">{t("fiscalCounter.counterItems.i3.p4")}</p>
                </div>
                <div className="counter-item">
                    <h2>{t("fiscalCounter.counterItems.i4.Header")}</h2>
                    <p>{t("fiscalCounter.counterItems.i4.p1")}</p>
                    <div className="loader">
                        <div className="loader-bar" style={{ width: '30%' }}></div> {/* Adjust width for percentage */}
                    </div>
                    <p className="amount">{t("fiscalCounter.counterItems.i4.p2")}</p>
                    <p className="currency">{t("fiscalCounter.counterItems.i4.p3")}</p>
                    <p className="date">{t("fiscalCounter.counterItems.i4.p4")}</p>
                </div>

            </div>
        </>
    );
};

export default FiscalCounter;
