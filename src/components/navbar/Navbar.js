import React, { useState } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavLinkLogo,
} from "./element.js";
import Image from "../image/logo3.svg";
import Image2 from "../image/logonofont.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import file from "../image/CV_Muhamad Ravi Wicaksono.pdf";

function Navbar() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Nav>
				<NavLinkLogo to="/">
					<img
						src={Image}
						width="120"
						height="100"
						alt="logo"
						class="desktop"
					/>
					<img
						src={Image2}
						width="120"
						height="100"
						alt="logo"
						class="mobile"
					/>
				</NavLinkLogo>
				<Bars onClick={handleShow} />
				<Offcanvas show={show} onHide={handleClose} className="main-offcanvas">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title></Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<div className="mobile-offcanvas">
							<NavLink
								to="/contact"
								className="nav-offcanvas"
								onClick={handleClose}
								activeStyle
							>
								Blog
							</NavLink>
							<NavLink
								to="/works"
								className="nav-offcanvas"
								onClick={handleClose}
								activeStyle
							>
								Works
							</NavLink>
							<NavLink
								to={file}
								target="_blank"
								className="nav-offcanvas-btn"
								download
							>
								<p>Download CV</p>
							</NavLink>
						</div>
					</Offcanvas.Body>
				</Offcanvas>
				<NavMenu>
					<NavLink to="/contac" activeStyle>
						Blog
					</NavLink>
					<NavLink to="/works" activeStyle>
						Works
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
					<NavBtn>
						<NavBtnLink to={file} target="_blank" download>
							Download CV
						</NavBtnLink>
					</NavBtn>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Navbar;
