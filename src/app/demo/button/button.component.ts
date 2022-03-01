import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button mat-button>
  Click Me!
  <mat-icon>face
  </mat-icon>
</button>
<mat-checkbox>Check Me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
