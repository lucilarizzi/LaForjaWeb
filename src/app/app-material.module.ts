import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider'
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule, matDatepickerAnimations} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, MatSliderModule, CarouselModule, WavesModule, MatToolbarModule, MatMenuModule, MatTabsModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule, MatSliderModule, CarouselModule, WavesModule, MatToolbarModule, MatMenuModule,MatDatepickerModule, MatTabsModule
  ]
})
export class AppMaterialModule { }