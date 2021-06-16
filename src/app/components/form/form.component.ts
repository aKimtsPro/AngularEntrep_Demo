import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor( builder: FormBuilder ) {

    this.form = builder.group({
      'nom': new FormControl(null, Validators.required),
      'prenom': new FormControl(),
      'age': new FormControl(0, [ Validators.required, Validators.min(0), Validators.max(100)])
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);

    if( this.form.valid ){
      console.log( this.form.value )
    }
    else {
      console.log('invalid')
    }
  }

}
