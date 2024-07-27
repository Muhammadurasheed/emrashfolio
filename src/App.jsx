import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout, About, Resume, Portfolio, Contact, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SharedLayout />}>
          <Route exact index element={<About />} />
          <Route exact path="resume" element={<Resume />} />
          <Route exact path="projects" element={<Portfolio />} />
          <Route exact path="contact" element={<Contact />} />
        </Route>
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
