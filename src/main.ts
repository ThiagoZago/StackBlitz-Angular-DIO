import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu.components';
import { ButtonComponent } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
})
export class App {
  name = 'Angular';
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'FINALIZAR COMPRA';
}

bootstrapApplication(App);
