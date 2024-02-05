import { Component, OnInit, inject } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { Goal } from 'src/app/types/goal.type';
import { Measurement } from 'src/app/types/measurement.type';
import { ChartData } from 'src/modules/charts/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public goal: Goal | undefined;
	public measurements: Measurement[] = [];
	
	private goalService = inject(GoalsService);
	private measurementService = inject(MeasurementsService);
	
	ngOnInit(): void {
    	this.goalService.getGoal().subscribe((goal: Goal) => {
			this.goal = goal;
		});
		this.measurementService.getMeasurements().subscribe((measurements: Measurement[]) => {
			this.measurements = measurements;
		});
	}
	
	public getChartData(): ChartData {
		return {
			labels: this.measurements.map(m => m.date.toLocaleDateString()),
			dataSets: [
				{ label: "Doelgewicht", color: [1,30,108], values: this.measurements.map(m => this.goal?.targetWeightInKg ?? 0) },
				{ label: "Metingen", color: [2,117,216], values: this.measurements.map(m => m.weightInKg) }
			]
		};
	}
}
