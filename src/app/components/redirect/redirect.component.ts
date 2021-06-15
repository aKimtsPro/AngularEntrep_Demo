import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  age;

  constructor( private router: Router ) {
  }

  ngOnInit(): void {
  }

  onOk() {
    if( this.age && this.age >= 18 ) {
      this.router.navigateByUrl("/directive");
    }
    else if( this.age && this.age < 18 ){
      this.router.navigate(['binding'])
    }
    else {
      alert("veuillez entrer votre age")
    }
  }

}
