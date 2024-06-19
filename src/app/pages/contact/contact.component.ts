import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  tasks: { text: string; message: string; subject: string, email: string }[] = [];

  name: string = '';
  subject: string = '';
  message: string = '';
  email: string = '';

  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  addTask() {
    if (this.name.trim() !== '') {
      const newTask = {
        text: this.name.trim(),
        subject: this.subject.trim(),
        message: this.message.trim(),
        email: this.email.trim(),
      };

      this.tasks.push(newTask);

      console.log('New task added:', newTask);

      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      setTimeout(() => {
        this.tasks = this.tasks.filter(task => task !== newTask);
      }, 10000); // 10 seconds

      setTimeout(() => this.showSuccessMessage = false, 10000);
    } else {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;

      setTimeout(() => this.showErrorMessage = false, 10000);
    }
  }
}
