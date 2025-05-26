import { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";
import "./Programs.css";

interface seriesProps {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
}

function Programs() {
  const [series, setseries] = useState<seriesProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setseries(data));
  }, []);

  console.info(series);

  return (
    <>
      {series.map(({ id, title, synopsis, poster, country }: seriesProps) => (
        <section key={id} className="program-section">
          <ProgramCard
            title={title}
            synopsis={synopsis}
            poster={poster}
            country={country}
          />{" "}
        </section>
      ))}
    </>
  );
}

export default Programs;
