import coef from "../../db/coeficientes.json";
import "./table.css";
export default function Table({ data }) {
  return (
    <>
      <table className="mainTable table table-striped mt-4 ">
        <thead className="table-primary">
          <tr>
            <th scope="col">Tarjeta</th>
            <th scope="col">Cantidad de cuotas</th>
            <th scope="col">Precio final por pasajero</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
          <tr>
            <th scope="row">
              Contado - Transferencia bancaria - T.Debito - Credito en 1 cuota
            </th>
            <td>-</td>
            <td>$ {Math.ceil(data * 1.015)} final c/u</td>
          </tr>
          <tr>
            <th scope="row">Visa - Mastercard - Cabal bancarizadas</th>
            <td>6 cuotas de</td>
            <td>$ {Math.ceil((coef.ahora6 * data * 1.015) / 6)} final c/u</td>
          </tr>
          <tr>
            <th scope="row">Visa - Mastercard - Cabal bancarizadas</th>
            <td>12 cuotas de</td>
            <td>$ {Math.ceil((coef.ahora12 * data * 1.015) / 12)} final c/u</td>
          </tr>
          <tr>
            <th scope="row">Visa - Mastercard - Cabal bancarizadas</th>
            <td>18 cuotas de</td>
            <td>$ {Math.ceil((coef.ahora18 * data * 1.015) / 18)} final c/u</td>
          </tr>
          <tr>
            <th scope="row">Naranja Comun</th>
            <td>6 cuotas de</td>
            <td>${Math.ceil((coef.naranja6 * data * 1.015) / 6)} final c/u</td>
          </tr>
          <tr>
            <th scope="row">Naranja Comun</th>
            <td>10 cuotas de</td>
            <td>
              $ {Math.ceil((coef.naranja10 * data * 1.015) / 10)} final c/u
            </td>
          </tr>
          <tr>
            <th scope="row">Naranja Comun</th>
            <td>18 cuotas de</td>
            <td>
              $ {Math.ceil((coef.naranja18 * data * 1.015) / 18)} final c/u
            </td>
          </tr>
          <tr>
            <th scope="row">Naranja Comun</th>
            <td>24 cuotas de</td>
            <td>
              $ {Math.ceil((coef.naranja24 * data * 1.015) / 24)} final c/u
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
