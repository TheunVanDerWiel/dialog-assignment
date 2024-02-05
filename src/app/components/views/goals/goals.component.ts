import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { GoalsService } from 'src/app/services/goals.service';
import { Goal } from 'src/app/types/goal.type';
import { FormComponent } from '../../abstract/form.abstract.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent extends FormComponent implements OnInit {
	public weightForm: FormGroup = new FormGroup({});
	
	private formBuilder = inject(NonNullableFormBuilder);
	private goalService = inject(GoalsService);
	private toastService = inject(ToastService);
	
	ngOnInit(): void {
    	this.goalService.getGoal().subscribe((goal: Goal) => {
			this.weightForm = this.formBuilder.group({ targetWeight: [goal.targetWeightInKg, [Validators.required, Validators.min(10)]]});
		});
	}
	
	public save(): void {
		this.goalService.setGoal(this.weightForm.value.targetWeight).subscribe(() => {
			this.toastService.success('Je doelgewicht is aangepast');
		});
	}
}
