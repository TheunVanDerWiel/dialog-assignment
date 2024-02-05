import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: any[] = [];

	public show(message: string, title?: string, options: any = {}) {
		this.toasts.push({ title, message, ...options });
	}

	public message(message: string, title?: string) {
		this.show(message, title, { classname: 'bg-light', autohide: true, delay: 3000 });
	}

	public success(message: string, title?: string) {
		this.show(message, title, { classname: 'bg-success border-0', autohide: true, delay: 3000, invert: true });
	}

	public warn(message: string, title?: string) {
		this.show(message, title, { classname: 'bg-warning border-0', autohide: true });
	}

	public error(message: string, title?: string, delay?: number) {
		this.show(message, title, { classname: 'bg-danger border-0', autohide: true, delay: delay ?? 60000, invert: true });
	}

	public remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	public clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}