import ListElement from "./ListElement";

function ChildrenAnimeList({ animeData, onSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animeData?.map((anime) => (
        <ListElement key={anime.mal_id} listData={anime} onSelectedAnime={onSelectedAnime} />
      ))}
    </ul>
  );
}

export default ChildrenAnimeList;
