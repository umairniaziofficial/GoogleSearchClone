import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContextProvider } from "./utils/ContextApi";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/:query/:startIndex" element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}
