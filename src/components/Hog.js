import { useState } from "react";

function Hog({ name, image, weight, specialty, greased, highestMedal }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log("Clicked", name);
    setIsClicked(!isClicked);
  };
  return (
    <div onClick={handleClick} className="pigTile">
      <h3>{name}</h3>
      <img width={250} src={image} alt = {name}></img>
      {isClicked ? (
        <div>
          <p>Weight: {weight}</p>
          <p>Specialties: {specialty}</p>
          <p>Highest medal achieved: {highestMedal}</p>
          <p>{greased ? "Greased" : ""}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Hog;