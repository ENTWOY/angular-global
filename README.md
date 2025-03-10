# ReactiveForms: 
- FormControl: Representa un solo campo de formulario.
- FormGroup: Agrupa múltiples campos en una entidad.
- FormBuilder: Facilita la creación de FormGroup y FormControl de manera más concisa.

```
ng g c new-component --skip-tests --style none
```
```
git reset --hard HEAD^
git push origin main --force
```

`2. Use LB.`
```
@for(item of filteredOptions | async; track item) {
  <mat-option 
    [value]="item">
    <strong>{{ item.option }}</strong> / <small>{{ item.option }}</small>
  </mat-option>
} @empty {
  <mat-option>       
    No se encontró option.
  </mat-option>
}
```
`3. Para obtener el índice de postResult`
```
<div *ngFor="let post of apiService.postsResult$ | async; let i = index">
  {{i}} - {{post.title}}
<div>

.mat-form-field {
  font-size: 0.74rem;

  input {
    font-size: 1rem;
  }

  label.mat-form-field-label {
    font-size: 1rem;
    top: 1.45em;
  }

  &.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,
  &.mat-form-field-can-float
    .mat-input-server:focus
    + .mat-form-field-label-wrapper
    .mat-form-field-label {
    transform: translateY(-1.25em) scale(0.75);
    width: 133.33333%;
  }
}
```
