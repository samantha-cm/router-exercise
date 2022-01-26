import { Link } from "react-router-dom";
import { pets } from "../data";
const Pets = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Pets</h2>
        {pets.map((e) => (
          <p key={e.id}>
            <Link to={`/pets/${e.id}`}>{e.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Pets;
