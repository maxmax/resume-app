import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface DataPoint {
	name: string;
	value: number;
}

interface LineChartProps {
    data: DataPoint[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
	const options: Highcharts.Options = {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Language Line Chart'
		},
		credits: {
			text: ''
		},
		accessibility: {
			enabled: false
		},
		xAxis: {
			categories: data.map(item => item.name)
		},
		yAxis: {
			title: {
					text: 'Value'
			}
		},
		legend: {
			enabled: false
		},
		series: [{
			type: 'line',
			name: 'Value',
			data: data.map(item => item.value)
		}]
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
