import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
	let page = "Details";
	const { id } = useParams();
	const [pokeDetails, setPokeDetails] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPokeDetails(data);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<section className="details-page">
			<Header page={page} />

			<div className="pokemon-img__container">
				<div className="pokemon-img__box">
					<img
						src={pokeDetails.sprites.other.home.front_shiny}
						alt="pokemon"
						className="pokemon-img__img"
					/>
				</div>
			</div>
			<div className="wrapper-details">
				<h2>#{pokeDetails.id.toString().padStart(3, "0")}</h2>
				<h2 className="name-uppercase">{pokeDetails.name}</h2>
			</div>
			<div className="details-grid">
				<div className="wrapper-properties">
					<p className="details-weight">{pokeDetails.weight}kg</p>
					<p className="properties">Weight</p>
				</div>
				<div className="line"></div>
				<div className="wrapper-properties">
					<div className="details-type-container">
						{pokeDetails.types.map((elt, index) => {
							return (
								<p key={index} className="types-properties">
									{elt.type.name}
								</p>
							);
						})}{" "}
					</div>
					<p className="properties">Types</p>
				</div>
				<div className="line"></div>
				<div className="wrapper-properties">
					<p className="details-height">{pokeDetails.height / 10}m</p>
					<p className="properties">Height</p>
				</div>
			</div>
			<div className="wrapper-attacks">
				<div className="details-attack-grid">
					<p>{pokeDetails.moves[0].move.name}</p>
					<p>{pokeDetails.moves[1].move.name}</p>
					<p>{pokeDetails.moves[2].move.name}</p>
				</div>
				<p className="properties">Attacks</p>
			</div>
		</section>
	);
};

export default DetailsPage;
