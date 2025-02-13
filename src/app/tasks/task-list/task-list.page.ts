import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/angular/standalone';
import { AuthStore } from '../../auth/auth.store';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Task } from '../tasks.beans';
import { TasksStore } from '../tasks.store';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class TaskListPage {

  console = console;

  // DI
  readonly store = inject(TasksStore);
  readonly authStore = inject(AuthStore);

  constructor() {
    effect(() => {
      if (this.authStore.user()) {
        this.store.initDataLoad();
      }
    });
  }

  viewTask(task: Task): void {
    this.console.log(task);
  }
}
