import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  hero: string[] = ['Batman', 'SuperMan', 'Flash', 'WonderWoman'];
  dhero: string = '';
  deleteHero(): void {
    this.dhero = this.hero.shift()||'';
  }
}
