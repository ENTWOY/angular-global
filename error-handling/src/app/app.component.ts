import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AppService } from './app.service';
import { UserComponent } from './components/user.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Usuarios</h1>

      @for (user of users.value(); track user.id) {
        <app-user [user]="user" />
      } @empty {
        <p>No hay usuarios</p>
      }

      @if (users.error()) {
        <p class="error-card">{{ users.error() }}</p>
      }
    </div>
  `,
  styleUrl: './app.component.css',
  imports: [UserComponent],
})
export class AppComponent {
  private _appService = inject(AppService);

  users = rxResource({
    loader: () => this._appService.getUsers(),
  });
}
