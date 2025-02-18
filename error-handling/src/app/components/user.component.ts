import { Component, input } from '@angular/core';
import { User } from '../app.service';

@Component({
  selector: 'app-user',
  template: `
    @let userTmp = user();

    <div class="header">
      <h4>{{ userTmp.name }}</h4>
    </div>

    @if (userTmp.todos?.length) {
      <div class="body">
        <h5>Todos:</h5>
        <ul>
          @for (todo of userTmp.todos; track todo.id; let index = $index) {
            <li>{{ index + 1 }} - {{ todo.text }}</li>
          }
        </ul>
      </div>
    }

    @if (!!userTmp.message) {
      <p class="error-card">{{ userTmp.message }}</p>
    }
  `,
})
export class UserComponent {
  user = input.required<User>();
}
