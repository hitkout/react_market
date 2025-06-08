import React from 'react';
import i18next from 'i18next';
import style from './style.css';

const Header = () => (
		<div className={style.header}>
			<div className={style.container}>
				<p className={style.headerText}>{i18next.t('header.text')}</p>
				<a className={style.headerPromoButton}>{i18next.t('header.button')}</a>
			</div>
		</div>
);

export default Header