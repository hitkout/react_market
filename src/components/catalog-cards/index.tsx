import React from 'react';
import style from './style.css';
import * as assets from '../../assets/import';
import LoadingCards from './loadingCards';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

interface mainCardsProps {
    id: number;
	loading: boolean;
	name: string;
	image?: string;
	price: number;
	processor?: string;
	motherboard?: string;
	videocard?: string;
	RAMmemory?: string;
	hdd?: string;
	ssd?: string;
	powerSupplyUnit?: string;
	onClickAddProducts: any;
	addedCount: any;
}

function CatalogCards({ id, loading, name, image, price, processor, motherboard, videocard, RAMmemory, hdd, ssd, powerSupplyUnit, onClickAddProducts, addedCount }: mainCardsProps) {
	if (loading) {
		<LoadingCards />
	}

	const onAddProducts = () => {
		const obj = {
			id,
			image,
			name,
			price
		}
		onClickAddProducts(obj);
	};

	return (
		<div className={style.catalogCard}>
			<div className={style.catalogCardImg}>
				<img src={assets[image]} className={style.catalogCardImg} alt={name} />
			</div>
			<div className={style.catalogCardDescription}>
				<div className={style.catalogCardTitle}>{name}</div>
				<div className={style.catalogCardPrice}>{price}{i18next.t('catalog.cards.price')}</div>
			</div>
			<div className={style.catalogCardSpecifications}>
				<ul>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.processor')}</span>{processor}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.motherboard')}</span>{motherboard}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.videocard')}</span>{videocard}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.RAMmemory')}</span> {RAMmemory}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.hdd')}</span>{hdd}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.ssd')}</span>{ssd}</li>
					<li><span className={style.specificationsType}>{i18next.t('catalog.cards.powerSupplyUnit')}</span>{powerSupplyUnit}</li>
				</ul>
				<Link to={`/product/${id}`}>
					<button className={style.catalogCardButton}>{i18next.t('catalog.cards.productPage')}</button>
				</Link>
				<button className={style.catalogCardButton} onClick={onAddProducts}>{i18next.t('catalog.cards.addToCart')}{addedCount && <i className={style.addedCount}>{addedCount}</i>}</button>
			</div>
		</div>
	)
}

export default CatalogCards;