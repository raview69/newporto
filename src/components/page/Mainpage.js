/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Mainpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import background from "../image/tunnellottie.json";
import Typed from "react-typed";

import {
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
	FaFacebook,
} from "react-icons/fa";
import Lottie from "react-lottie";

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

const Mainpage = () => {
	const { height, width } = useWindowDimensions();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: background,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div
			style={{
				width: width,
				height: height,
				backgroundSize: "cover",
				overflow: "hidden",
			}}
		>
			<Lottie
				options={defaultOptions}
				style={{
					width: width,
					height: height,
					backgroundSize: "cover",
					overflow: "hidden",
					position: "absolute",
					zIndex: "-1",
				}}
			/>
			<Row className="navbar">
				<Navbar />
			</Row>
			<Row className="row-icon">
				<Col>
					<a href="https://www.instagram.com/ravi.wicaksono/">
						<FaInstagram className="col-icon" />
					</a>
				</Col>
				<Col>
					<a href="https://twitter.com/RaviWicaksono2">
						<FaTwitter className="col-icon" />
					</a>
				</Col>
				<Col>
					<a href="https://github.com/raview69">
						<FaGithub className="col-icon" />
					</a>
				</Col>
				<Col>
					<a href="https://www.linkedin.com/in/muhamad-ravi-wicaksono-780637190/">
						<FaLinkedin className="col-icon" />
					</a>
				</Col>
				<Col>
					<a href="#">
						<FaFacebook className="col-icon" />
					</a>
				</Col>
			</Row>
			<Container className="container">
				<Row>
					<Col>
						<Row className="row-bottom">
							<Col className="col-bottom">
								<h2>MUHAMAD RAVI WICAKSONO</h2>
								<p className="typed">
									I'm a&nbsp;
									<Typed
										strings={[
											"web designer",
											"full-stack developer",
											"cat lover",
										]}
										typeSpeed={80}
										backSpeed={40}
										loop
									/>
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<iframe
				src="https://my.spline.design/untitled-764d24f31dc3321c4417be9f939688e9/"
				frameborder="0"
				width="100%"
				height="100%"
			/>
		</div>
	);
};

export default Mainpage;
