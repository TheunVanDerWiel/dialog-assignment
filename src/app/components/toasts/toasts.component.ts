import { Component, TemplateRef, inject } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html'
})
export class ToastsComponent {
	toastService = inject(ToastService);
  
	public isTemplate(toast: any): boolean {
		return toast.textOrTpl instanceof TemplateRef;
	}
}
