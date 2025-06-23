import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type BarChartProps = {
  data: any;
  options: any;
};

function BarChart({ data, options }: BarChartProps) {
  return (
    <div>
      <div className="h-[150px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
