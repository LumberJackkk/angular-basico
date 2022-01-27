import { NgModule } from '@angular/core';
import { ContadorComponet } from './contador.componet';


@NgModule({
    declarations: [
        ContadorComponet
    ],
    exports: [
        ContadorComponet
    ]
})



export class ContadorModule{}