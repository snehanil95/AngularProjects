import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddeditComponent } from './addedit/addedit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EmpaddeditComponent } from './empaddedit/empaddedit.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import { CartComponent } from './cart/cart.component';
import { ClothingComponent } from './clothing/clothing.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AddeditComponent,
    EmpaddeditComponent,
    CartComponent,
    ClothingComponent
  ],
  imports: [
    BrowserModule,MatIconModule,MatButtonModule,MatDialogModule,
    AppRoutingModule,MatFormFieldModule,MatRadioModule,MatSelectModule,
    BrowserAnimationsModule,MatToolbarModule,MatInputModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
