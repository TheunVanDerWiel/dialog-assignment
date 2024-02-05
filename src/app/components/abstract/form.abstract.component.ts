import { FormGroup } from "@angular/forms";

export abstract class FormComponent {
	public isInvalid(form: FormGroup, field: string): boolean {
		if (!form.contains(field)) { return true; }
		
		var control = form.controls[field];
		return control.invalid && (control.dirty || control.touched);
	}
}
