import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture.model';
import { VoiturePipe } from 'src/app/pipes/voiture.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  voitureList: Voiture[] = [
    {
      marque: 'vroom',
      model: 'vrim',
      puissance: 100
    },
    {
      marque: 'bip',
      model: 'boop',
      puissance: 80
    },
    {
      marque: 'ono',
      model: 'mato',
      puissance: 140
    }
  ]

  constructor() {
    
    console.log(new VoiturePipe().transform(this.voitureList[0]))
  }

  ngOnInit(): void {
  }

}
