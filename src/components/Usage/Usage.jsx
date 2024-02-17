import { Line } from "react-chartjs-2";

const Usage = () => {
    // Dummy data for API usage
  const dummyApiUsageData = [
    { date: '2024-02-01', requests: 100 },
    { date: '2024-02-02', requests: 120 },
    { date: '2024-02-03', requests: 90 },
    { date: '2024-02-04', requests: 150 },
    { date: '2024-02-05', requests: 200 },
    { date: '2024-02-06', requests: 180 },
    { date: '2024-02-07', requests: 210 },
  ];

  // Transforming dummy data into Chart.js compatible format
  const chartData = {
    labels: dummyApiUsageData.map((data) => data.date),
    datasets: [
      {
        label: 'API Requests',
        data: dummyApiUsageData.map((data) => data.requests),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="h-screen flex items-center justify-center">
    <div className="max-w-screen-md w-full p-6">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full h-full">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">API Usage</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Graph showing API usage over time.</p>
        </div>
        <div className="border-t border-gray-200 h-full">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Usage;
