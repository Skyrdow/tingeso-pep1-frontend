import axios from "axios";
import { Car, Reparation } from "./types";

const url = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_BACKEND_PORT;
console.log(port);
console.log(url);


const http = axios.create({
  baseURL: `http://${url}:80/api/v1`,
  headers: {
    "Content-type": "application/json",
  },
});

const getCars = () => {
  return http.get("/cars/");
};

const postCar = (data: Car) => {
  return http.post("/cars/", data);
};

const setBrandBonus = (patent: string, brandBonus: number) => {
  return http.put(`/cars/brandBonus/${patent}/${brandBonus}`);
};

const getReparations = () => {
  return http.get("/reparation/");
};

const postReparation = (data: Reparation) => {
  console.log(data.admissionDate);
  console.log(data.repairExitDate);

  const formattedData = JSON.stringify({
    admissionDate: data.admissionDate,
    patent: data.patent,
    reparationTypes: data.reparationTypes.map((type: string) => ({
      reparationType: type,
    })),
    repairExitDate: data.repairExitDate,
    retrievalDate: data.retrievalDate,
  });
  return http.post("/reparation/", formattedData);
};

const getReport1 = () => {
  return http.get("/report/1");
};
const getReport2 = () => {
  return http.get("/report/2");
};
const getReport3 = () => {
  return http.get("/report/3");
};
const getReport4 = () => {
  return http.get("/report/4");
};
export default {
  getCars,
  postCar,
  setBrandBonus,
  getReparations,
  postReparation,
  getReport1,
  getReport2,
  getReport3,
  getReport4,
};
