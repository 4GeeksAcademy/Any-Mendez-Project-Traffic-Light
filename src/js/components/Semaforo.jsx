import React, { useState } from 'react';

//create your first component
const Semaforo = () => {
	const [color, setColor] = useState("red");
	const cycleColor = () => {
		if (color === "red"){
			setColor("yellow");
		} else if (color === "yellow"){
			setColor("green");
		}else if(color === "green"){
			setColor("red");
		}
	};

	return (

		<div>
		<div className="traffic-light">
			<div
				className={"light red" + (color === "red" ? " selected" : "")}
				onClick={() => setColor("red")}
			></div>
			<div
				className={"light yellow" + (color === "yellow" ? " selected" : "")}
				onClick={() => setColor("yellow")}
			></div>
			<div
				className={"light green" + (color === "green" ? " selected" : "")}
				onClick={() => setColor("green")}
			></div>
		</div>
		<button onClick={cycleColor}>Cambiar Color</button>
	</div>
	);
};

export default Semaforo;