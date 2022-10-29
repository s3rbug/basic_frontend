import { useEffect, useState } from "react";
import GoodsCard from "./GoodsCard";
import classes from "./Task2.module.css"

const Task2 = () => {
	const [goods, setGoods] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=10")
			.then((response) => response.json())
			.then((data) => setGoods(data));
	}, []);

	if (!goods) {
		return <span>Loading...</span>;
	}

	return (
		<div className={classes.goods}>
			{goods.map((good) => {
				return (
					<GoodsCard
						key={good.title}
						image={good.image}
						price={good.price}
						title={good.title}
						description={good.description}
					/>
				);
			})}
		</div>
	);
};

export default Task2;
