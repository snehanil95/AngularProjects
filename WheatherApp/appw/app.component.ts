import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditComponent } from './addedit/addedit.component';
import { CartComponent } from './cart/cart.component';
import { ClothingComponent } from './clothing/clothing.component';
import { EmpaddeditComponent } from './empaddedit/empaddedit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curdapp';
  constructor(private _dialog:MatDialog){
    
    
  }
  openAddEditForm()
  {
    this._dialog.open(AddeditComponent);
  }
  signin()
  {
    this._dialog.open(EmpaddeditComponent);
  }
  cloth()
  {
    this._dialog.open(ClothingComponent)
  }
  mobile()
  {
    this._dialog.open(CartComponent)
  }
}
