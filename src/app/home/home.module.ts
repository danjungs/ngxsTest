import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { NgxsModule } from '@ngxs/store';
import { UserState } from '../state/user.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    ComponentsModule,
    NgxsModule.forRoot([
      UserState
    ]),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
