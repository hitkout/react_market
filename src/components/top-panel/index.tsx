import React from 'react';
import { faDesktop, faShoppingCart, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RuSvg, EnSvg } from '../../assets/import';
import { Link } from 'react-router-dom';
import { Link as Anchor } from 'react-scroll';
import style from './style.css';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

function TopPanel() {
	const { totalPrice, totalCount } = useSelector(({ basket }) => ({
		totalPrice: basket.totalPrice,
		totalCount: basket.totalCount
	}));

	const handleChangeLangToRu = () => {
		localStorage.setItem('i18nextLng', 'ru');
		location.reload();
	};

	const handleChangeLangToEn = () => {
		localStorage.setItem('i18nextLng', 'en');
		location.reload();
	};

	return (
		<div className={style.topPanel} id="scrollToTop">
			<div className={style.container}>
				<div className={style.rowTopPanel}>
					<div className={style.topPanelLogo}>
						<Link to="/">
							<button className={style.topPanelLogo}><i><FontAwesomeIcon icon={faDesktop} /></i>PCMaster</button>
						</Link>
					</div>
					<div className={style.topPanelContent}>
						<nav className={style.topPanelNav}>
							<ul>
								<li>
									<Anchor activeClass="active" className="linkOnAdvantages" to="linkOnAdvantages" spy={true} smooth={true} duration={500} >
										<button className={style.topPanelNavLink}>{i18next.t('top.panel.advantages')}</button>
									</Anchor>
								</li>
								<li>
									<Anchor activeClass="active" className="linkOnPopular" to="linkOnPopular" spy={true} smooth={true} duration={500} >
										<button className={style.topPanelNavLink}>{i18next.t('top.panel.popular')}</button>
									</Anchor>
								</li>
								<li>
									<Link to="/catalog">
										<button className={style.topPanelNavLink}>{i18next.t('top.panel.catalog')}</button>
									</Link>
								</li>
								<li>
									<Anchor activeClass="active" className="linkOnFooter" to="linkOnFooter" spy={true} smooth={true} duration={500} >
										<button className={style.topPanelNavLink}>{i18next.t('top.panel.about')}</button>
									</Anchor>
								</li>
							</ul>
							<div className={style.topPanelNavIcons}>
								<Link to="/basket">
									<button className={style.topPanelNavIcon}>
										<span>{totalPrice}<i><FontAwesomeIcon icon={faRubleSign} /> </i></span>
										<span><i><FontAwesomeIcon icon={faShoppingCart} /></i>{totalCount}</span>
									</button>
								</Link>
							</div>
							<div className={style.languageButtons}>
								<button className={style.languageButtonStyle} id="clickLanguageIdEn" onClick={handleChangeLangToEn}><img className={style.languageImgStyle} src={EnSvg} alt="" /></button>
								<button className={style.languageButtonStyle} id="clickLanguageIdRu" onClick={handleChangeLangToRu}><img className={style.languageImgStyle} src={RuSvg} alt="" /></button>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopPanel;