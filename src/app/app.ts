import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {

  taskList: Task[] = [];
  isLoading: boolean = false;

  constructor(private taskService: TaskService) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskList = this.taskService.getTasks();
    this.isLoading = false;
  }
}