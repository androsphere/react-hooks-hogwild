import Hog from "./Hog";


function Hoglist({ hogs }) {
  console.log(hogs, "From the porkers");




  

  const hogsToDisplay = hogs.map((hog) => {
    return (
      <Hog
        key={hog.name}
        name={hog.name}
        image={hog.image}
        weight={hog.weight}
        greased={hog.greased}
        specialty={hog.specialty}
        highestMedal={hog["highest medal achieved"]}
      />
    );
  });
  return (
    <div>
      <div className="porkers">{hogsToDisplay}</div>
    </div>
  );
}

export default Hoglist;