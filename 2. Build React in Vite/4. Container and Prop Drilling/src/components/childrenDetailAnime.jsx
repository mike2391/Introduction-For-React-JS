function ChildrenDetailAnime({isSelectedAnime}) {
    return (
        <div className="details">
          <header>
            <img src={isSelectedAnime.image} alt={`${isSelectedAnime.title} cover`} />
            <div className="details-overview">
              <h2>{isSelectedAnime.title}</h2>
              <p>
                {isSelectedAnime.year} &bull; {isSelectedAnime.score}
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{isSelectedAnime.synopsis}</em>
            </p>
          </section>
        </div>
    )
}

export default ChildrenDetailAnime