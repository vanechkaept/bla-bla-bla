import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const MaterialCoponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,

];




@NgModule({
  declarations: [],
  imports: [MaterialCoponents],
  exports: [ MaterialCoponents]
})
export class MaterialModule { }
