/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Mainpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import background from "../image/tunnel.gif";
import Navbar from "../navbar/Navbar";
import Typed from "react-typed";
import Button from "react-bootstrap/Button";
import {
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
	FaFacebook,
} from "react-icons/fa";

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

const link = {
	link1:
		"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
	link2:
		"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
	link3:
		"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
	link4:
		"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
	link5:
		"https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
};

const Mainpage = () => {
	const { height, width } = useWindowDimensions();

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				width: width,
				height: height,
				backgroundSize: "cover",
				overflow: "hidden",
			}}
		>
			<Container className="container">
				<Row>
					<Col>
						<Row className="row-up">
							<Navbar />
						</Row>
						<Row className="row-bottom">
							<Col className="col-bottom">
								<Row className="icon">
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
