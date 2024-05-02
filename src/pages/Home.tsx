import Title from "../components/Title";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-10 items-center">
      <Title title="Bienvenido a tu taller" svg="/car_repair.svg"></Title>
      <HomeCard
        title="Vehiculos"
        link="/Cars"
        description="Gestiona tus autos"
        badges={["Lista", "Agregar", "Añadir Bono"]}
        svg="/car.svg"
      ></HomeCard>
      <HomeCard
        title="Reparaciones"
        link="/Reparations"
        description="Gestiona tus reparaciones"
        badges={["Lista", "Agregar"]}
        svg="/repair.svg"
      ></HomeCard>
      <HomeCard
        title="Reportes"
        link="/Reports"
        description="Genera tus reportes"
        badges={[
          "Reporte tipo 1",
          "Reporte tipo 2",
          "Reporte tipo 3",
          "Reporte tipo 4",
        ]}
        svg="/report.svg"
      ></HomeCard>
    </div>
  );
};

export default Home;
