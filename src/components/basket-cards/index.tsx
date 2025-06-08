import React from 'react';
import style from './style.css';
import * as assets from '../../assets/import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faMinusCircle, faPlusCircle, faRubleSign } from '@fortawesome/free-solid-svg-icons';

function BasketCards({ id, image, name, totalPrice, totalCount, onRemove, onMinus, onPlus }) {
    const handleRemoveClick = () => {
        onRemove(id);
    }

    const handleMinusItem = () => {
        onMinus(id);
    }

    const handlePlusItem = () => {
        onPlus(id);
    }

    return (
        <div className={style.CatalogCard}>
            <div className={style.cardRow}>
                <div className={style.catalogBlockImage}>
                    <img src={assets[image]} className={style.catalogCardImage} alt={name} />
                </div>
                <p className={style.catalogCardTitle}>{name}</p>
                <div className={style.counterStyle}>
                    <button onClick={handleMinusItem} className={style.buttonStyleBasketIcon}><i><FontAwesomeIcon icon={faMinusCircle} /></i></button>
                    {totalCount}
                    <button onClick={handlePlusItem} className={style.buttonStyleBasketIcon}><i><FontAwesomeIcon icon={faPlusCircle} /></i></button>
                </div>
                <div className={style.priceProduct}>
                    {totalPrice}<i><FontAwesomeIcon icon={faRubleSign} /></i>
                </div>
                <div className={style.crossIcon}>
                    <button onClick={handleRemoveClick} className={style.buttonStyleBasketIcon}><i><FontAwesomeIcon icon={faTimesCircle} /></i></button>
                </div>
            </div>
        </div>
    )
}

export default BasketCards;