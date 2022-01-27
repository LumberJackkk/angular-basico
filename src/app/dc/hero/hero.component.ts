
import { Component } from '@angular/core';


@Component({
    selector   : 'app-hero',
    templateUrl: '../hero/hero.component.html'

})
export class HeroComponent{
    title: string = 'Hero page';
    nombre: string = 'SuperMan';
    edad: number = 33;

    get upperLetter():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }
    otherHero(): void{
        this.nombre = 'Batman'
    }
    ageChange(): void{
        this.edad =34
    }
}