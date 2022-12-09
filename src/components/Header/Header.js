import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../../img/pokemon-logo-png-1421.png";
import modus from "../../img/Vector.png";
import BackArrow from "./BackArrow";

const Header = (props) => {
	const navigate = useNavigate();

	const searchHandler = (event) => {
		// Neu laden verhindern
		event.preventDefault();

		// Feld auslesen und leeren
		let inputValue = event.target[0].value.toLowerCase();
		event.target[0].value = "";

		// Fetch Pokemon-Daten
		fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
			.then((response) => response.json())
			.then((data) => {
				navigate(`/details/${data.id}`);
			});
	};

	return (
		<header>
			<div className="image-wrapper">
				<img src={logo} alt="Logo" className="logo" />
			</div>

			<div className="flex-container">
				{props.page == "Home" && (
					<Link to={"/types"}>
						<div id="webapp_cover">
							<div id="menu_button">
								<input type="checkbox" id="menu_checkbox" />
								<label htmlFor="menu_checkbox" id="menu_label">
									<div id="menu_text_bar"></div>
								</label>
							</div>
						</div>
					</Link>
				)}

				{props.page == "Details" && (
					<Link to={"/"}>
						<BackArrow />
					</Link>
				)}
				<div className="form-container">
					<form onSubmit={searchHandler}>
						<input type="text" placeholder="🔎" />
					</form>
				</div>
				<img src={modus} alt="modus" className="modus-icon" />
			</div>
		</header>
	);
};

export default Header;
