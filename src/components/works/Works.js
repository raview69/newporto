import React from "react";
import Lottie from "react-lottie";
import maintance from "../image/maintenance.json";
import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

const Works = () => {
	const { height, width } = useWindowDimensions();
	const defaultOptionm = {
		loop: true,
		autoplay: true,
		animationData: maintance,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div
			className="container-maintance"
			style={{
				width: width,
				height: height,
				backgroundSize: "cover",
				overflow: "hidden",
			}}
		>
			<Lottie options={defaultOptionm} height={180} width={250} />
		</div>
	);
};

export default Works;
