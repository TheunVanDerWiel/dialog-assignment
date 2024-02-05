import { Injectable } from '@angular/core';
import { Measurement } from '../types/measurement.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {
	private static mockData: Measurement[] = [
		{ date: MeasurementsService.getDate(3), weightInKg: 105, description: 'Dieet gestart' },
		{ date: MeasurementsService.getDate(2), weightInKg: 85, description: 'Vandaag niets gegeten' },
		{ date: MeasurementsService.getDate(1), weightInKg: 95, description: 'Oeps, feestje :)' }
	];
	
	// For mocking purposes only
	private static getDate(numberOfDaysAgo: number): Date {
		return new Date(Date.now() - 1000*60*60*24*numberOfDaysAgo);
	}
	
	public getMeasurements(): Observable<Measurement[]> {
		return of(MeasurementsService.mockData);
	}
	
	public addMeasurement(weightInKg: number, description: string): Observable<Measurement> {
		var measurement = new Measurement(
			new Date(MeasurementsService.mockData[MeasurementsService.mockData.length-1].date.valueOf() + 1000*60*60*24),
			weightInKg,
			description
		);
		MeasurementsService.mockData.push(measurement);
		return of(measurement);
	}
}
