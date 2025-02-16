import { useState } from "react";

interface Props {
  items: string;
}
function ListGroup() {
  const city = ["Dhaka", "Faridpur", "Sylhet"];
  const getMessage = () => {
    return city.length === 0 ? <p>No item found</p> : null;
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of City</h1>
      {getMessage()}
      <ul className="list-group">
        {city.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={selectedIndex === index ? "selected" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
