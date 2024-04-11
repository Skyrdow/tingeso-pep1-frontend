import React, { useState } from "react";
import { Car } from "../types";
import httpCommons from "../http-commons";
import { CarType, MotorType } from "../types";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddCar = () => {
  // region js
  const isFilled = () => {
    return (!carData.patent ||
    !carData.brand ||
    !carData.model ||
    !carData.fabDate ||
    !carData.seatCount ||
    !carData.motorType ||
    !carData.carType);
  };

  const [carData, setCarData] = useState<Car>({
    patent: "",
    brand: "",
    model: "",
    fabDate: new Date(),
    mileage: 0,
    seatCount: 0,
    motorType: undefined,
    carType: undefined,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    if (name === "dateTime") {
      const formattedDate = dayjs(value).toDate();
      setCarData((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setCarData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    httpCommons
      .postCar(carData)
      .then((response) => {
        console.log(response.data);
        setCarData({
          patent: "",
          brand: "",
          model: "",
          fabDate: new Date(),
          mileage: 0,
          seatCount: 0,
          motorType: undefined,
          carType: undefined,
        });
        
      })
      .catch((e) => {
        console.log(e.message);
      });

  };

  const handleDateChange = (newDate: any) => {
    console.log(typeof newDate);

    setCarData((prevCarData) => ({
      ...prevCarData,
      fabDate: newDate,
    }));
    console.log(
      "Fecha seleccionada:",
      dayjs(newDate).format("YYYY-MM-DD HH:mm:ss"),
    );
  };

  // #region HTML
  return (
    <form onSubmit={handleSubmit} className="form-group card p-8 min-w-[25%]">
      <div className="form-field">
        <label className="form-label" htmlFor="patent">
          Patente:
        </label>
        <input
          className="input"
          type="text"
          id="patent"
          name="patent"
          value={carData.patent}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="brand">
          Marca:
        </label>
        <input
          className="input"
          type="text"
          id="brand"
          name="brand"
          value={carData.brand}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="model">
          Modelo:
        </label>
        <input
          className="input"
          type="text"
          id="model"
          name="model"
          value={carData.model}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="dateTime">
          Fecha de fabricación:
        </label>
        <DatePicker
          className="input"
          id="date-picker"
          selected={carData.fabDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="dd/MM/yyyy HH:mm"
          required
        ></DatePicker>
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="seatCount">
          Cantidad de asientos:
        </label>
        <input
          className="input"
          type="number"
          id="seatCount"
          name="seatCount"
          value={carData.seatCount}
          onChange={handleInputChange}
          min={0}
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="motorType">
          Tipo de motor:
        </label>
        <select
          className="select"
          id="motorType"
          name="motorType"
          value={carData.motorType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Motor Type</option>
          {Object.values(MotorType)
            .filter((value) => typeof value == "string")
            .map((value) => {
              return (
                <option key={"motor-" + value} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="carType">
          Tipo de auto:
        </label>
        <select
          className="select"
          id="carType"
          name="carType"
          value={carData.carType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Car Type</option>
          {Object.values(CarType)
            .filter((value) => typeof value == "string")
            .map((value) => {
              return (
                <option key={"car-" + value} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
      </div>
      <button
        className={"btn " + (isFilled() ? "btn-error" : "btn-primary")}
        type="submit"
        disabled={isFilled()}
      >
        Añadir auto
      </button>
    </form>
  );
};

export default AddCar;
