import { IfStmt } from '@angular/compiler';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true, // Modern Angular doesn't need "Modules"
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentCardComponent {
  // This is your "State"
  @Input() student : any;

}