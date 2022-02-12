import "./App.css";
//components

import Navbar from "./components/navbar";

// const URL = "https://league-of-legends-champions.p.rapidapi.com/champions/en-us";
// const HOST = "league-of-legends-champions.p.rapidapi.com";
// const KEY = "53bc56e1b4msh17b7a4633e0ab62p18003fjsn6dc7535110e2";
// fetch(`${URL}?page=2&size=10`, {"method": "GET", "headers":{"x-rapidapi-host": HOST, "x-rapidapi-key": KEY}}).then(response => {
//    console.log(response.json());
// });

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
