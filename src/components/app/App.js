import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Form from "../form/Form.js";

export default function App() {
  return (
    <div className="App bg-dark">
      <h1 className="pt-4 text-white fw-bold">FINANCIACION</h1>
      <Form />
      <footer className="text-white py-3">
        © Copyright {new Date().getFullYear()} - Designed by Andres Alejandro
        Fernandez
      </footer>
    </div>
  );
}
