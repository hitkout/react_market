import React from 'react';
import style from './style.css';
import TopPanel from '../../components/top-panel';
import CatalogCards from '../../components/catalog-cards';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import { addProductsInBasket } from '../../redux/actions/basket'
import LoadingCards from '../../components/catalog-cards/loadingCards';

function Catalog() {

    const dispatch = useDispatch();
	const items = useSelector(({ products }) => products.items);
	const basketItems = useSelector(({ basket }) => basket.items);
	const loading = useSelector(({ products }) => products.loading);
		
	React.useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const handleAddProductsInBasket = (obj) => {
		dispatch(addProductsInBasket(obj));
	}

    return (
        <>
            <TopPanel />
            <div className={style.catalog}>
                <div className={style.container}>
                    <div id="catalogTitle" className={style.catalogTitle}>
                        Каталог товаров
				</div>
                    <div className={style.catalogRow}>
                        {
                            loading ? items.map((obj) => <CatalogCards key={obj.id} addedCount={basketItems[obj.id] && basketItems[obj.id].items.length} {...obj} onClickAddProducts={handleAddProductsInBasket} />)
                                : Array(6).fill(0).map((_, index) => (<LoadingCards key={index} />))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;