import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route index elements={<Homepage/>}/>
        <Route path="/product" elements={<ItemInfo/>}/>
        <Route path="/items" elements={<Items/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
