import dynamic from "next/dynamic";
const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });
const dataSeries = [30, 40, 35, 50, 49, 60, 70, 91, 125];

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

export default function Chart1() {
  return (
    <>
      <Charts options={options} series={[{ data: dataSeries }]} type="bar" />
    </>
  );
}
