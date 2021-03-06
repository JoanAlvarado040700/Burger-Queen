import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ToolbarComponent
  ],
  exports:[
    ToolbarComponent

  ]
})
export class SharedModule { }
