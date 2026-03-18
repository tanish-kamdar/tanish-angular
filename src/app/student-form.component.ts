import { Component, Output , EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Import the specific forms module
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  @Output() studentAdded = new EventEmitter<any>();

  // Define the form structure
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    major: new FormControl('', Validators.required),
    gpa: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentAdded.emit(this.studentForm.value);
      
      this.studentForm.reset(); // Clear the form easily
    }
  }
}