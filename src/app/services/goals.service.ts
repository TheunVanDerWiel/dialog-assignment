import { Injectable } from '@angular/core';
import { Goal } from '../types/goal.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
	private mockData: Goal = { targetWeightInKg: 75 }
	
	public getGoal(): Observable<Goal> {
		return of(this.mockData);
	}
	
	public setGoal(targetWeightInKg: number): Observable<void> {
		this.mockData.targetWeightInKg = targetWeightInKg;
		return of(void 0);
	}
}
