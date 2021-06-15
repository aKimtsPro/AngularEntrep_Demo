import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  salutation = {
    msg: "salut"
  };
  google = "http://www.google.com"
  nom: string;

  constructor() { }

  ngOnInit(): void {
  }

}
