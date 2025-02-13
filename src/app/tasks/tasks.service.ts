import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, DocumentData, DocumentReference, Firestore, orderBy, query, setDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthStore } from '../auth/auth.store';
import { Category, Task } from './tasks.beans';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // DI
  private authService = inject(AuthService);
  private db = inject(Firestore);
  readonly authStore = inject(AuthStore)

  constructor() { }

  getAllTasks(): Observable<Task[]> {
    const maintItemsRef = query(collection(this.db, 'tasks'), this.authStore.whereSharedWithCurrentUser()!, orderBy('sortOrder', 'asc'));
    return collectionData(maintItemsRef, { idField: 'id' }) as Observable<Task[]>;
  }

  saveTask(task: Task): Observable<DocumentReference<DocumentData> | void> {
    if (!!task.id) {
      return from(setDoc(doc(this.db, `tasks/${task.id}`), task));
    } else {
      return from(addDoc(collection(this.db, 'tasks'), task));
    }
  }

  getAllCategories(): Observable<Category[]> {
    const categoriesRef = query(collection(this.db, 'categories'), this.authStore.whereSharedWithCurrentUser()!, orderBy('sortOrder', 'asc'));
    return collectionData(categoriesRef, { idField: 'id' }) as Observable<Category[]>;
  }
}
