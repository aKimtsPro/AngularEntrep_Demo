import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {

  parametre;

  constructor( route: ActivatedRoute ) {
    this.parametre = route.snapshot.params["nbr"];
  }

  ngOnInit(): void {
  }

}
