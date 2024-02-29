import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface DataPoint {
	name: string;
	value: number;
}

interface BarChartProps {
	data: DataPoint[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
	const options: Highcharts.Options = {
		title: {
			text: 'Language Bar Chart'
		},
		accessibility: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		chart: {
			type: 'bar'
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
			type: 'bar',
			name: 'Value',
			data: data.map(item => item.value)
		}]
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
