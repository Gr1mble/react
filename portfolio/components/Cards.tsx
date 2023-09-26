interface Games {
  titles: string[];
  description: string[];
}

const Cards = (games: Games) => {
  return (
    <>
      <ul className="card">
        {games.titles.map(() => (
          <div key={"card"} className="card">
            <div key={"card-body"} className="card-body">
              <h5 key={"card-title"} className="card-title">
                {games.titles}
              </h5>
              <p key={"card-text"} className="card-text">
                {games.description}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Cards;
