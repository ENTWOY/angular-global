`1.In Angular 17+ You can use the new syntax:`
```
@for (item of items; track item.id; let idx = $index) {
  {{idx}} - {{item}}
}
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
```
