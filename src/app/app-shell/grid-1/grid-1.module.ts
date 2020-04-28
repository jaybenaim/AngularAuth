import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { Grid1RoutingModule } from './grid-1-routing.module';
import { GridBoxComponent } from './grid-box/grid-box.component';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

@NgModule({
  declarations: [GridComponent, GridBoxComponent],
  imports: [
    CommonModule,
    WarningMessageModule,
    Grid1RoutingModule
  ]
})
export class Grid1Module { }
