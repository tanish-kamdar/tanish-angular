import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true, // Modern Angular doesn't need "Modules"
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentCardComponent {
  // This is your "State"
  student = {
    id: 35,
    name: 'Tanish Kamdar',
    major: 'Information Technology',
    gpa: 9.05
  };

  isLoaded = true;
}