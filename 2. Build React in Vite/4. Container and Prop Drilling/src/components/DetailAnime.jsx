import { useState } from "react";

function DetailAnime({ isSelectedAnime }) {
    const [isOpen2, setIsOpen2] = useState(true);


  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
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
      )}
    </div>
  );
}

export default DetailAnime;
