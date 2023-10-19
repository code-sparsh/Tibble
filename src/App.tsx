import "./App.css";
import DocSum from "./components/ButtonFeatures/DocSum";
import Grammar from "./components/ButtonFeatures/Grammar";
import NewsFeed from "./components/ButtonFeatures/NewsFeed";
import SpeechSum from "./components/ButtonFeatures/SpeechSum";
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
      <Route path="/SpeechSum" element={<SpeechSum />}/>
    </Routes>
    </>
  );
}

export default App;
