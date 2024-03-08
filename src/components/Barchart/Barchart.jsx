import { Bar } from "react-chartjs-2";

const Barchart = () => {
  return (
    <div className="h-96 mt-10 w-full">
      <Bar
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          backgroundColor: ["rgba(88, 107, 144, 1)"],
          scales: {
            y: {
              title: {
                display: true,
                text: "Amount of Car Rented",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
          },
        }}
        data={{
          labels: Array.from({ length: 30 }, (_, i) => i + 1),
          datasets: [
            {
              data: Array.from({ length: 30 }, () =>
                Math.floor(Math.random() * 120)
              ),
            },
          ],
        }}
      />
    </div>
  );
};

export default Barchart;
