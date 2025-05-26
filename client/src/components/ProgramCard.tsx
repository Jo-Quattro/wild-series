import "./ProgramCard.css";
interface programProps {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
}

function ProgramCard({ title, synopsis, poster, country }: programProps) {
  return (
    <figure className="program-card">
      <h2>{title}</h2>
      <p className="program-synopsis">{synopsis}</p>
      <img className="program-img" src={poster} alt={title} />
      <p>Pays: {country}</p>
    </figure>
  );
}
export default ProgramCard;
