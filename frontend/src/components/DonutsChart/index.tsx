import axios from 'axios'
import Chart from 'react-apexcharts'
import { BASE_URL } from 'utils/requests'
import { SaleSum } from 'types/sale'
import { useEffect, useState } from 'react'
type ChartData = {
    labels: string[];
    series: number[];
}
const DonutsChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: []});
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sum-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const mLabels = data.map(x => x.sellerName);
                const mSeries = data.map(x => x.sum);
                setChartData({ labels: mLabels, series: mSeries });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}
export default DonutsChart;