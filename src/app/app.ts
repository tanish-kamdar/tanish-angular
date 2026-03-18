import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCardComponent } from './student.component';
import { StudentFormComponent } from './student-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentCardComponent, StudentFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tanish-angular');

  students: any[] = [];

  // This function will "catch" the event from the child
  handleNewStudent(newStudent: any) {
    // Generate a random ID since the form doesn't provide one
    const studentWithId = { ...newStudent, id: Math.floor(Math.random() * 1000) };
    this.students.push(studentWithId);
    alert(`Student Added : ${studentWithId.name}`);
  }
}
