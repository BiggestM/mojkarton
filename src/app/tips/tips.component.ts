import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {

  navigateTo(tipId: string) {
    // Implement navigation logic to open a new page for the selected tip
    console.log(`Navigating to tip: ${tipId}`);
  }

}
