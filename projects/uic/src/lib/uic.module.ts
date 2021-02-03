import { NgModule } from '@angular/core';
import { UicComponent } from './uic.component';
import { ButtonComponent } from './button/button.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';



@NgModule({
  declarations: [
    UicComponent,
    ButtonComponent,
    ColorSchemeComponent
  ],
  imports: [
  ],
  exports: [
    UicComponent,
    ButtonComponent,
    ColorSchemeComponent
  ]
})
export class UicModule { }
