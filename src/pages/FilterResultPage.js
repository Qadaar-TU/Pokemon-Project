import Header from "../components/Header/Header";
import GridItem from "../components/Pokemon-Overview/GridItem";
import "./FilterResultPage.css";

const FilterResultPage = (props) => {
	let page = "Details";

	return (
		<section className="filter-result-page">
			<Header page={page} />

			<div className="grid">
				{props.filteredPokemons.map((element, index) => {
					return <GridItem key={index} url={element.pokemon.url} />;
				})}
			</div>
		</section>
	);
};

export default FilterResultPage;
