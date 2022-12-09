import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import GridItem from "../components/Pokemon-Overview/GridItem";
import "./HomePage.css";

const HomePage = () => {
  let page = "Home";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setNextPageUrl(data.next);
        setPreviousPageUrl(data.previous);
        setLoading(false);
      });
  }, [currentUrl]);

  const nextHandler = () => {
    setCurrentUrl(nextPageUrl);
  };

  const prevHandler = () => {
    setCurrentUrl(previousPageUrl);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className="home-page">
      <Header page={page} />

      <div className="grid">
        {pokemon.map((element) => {
          return <GridItem key={element.name} url={element.url} />;
        })}
      </div>
      <div className="prev-next-button-container">
        {previousPageUrl != null && <button onClick={prevHandler}>«</button>}
        {nextPageUrl != null && <button onClick={nextHandler}>»</button>}
      </div>
    </section>
  );
};

export default HomePage;
