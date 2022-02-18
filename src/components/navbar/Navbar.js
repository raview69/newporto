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
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Comingsoon..</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						Some text as placeholder. In real life you can have the elements you
						have chosen. Like, text, images, lists, etc.
					</Offcanvas.Body>
				</Offcanvas>
				<NavMenu>
					<NavLink to="/genre" activeStyle>
						About me
					</NavLink>
					<NavLink to="/genre" activeStyle>
						Works
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
					<NavBtn>
						<NavBtnLink to="/signin">Contact me</NavBtnLink>
					</NavBtn>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Navbar;
