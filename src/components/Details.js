import { useParams, useNavigate } from "react-router-dom";
import { pets } from "../data";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onePet = pets.find((e) => e.id === Number(id));
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{`Nombre: ${onePet.name}`}</h1>
        <h2>{`Edad: ${onePet.age}`}</h2>
        <img src={onePet.image} alt={onePet.name} width={300} />
      </div>

      <button onClick={() => navigate(-1)}>← Back</button>
    </>
  );
};

export default Details;
