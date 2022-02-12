import { useState, useEffect } from "react";
const LolAPI = () => {
  const URL =
    "http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json";

  const [champions, setChampions] = useState([]);
  
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((champions) => setChampions(champions));
  }, []);

  return champions
};

export default LolAPI;
