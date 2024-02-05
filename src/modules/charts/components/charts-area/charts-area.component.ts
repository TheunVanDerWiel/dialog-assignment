import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { ChartData } from '../../types';

@Component({
    selector: 'sb-charts-area',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-area.component.html',
    styleUrls: ['charts-area.component.scss'],
})
export class ChartsAreaComponent implements OnInit, AfterViewInit {
	@Input({ required: true }) chartData!: ChartData;
	
    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myAreaChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.chartData.labels,
                datasets: this.chartData.dataSets.map(d => {
					return {
	                    label: d.label,
	                    lineTension: 0.3,
	                    backgroundColor: 'rgba('+d.color[0]+','+d.color[1]+','+d.color[2]+',0.2)',
	                    borderColor: 'rgba('+d.color[0]+','+d.color[1]+','+d.color[2]+',1)',
	                    pointRadius: 5,
	                    pointBackgroundColor: 'rgba('+d.color[0]+','+d.color[1]+','+d.color[2]+',1)',
	                    pointBorderColor: 'rgba(255,255,255,0.8)',
	                    pointHoverRadius: 5,
	                    pointHoverBackgroundColor: 'rgba('+d.color[0]+','+d.color[1]+','+d.color[2]+',1)',
	                    pointHitRadius: 50,
	                    pointBorderWidth: 2,
	                    data: d.values
                	};
                })
            },
            options: {
				scales: {
		            xAxes: [
		                {
		                    time: {
		                        unit: 'day',
		                    },
		                    gridLines: {
		                        display: false,
		                    },
		                    ticks: {
		                        maxTicksLimit: 7,
		                    },
		                },
		            ],
		            yAxes: [
		                {
		                    ticks: {
		                        min: 0,
		                        maxTicksLimit: 5,
		                    },
		                    gridLines: {
		                        color: 'rgba(0, 0, 0, .125)',
		                    },
		                },
		            ],
				},
				legend: {
					display: false
				}
			}
		});
    }
}
