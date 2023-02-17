import Table from "../table/Table";
import { useState } from "react";
export default function Form() {
  const [data, setData] = useState(0);
  const handleChange = () => {
    const dataSubmited = Number(
      document.querySelector("#numberSubmited").value
    );
    setData(dataSubmited);
  };
  return (
    <div className="w-auto d-flex m-4 justify-content-center input-group mb-3">
      <span className="input-group-text bg-secondary text-white fs-5">$</span>
      <input
        id="numberSubmited"
        type="number"
        className="fw-bold p-2 rounded-end"
        placeholder="Escribe aqui el importe"
        onChange={handleChange}
      />
      <Table data={data} />
    </div>
  );
}
