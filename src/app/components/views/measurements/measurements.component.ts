import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormComponent } from '../../abstract/form.abstract.component';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent extends FormComponent implements OnInit {
	public weightForm: FormGroup = new FormGroup({});
	
	private formBuilder = inject(NonNullableFormBuilder);
	private measurementsService = inject(MeasurementsService);
	private toastService = inject(ToastService);
	
	ngOnInit(): void {
		this.weightForm = this.formBuilder.group({ weight: [null, [Validators.required, Validators.min(10)]], description: ['']});
	}
	
	public save(): void {
		this.measurementsService.addMeasurement(this.weightForm.value.weight, this.weightForm.value.description).subscribe(() => {
			this.toastService.success('Je meting is toegevoegd');
			this.weightForm.reset();
		});
	}
}
