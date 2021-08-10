import "./styles/MovieGrid.css";

export default function MovieGrid(props) {
  return (
    <div className="movie-grid">
      {props.filteredData.map((data, index) => (
        <div key={index} className="img-wrap">
          {/* <img src={data.img} alt={data.name} /> */}
          <h4>{data.name}</h4>
        </div>
      ))}
    </div>
  );
}
