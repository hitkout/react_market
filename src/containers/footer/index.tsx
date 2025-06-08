import React from 'react';

import { faEnvelope, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from './style.css';
import { faInstagram, faTwitter, faVk } from '@fortawesome/free-brands-svg-icons';
import i18next from 'i18next';

const Footer = () => (
	<div className={style.footer} id="linkOnFooter">
		<div className={style.footerContent}>
			<div className={style.container}>
				<h4 className={style.footerTitle}>{i18next.t('footer.title')}</h4>
				<div className={style.footerRow}>
					<div className={style.footerInfo}>
						<div className={style.footerText}>
							{i18next.t('footer.text')}
						</div>

						<ul className={style.footerList}>
							<li>
								<i><FontAwesomeIcon icon={faPhoneAlt} /></i>
								<a className={style.footerPhone} href="tel:380963092145">8 (845)255-35-35</a>
							</li>
							<li>
								<i><FontAwesomeIcon icon={faEnvelope} /></i>
								<a className={style.footerMail} href="#">layout585@gmail.com</a>
							</li>
							<li>
								<i><FontAwesomeIcon icon={faMapMarkedAlt} /></i>
								<a className={style.footerGeo} href="#">{i18next.t('footer.address')}</a>
							</li>
						</ul>
					</div>
					<div className={style.footerInfo}>
						<div className={style.footerText}>
							{i18next.t('footer.follow')}
						</div>
						<ul className={style.footerList2}>
							<li>
								<a className={style.footerLink}><i><FontAwesomeIcon icon={faInstagram} /></i></a>
							</li>
							<li>
								<a className={style.footerLink}><i><FontAwesomeIcon icon={faVk} /></i></a>
							</li>
							<li>
								<a className={style.footerLink}><i><FontAwesomeIcon icon={faTwitter} /></i></a>
							</li>
						</ul>
					</div>
					<div className={style.map}>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.9251604504643!2d46.02699331597292!3d51.55127131531509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7d363ebfa75%3A0x77ab133b7eca6838!2z0KXQstCw0LvRi9C90YHQutCw0Y8g0YPQuy4sIDk0LCDQodCw0YDQsNGC0L7Qsiwg0KHQsNGA0LDRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MTAwMTk!5e0!3m2!1sru!2sru!4v1613648292379!5m2!1sru!2sru" className={style.frameMap}></iframe>
					</div>
				</div>
			</div>
		</div>
		<div className={style.footerCopy}>
			<div className={style.footerCopyText}>
				{i18next.t('footer.rights')}
			</div>
		</div>
	</div>
);

export default Footer