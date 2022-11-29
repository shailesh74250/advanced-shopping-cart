import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { Store } from "./components/Store";
import { About } from "./components/About";

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
