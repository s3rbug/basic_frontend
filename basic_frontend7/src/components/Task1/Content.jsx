import { useState } from "react";
import classes from "./Content.module.css"

const Content = () => {
	const [isFirstStyled, setIsFirstStyled] = useState(false);
	const [isSecondStyled, setIsSecondStyled] = useState(false);
	const getFirstStyle = () =>
		isFirstStyled ? { background: "aqua" } : { background: "white" };
	const getSecondStyle = () =>
		isSecondStyled
			? { background: "yellow", color: "blue" }
			: { background: "white", color: "black" };
	return (
		<>
			<p>Хобі:</p>
			<ul>
				<li
					onClick={() => setIsFirstStyled(!isFirstStyled)}
					style={getFirstStyle()}
				>
					Кіберспорт
				</li>
				<li
					onClick={() => setIsSecondStyled(!isSecondStyled)}
					style={getSecondStyle()}
				>
					Комп'ютерні ігри
				</li>
				<li>Програмування</li>
			</ul>
			<p>Улюблені фільми:</p>
			<ol>
				<li>"Шрек Третій", 2007</li>
				<li>"Шрек", 2001</li>
				<li>"Шрек 2", 2004</li>
			</ol>
			<div className={classes.text}>
				<p>
					Варшава — столиця Польщі з 1596 року, порт на річці Вісла,
					адміністративний центр Мазовецького воєводства. Місто є місцем
					розташування центральних органів влади Республіки Польща, іноземних
					місій, штаб-квартир значної кількості підприємств та громадських
					об'єднань, що працюють в Польщі.
				</p>
				<p>
					Варшава з населенням 1 790 658 жителів є найбільшим містом Польщі й
					утворює другу найбільшу агломерацію в країні (після Катовицької).
					Розвинені машинобудування (автобудування, електротехнічне та ін.),
					металообробка і металургія, хімічна, парфумерна, поліграфічна, легка
					промисловість. Національний музей (з музеєм До. Дуніковського),
					археологічний музей. «Театр Велькі», «Театр Польскі», «Театр народови»
					та ін. У місті щороку проходить міжнародний музичний фестиваль
					«Варшавська осінь» (з 1956). Перші поселення на території сучасної
					Варшави відносять до X століття.
				</p>
				<p>
					На початку XV—XVI століть столиця Мазовецького князівства, в XVI —
					початку XIX століть — всієї Польщі, в 1807—13 роках — Варшавського
					князівства, з 1815 р. — Королівства Польського (у складі Російської
					імперії). Після сильних руйнацій під час 2-ї світової війни
					відновлені: Старе місто, королівський замок XVI—XVII століть, багато
					костелів, палаци та парки; ансамбль Маршалковської вулиці (1960-ті
					рр.). Історичний центр Варшави належить до списку Світової спадщини
					ЮНЕСКО.
				</p>
			</div>
		</>
	);
};

export default Content;
