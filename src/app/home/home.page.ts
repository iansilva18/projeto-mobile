import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  entrada1 : string
  entrada2 : string
  mensagen : string ='ola mundo'

  constructor() {}

  soma(){
    var num1 = parseFloat(this.entrada1)
    var num2 = parseFloat(this.entrada2)
    var soma = num1 + num2
    this.mensagen = soma.toString()
  }

 sub(){ 
    var num1 =parseFloat(this.entrada1)
    var num2 =parseFloat(this.entrada2)
    var soma = num1 - num2
    this.mensagen = soma.toString()
}  

  mult(){
    var num1 =parseFloat(this.entrada1)
    var num2 =parseFloat(this.entrada2)
    var soma = num1 * num2
    this.mensagen = soma.toString()
  }

  divs(){
    var num1 =parseFloat(this.entrada1)
    var num2 =parseFloat(this.entrada2)
    var soma = num1 / num2
    this.mensagen = soma.toString()
  }
  }

