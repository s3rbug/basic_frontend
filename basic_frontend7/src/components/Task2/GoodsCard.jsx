import classes from "./GoodsCard.module.css";

const GoodsCard = ({ image, title, price, description }) => {
	return (
		<div className={classes.card}>
			<img src={image} alt="goods" className={classes.image} />
			<div>
				<b>Name:</b> {title}
			</div>
			<div>
				<b>Price:</b> {price}$
			</div>
			<div className={classes.description}>
				<b>Description:</b> {description}{" "}
			</div>
		</div>
	);
};

export default GoodsCard;
