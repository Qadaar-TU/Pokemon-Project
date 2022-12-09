import "./GridItem.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GridItem = (props) => {
  const [pokeInfo, setPokeInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setPokeInfo(data);
        setLoading(false);
      });
  }, [props.url]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  // const str1 = '5';
  // console.log(str1.padStart(2, '0'));

  return (
    <article className="pokemon-grid-item">
      <Link to={`/details/${pokeInfo.id}`}>
        <div>
          <div className="grid-item__top">
            <img
              src={pokeInfo.sprites.other.home.front_shiny}
              alt="pokemon"
              className="pokemon-item-img"
            />
          </div>
          <div className="grid-item__bottom">
            <p>#{pokeInfo.id.toString().padStart(2, "0")}</p>
            <p className="grid-item-uppercase">{pokeInfo.name}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default GridItem;
