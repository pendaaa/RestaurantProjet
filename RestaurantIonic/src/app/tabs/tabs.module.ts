import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TabsPageRoutingModule } from './tabs-routing.module';
import { ControlContainer } from '@angular/forms'

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ReactiveFormsModule
     
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
