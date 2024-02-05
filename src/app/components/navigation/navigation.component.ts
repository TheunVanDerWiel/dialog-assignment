import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	public sidenavHidden = false;
	
	public toggleSidenav() {
		this.sidenavHidden = !this.sidenavHidden;
	}
}
