import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    var autoHideNavigationBar = false;
    NavigationBar.hide();
    StatusBar.setOverlaysWebView({overlay:true});
  }
}
