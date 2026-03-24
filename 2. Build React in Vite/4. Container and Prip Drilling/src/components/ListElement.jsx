function ListElement({listData, onSelectedAnime}) {
    return (
        <li onClick={() => onSelectedAnime(listData.mal_id)}>
      <img src={listData.image} alt={`${listData.title} cover`} />
      <h3>{listData.title}</h3>
      <div>
        <p>
          <span>{listData.year}</span>
        </p>
      </div>
    </li>
    )
}

export default ListElement