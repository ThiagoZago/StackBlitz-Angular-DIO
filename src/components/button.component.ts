import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';

  getAlert(num: number) {
    alert(num);
  }
}
