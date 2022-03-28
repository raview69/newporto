import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: none;
	height: 80px;
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	-webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
	transition: all 0.2s ease-in-out;

	z-index: 10;

	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	color: #fff;
	opacity: 0.8;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 2rem;
	height: 100%;
	cursor: pointer;

	&.active {
		color: #49ae5f;
		font-weight: bold;
	}
`;

export const NavLinkLogo = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;

	&.active {
		color: #000000;
	}

	.mobile {
		display: none;
	}
	/* when screen is less than 600px wide
     show mobile version and hide desktop */

	@media screen and (max-width: 768px) {
		.mobile {
			display: block;
			width: 80%;
		}
		.desktop {
			display: none;
		}
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #49ae5f;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	/* Second Nav */
	/* margin-right: 24px; */

	/* Third Nav */
	/* width: 100vw;
  white-space: nowrap; */

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	/* Third Nav */
	/* justify-content: flex-end;
  width: 100vw; */

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: none;
	padding: 10px 22px;
	color: #fff;
	outline: none;
	border: 1px solid #49ae5f;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	/* Second Nav */
	margin-left: 24px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #49ae5f;
		color: #fff;
	}
`;
