import { useState } from "react";
import ListElement from "./ListElement";

function AnimeList({ animeData, onSelectedAnime }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list list-anime">
          {animeData?.map((anime) => (
            <ListElement key={anime.mal_id} listData={anime} onSelectedAnime={onSelectedAnime} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default AnimeList;
