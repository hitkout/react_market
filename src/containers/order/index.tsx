import React from 'react';
import style from './style.css';
import TopPanel from '../../components/top-panel';
import LabeledInput from '../../components/labeled-input';
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import i18next from 'i18next';

function Order() {
    
    return (
        <>
            <TopPanel />
            <div className={style.basketForm}>
                <div className={style.borderForm}>
                    <form>
                        <h1 className={style.formTitle}>{i18next.t('order.title')}</h1>
                        <div>
                            <p className={style.pTitle}>{i18next.t('order.name')}</p>
                        <LabeledInput id="name" name="name" icon={faUser} />
                        </div>
                        <div>
                            <p className={style.pTitle}>{i18next.t('order.mail')}</p>
                        <LabeledInput id="email" name="email" type="email" icon={faEnvelope} />
                        </div>
                        <div>
                            <p className={style.pTitle}>{i18next.t('order.phone')}</p>
                        <LabeledInput id="name" name="phone" type="tel" icon={faPhone} />
                        </div>
                        <button className={style.sendForm}>{i18next.t('order.submit')}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Order;