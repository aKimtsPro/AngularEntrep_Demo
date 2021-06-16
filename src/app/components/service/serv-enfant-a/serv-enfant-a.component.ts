import { Component, OnInit } from '@angular/core';
import { NomService } from 'src/app/services/nom.service';

@Component({
  selector: 'app-serv-enfant-a',
  templateUrl: './serv-enfant-a.component.html',
  styleUrls: ['./serv-enfant-a.component.css']
})
export class ServEnfantAComponent implements OnInit {

  nom: string

  constructor(private service : NomService) { }

  ngOnInit(): void {
  }

  onSend() {
    this.service.addNom( this.nom );
  }



}
