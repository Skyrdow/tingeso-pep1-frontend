import React from "react";

interface Report2TableProps {
  reparationType: string;
  carTypes: Array<string | number>[];
}

const Report2Table: React.FC<Report2TableProps> = ({
  reparationType,
  carTypes,
}) => {
  // Implement your component logic here

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="bg-success/50 p-2 rounded-xl shadow-lg">
        {reparationType}
      </h1>
      <div className="flex w-fit">
        <table className="table-zebra table bg-success/10">
          <thead>
            <tr>
              <th>Tipo de auto</th>
              <th>Cantidad</th>
              <th>Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {carTypes
              .sort((a: any, b: any) => b.totalPrice - a.totalPrice)
              .map((item: any) => (
                <tr>
                  <th>{item.carType}</th>
                  <td>{item.count}</td>
                  <td>{item.totalPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report2Table;
