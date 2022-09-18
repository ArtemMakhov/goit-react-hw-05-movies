import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
      </Routes>
      <GlobalStyle/>
    </>
  )
};
