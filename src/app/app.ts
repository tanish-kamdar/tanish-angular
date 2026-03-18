import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCardComponent } from './student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tanish-angular');
}
