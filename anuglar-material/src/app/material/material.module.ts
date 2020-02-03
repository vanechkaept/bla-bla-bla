import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatBadgeModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const MaterialCoponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,


];




@NgModule({
  declarations: [],
  imports: [MaterialCoponents],
  exports: [ MaterialCoponents]
})
export class MaterialModule { }
