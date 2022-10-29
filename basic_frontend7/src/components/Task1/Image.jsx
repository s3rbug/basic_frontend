import { useState } from "react";
import classes from "./Image.module.css";

const Image = () => {
	const changeRate = 15;
	const [imageSize, setImageSize] = useState({ height: 300, width: 500 });
	const [isImageShown, setIsImageShown] = useState(true);
	const add = () => {
		setIsImageShown(true);
	}
	const remove = () => {
		setIsImageShown(false);
	}
	const increase = () => {
		setImageSize({height: imageSize.height + changeRate, width: imageSize.width + changeRate});
	};
	const decrease = () => {
		if(imageSize.height - changeRate > 0 && imageSize.width - changeRate > 0){
			setImageSize({height: imageSize.height - changeRate, width: imageSize.width - changeRate});
		}
	};
	const getDisplayValue = () => {
		return isImageShown ? "block" : "none";
	}
	return (
		<div>
			<div className={classes.buttons}>
				<button onClick={add}>Додати</button>
				<button onClick={increase}>Збільшити</button>
				<button onClick={decrease}>Зменшити</button>
				<button onClick={remove}>Видалити</button>
			</div>
			<a
				href="https://uk.wikipedia.org/wiki/%D0%92%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0"
				target="_blank"
				rel="noopener noreferrer"
				style={{display: getDisplayValue()}}
			>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pa%C5%82ac_Na_Wyspie_w_Warszawie%2C_widok_na_elewacj%C4%99_po%C5%82udniow%C4%85.jpg/1280px-Pa%C5%82ac_Na_Wyspie_w_Warszawie%2C_widok_na_elewacj%C4%99_po%C5%82udniow%C4%85.jpg"
					className={classes.image}
					style={{height: `${imageSize.height}px`, width: `${imageSize.width}px`}}
					alt="city"
				/>
			</a>
		</div>
	);
};

export default Image;
