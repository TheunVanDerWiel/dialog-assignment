import { Injectable } from '@angular/core';
import { Measurement } from '../types/measurement.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {
	private mockData: Measurement[] = [
		{ date: this.getDate(3), weightInKg: 105, description: 'Dieet gestart' },
		{ date: this.getDate(2), weightInKg: 85, description: 'Vandaag niets gegeten' },
		{ date: this.getDate(1), weightInKg: 95, description: 'Oeps, feestje :)' }
	];
	
	// For mocking purposes only
	private getDate(numberOfDaysAgo: number): Date {
		return new Date(Date.now() - 1000*60*60*24*numberOfDaysAgo);
	}
	
	public getMeasurements(): Observable<Measurement[]> {
		return of(this.mockData);
	}
	
	public addMeasurement(weightInKg: number, description: string): Observable<Measurement> {
		var measurement = new Measurement(
			new Date(this.mockData[this.mockData.length-1].date.valueOf() + 1000*60*60*24),
			weightInKg,
			description
		);
		this.mockData.push(measurement);
		return of(measurement);
	}
}
