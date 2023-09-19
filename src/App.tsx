import "./App.css";
import DocSum from "./components/ButtonFeatures/DocSum";
import Grammar from "./components/ButtonFeatures/Grammar";
import NewsFeed from "./components/ButtonFeatures/NewsFeed";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Document-Summerization" element={<DocSum/>}/>
      <Route path="/News-Feed" element={<NewsFeed />}/>
      <Route path="/Grammar" element={<Grammar />}/>
    </Routes>
    </>
  );
}

export default App;
