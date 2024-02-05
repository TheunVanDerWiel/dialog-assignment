import { Injectable } from '@angular/core';
import { Goal } from '../types/goal.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
	private static mockData: Goal = { targetWeightInKg: 75 }
	
	public getGoal(): Observable<Goal> {
		return of(GoalsService.mockData);
	}
	
	public setGoal(targetWeightInKg: number): Observable<void> {
		GoalsService.mockData.targetWeightInKg = targetWeightInKg;
		return of(void 0);
	}
}
