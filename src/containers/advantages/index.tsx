import React from 'react';
import style from './style.css';
import { faPercent, faUser, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from 'i18next';

function Advantages() {
    return (
        <section className={style.advantages} id="linkOnAdvantages">
            <div className={style.container}>
                <h2 className={style.advantagesTitle}>
                    {i18next.t('advantages.title')}
                </h2>
                <div className={style.advantagesCards}>
                    <div className={style.advantagesCard}>
                        <FontAwesomeIcon className={style.advantagesIcon} icon={faPercent} />
                        <div className={style.advantagesCardDescription}>
                            <h3 className={style.advantagesCardTitle}>{i18next.t('advantages.text1')}</h3>
                            <p className={style.advantagesCardText}>{i18next.t('advantages.text2')}</p>
                        </div>
                    </div>
                    <div className={style.advantagesCard}>
                        <FontAwesomeIcon className={style.advantagesIcon} icon={faUser} />
                        <div className={style.advantagesCardDescription}>
                            <h3 className={style.advantagesCardTitle}>{i18next.t('advantages.text3')}</h3>
                            <p className={style.advantagesCardText}>{i18next.t('advantages.text4')}</p>
                        </div>
                    </div>
                    <div className={style.advantagesCard}>
                        <FontAwesomeIcon className={style.advantagesIcon} icon={faFile} />
                        <div className={style.advantagesCardDescription}>
                            <h3 className={style.advantagesCardTitle}>{i18next.t('advantages.text5')}</h3>
                            <p className={style.advantagesCardText}>{i18next.t('advantages.text6')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages