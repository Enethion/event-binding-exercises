import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  liveViewValue: string = ""
  message: string = ""
  spin: string = ""

  zrobione() {
    alert ('Zrobione!')
  }

  detectSpin(spin: number) {
    this.spin = spin < 0 ? "up" : "down"
  }
}
