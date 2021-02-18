import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'hulk', 'Thor'];
  heroeBorrado = '';

  borrarHeroe() {
    console.log('Borrando ...');
    const Borrado = this.heroes.shift();
    this.heroeBorrado = Borrado || '';
    console.log('Heroe Borrado ' + this.heroeBorrado);
  }
}
