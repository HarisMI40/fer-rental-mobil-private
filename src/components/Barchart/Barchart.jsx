import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chartOrderReport } from "../../Redux/barSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Barchart() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const chartReport = useSelector((state) => {
    return state.order;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: ["rgba(88, 107, 144, 1)"],
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Amount of Car Rented",
        },
        min: 0,
        max: 120,
        ticks: {
          // forces step size to be 50 units
          stepSize: 30,
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  const labels = [];
  const dataOrder = [];

  if (chartReport) {
    chartReport.forEach((element) => {
      dataOrder.push(element.orderCount);
      labels.push(element["day"].split("-")[2]);
    });
  }

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        data: dataOrder,
      },
    ],
  };

  const [params, setParams] = useState({
    from: "2022-01-01",
    until: "2022-01-31",
  });

  const handleSetParams = (x) => {
    setParams({
      from: `2022-${x}-01`,
      until: `2022-${x}-31`,
    });
  };

  const [dropdownValue, setDropdownValue] = useState("10");

  useEffect(() => {
    dispatch(chartOrderReport(params)).then(setLoading(false));
  }, []);

  return (
    <>
      <div className="mt-5">Mounth</div>
      <div className="flex items-centers">
        <select
          className="w-46 h-9 cursor-pointer form-select"
          id="inputGroupSelect04"
          value={dropdownValue}
          onChange={(e) => {
            handleSetParams(e.target.value);
            setDropdownValue(e.target.value);
          }}
        >
          <option>Choose...</option>
          <option value="01">Januari 2022</option>
          <option value="02">Februari 2022</option>
          <option value="03">Maret 2022</option>
          <option value="04">April 2022</option>
          <option value="05">Mei 2022</option>
          <option value="06">Juni 2022</option>
          <option value="07">Juli 2022</option>
          <option value="08">Agustus 2022</option>
          <option value="09">September 2022</option>
          <option value="10">Oktober 2022</option>
          <option value="11">November 2022</option>
          <option value="12">Desember 2022</option>
        </select>
        <button
          className="blue-btn hover:bg-blue-700"
          type="button"
          onClick={() => dispatch(chartOrderReport(params))}
        >
          Go
        </button>
      </div>
      <div className="h-96 mt-10 w-full">
        {!loading ? <Bar options={options} data={data} /> : <h1>Loading...</h1>}
      </div>
    </>
  );
}

export default Barchart;
