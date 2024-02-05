export interface ChartData {
	labels: string[],
	dataSets: DataSet[]
}

export interface DataSet {
	label: string,
	color: number[],
	values: number[]
}