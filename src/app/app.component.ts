import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Quiz';
  listEstudantes: any[] = [
    { nome: 'Rivaldo Souza', estado: 'Promovido' },
    { nome: 'Emanuella Souza', estado: 'Regular' },
    { nome: 'Gabriella', estado: 'Regular' },
    { nome: 'Adriana', estado: 'Regular' }
  ]
  mostrar = true;
  toogle(): void {
    this.mostrar = !this.mostrar
  }
}
