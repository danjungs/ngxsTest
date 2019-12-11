import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../state/user.state';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [CreateComponent, IndexComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateComponent,
    IndexComponent
  ]
})
export class ComponentsModule { }
