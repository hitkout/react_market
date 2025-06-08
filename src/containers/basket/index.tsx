import React from 'react';
import style from './style.css';
import TopPanel from '../../components/top-panel';
import { Link } from 'react-router-dom';
import BasketCards from '../../components/basket-cards';
import { useSelector, useDispatch } from 'react-redux';
import { clearBasket, removeItem, plusItem, minusItem } from '../../redux/actions/basket';
import { faTrashAlt, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from 'i18next';

function Basket() {
    const dispatch = useDispatch()

    const { totalPrice, totalCount, items } = useSelector(({ basket }) => basket);
    const addedProducts = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    const onClearBasket = () => {
        dispatch(clearBasket());
    };

    const onRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const onPlusItem = (id) => {
        dispatch(plusItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusItem(id));
    };

    return (
        <>
            <TopPanel />
            <div className={style.catalog}>
                <h1 className={style.basketTitle}>{i18next.t('basket.title')}</h1>
                <div className={style.clearBasket}>
                    <button onClick={onClearBasket} id="clearBasketId" className={style.clearBasketButton}><i className={style.clearBasketIcon}><FontAwesomeIcon icon={faTrashAlt} /></i>{i18next.t('basket.emptyTrash')}</button>
                </div>
                {
                    addedProducts.map(obj => (
                        <BasketCards
                            id={obj.id}
                            key={obj.id}
                            image={obj.image}
                            name={obj.name}
                            totalPrice={items[obj.id].totalPrice}
                            totalCount={items[obj.id].items.length}
                            onRemove={onRemoveItem}
                            onMinus={onMinusItem}
                            onPlus={onPlusItem}
                        />))
                }
                <div className={style.basketTotal}>
                    <div className={style.basketCountProducts}>
                        {i18next.t('basket.allProducts')}{totalCount}{i18next.t('basket.pieces')}
                    </div>
                    <div className={style.basketTotalPrice}>
                        {i18next.t('basket.price')}{totalPrice}<i><FontAwesomeIcon icon={faRubleSign} /></i>
                    </div>
                </div>
                <div className={style.basketButtons}>
                    <Link to="/">
                        <button className={style.buttonBack}>
                            {i18next.t('basket.back')}
                        </button>
                    </Link>
                    <Link to="/order">
                        <button className={style.buttonNext}>
                            {i18next.t('basket.next')}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Basket;