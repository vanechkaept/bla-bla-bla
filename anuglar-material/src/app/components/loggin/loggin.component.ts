import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  firstPosition: FormGroup;
  secondPosition: FormGroup;
  finalPosition: FormGroup;

  constructor() { }

  ngOnInit() {

    this.createForms();

  }


  createForms() {
    this.firstPosition = new FormGroup ({
      firstName: new FormControl({value: null, disabled: false}, [Validators.required])
    });

    this.secondPosition = new FormGroup ({
      cardNumber: new FormControl({value: null, disabled: false}, [Validators.required, Validators.min(10), Validators.max(9999)])
    });

    this.finalPosition = new FormGroup ({});

    console.log(this.firstPosition);

  }

  getErrorMessage() {

    console.log(this.secondPosition.controls.cardNumber.errors.max.actual);
    if (this.firstPosition.hasError('required')) {
      return 'Введите свое имя';
    }

    return 'fff';

  }


}
