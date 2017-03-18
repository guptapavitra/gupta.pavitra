import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = [{
    title: "Dashboard",
    iconClasses: ["fa", "fa-home"],
    children: [{
        title: "Components"
      },{
        title: "Charts"
      },{
        title: "UI Features"
    }]
  }, {
    title: "Monitoring",
    iconClasses: ["fa", "fa-laptop"],
    children: [{
        title: "UI Features"
    }]
  }, {
    title: "Settings",
    iconClasses: ["fa", "fa-gear"],
    children: [{
        title: "UI Features",
        children: [{
          title: "Tables"
        },{
          title: "Maps"
        }]
    }]
  }]
}