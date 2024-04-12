import { useEffect, useState } from "react";
import httpCommons from "../http-commons";

const Report1 = () => {
  const [report1, setReport1] = useState([]);
  useEffect(() => {
    httpCommons.getReport1().then((response) => {
      console.log(response.data);
      setReport1(response.data);
    });
  }, []);
  return (
    <div className="bg-white p-5 rounded-xl shadow-xl">
      <div className="flex w-full overflow-x-auto">
        <table className="table-zebra bg-success/10 table">
          <thead>
            <tr>
              <th>Patente</th>
              <th>Precio total</th>
              <th>Precio base</th>
              <th>Descuentos</th>
              <th>Recargos</th>
              <th>Iva</th>
            </tr>
          </thead>
          <tbody>
            {report1.map((item: any) => (
              <tr>
                <th>{item.car}</th>
                <td>{item.totalPrice.toLocaleString()}</td>
                <td>{item.basePrice.toLocaleString()}</td>
                <td>{item.discounts.toLocaleString()}</td>
                <td>{item.surcharges.toLocaleString()}</td>
                <td>{item.iva.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report1;
