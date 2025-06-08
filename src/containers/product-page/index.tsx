import React, { useMemo } from 'react';
import style from './style.css';
import TopPanel from '../../components/top-panel';
import ProductCard from '../../components/product-card';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectComponent } from '../../redux/actions/productPage';
import * as selectors from '../../__data__/selectors/mainPage';
import { fetchProducts } from '../../redux/actions/products';
import { addProductsInBasket } from '../../redux/actions/basket';
import Footer from '../footer';


function ProductPage(props) {
	const dispatch = useDispatch();
	const items = useSelector(selectors.items);
	const error = useSelector(selectors.error);
	const basketItems = useSelector(({ basket }) => basket.items);
	const loading = useSelector(selectors.loading);

	const id = props.match.params.id;
	const filtredItems = useMemo(() => {
		return items.filter((obj) => obj.id == id)
	}, [items, id]);
	React.useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	React.useEffect(() => {
		dispatch(getSelectComponent());
	}, []);

	if (loading) {
		return <div>
			<h2>
				Идет загрузка...
			</h2>
		</div>;
	}
	if (error) {
		return <div style={{ color: "red" }}>{error}</div>;
	}

	const handleAddProductsInBasket = (obj) => {
		dispatch(addProductsInBasket(obj));
	}

	return (
		<>
			<TopPanel />
			<div className={style.productPage}>
				<div className={style.container}>
					{
						filtredItems.map((obj) => (
							<ProductCard key={obj.id} addedCount={basketItems[obj.id] && basketItems[obj.id].items.length} {...obj} onClickAddProducts={handleAddProductsInBasket}
							/>
						))
					}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductPage;