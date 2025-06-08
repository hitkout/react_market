import React, {useMemo} from 'react';
import style from './style.css';
import CatalogCards from '../../components/catalog-cards';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import { addProductsInBasket } from '../../redux/actions/basket'
import LoadingCards from '../../components/catalog-cards/loadingCards';
import i18next from 'i18next'

function MainPopular() {
	const dispatch = useDispatch();
	const items = useSelector(({ products }) => products.items);
	const basketItems = useSelector(({ basket }) => basket.items);
	const loading = useSelector(({ products }) => products.loading);

	const filtredItems = useMemo(() => {
		return items.filter((obj) => obj.popular > 8)
	}, [items]);

	React.useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const handleAddProductsInBasket = (obj) => {
		dispatch(addProductsInBasket(obj));
	}

	return (
		<div className={style.main} id="linkOnPopular">
			<div className={style.container}>
				<div id="catalogTitle" className={style.catalogTitle}>
					{i18next.t('popular.product')}
				</div>
				<div className={style.catalogRow}>
					{
						loading ? filtredItems.map((obj) => <CatalogCards key={obj.id} addedCount={basketItems[obj.id] && basketItems[obj.id].items.length} {...obj} onClickAddProducts={handleAddProductsInBasket} />)
							: Array(6).fill(0).map((_, index) => (<LoadingCards key={index} />))
					}
				</div>
			</div>
		</div>
	)
}

export default MainPopular;