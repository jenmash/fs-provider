import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { rental} from '../models/rental.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



public rentals: Array<rental>=[];

  constructor(
    private navCtrl: NavController
  ) {
    let Lisbon= new rental("Lisbon", "450 USD", "Nata Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlNcqSWMq7v0cfgWiyiNaZRLf_a-iMHfVqsAHuU6yvtODcG57");
    this.rentals = new Array();
    this.rentals.push(Lisbon);

    let Paris = new rental("Paris", "500 USD", "Villa de Fleurs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYjJAAY2i35rR0U8Jo-G_zQwvRbbT1JWiG8ako3a3YZdUXe4V");
    this.rentals.push(Paris);
  }
}
