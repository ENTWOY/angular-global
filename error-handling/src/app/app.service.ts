import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  count,
  forkJoin,
  map,
  mergeMap,
  of,
  retry,
  throwError,
  timer,
} from 'rxjs';

export interface User {
  id: number;
  name: string;
  todos?: Todo[];
  message?: string;
}

export interface Todo {
  id: number;
  text: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _url = 'http://localhost:3000';

  private _http = inject(HttpClient);

  getUsers() {
    return this._http.get<User[]>(`${this._url}/users`).pipe(
      mergeMap((users) => {
        return forkJoin(users.map((user) => this.getUserTodos(user)));
      }),
      catchError((error) => {
        console.log('error desde el servicio');
        return throwError(() => error.error.message);
      }),
    );
  }

  getUserTodos(user: User) {
    return this._http.get<Todo[]>(`${this._url}/users/${user.id}/todos`).pipe(
      map((todos) => ({ ...user, todos })),
      catchError((error) => {
        console.log('error desde la peticion hija');
        return of({ ...user, todos: [], message: error.error.message });
      }),
    );
  }
}
