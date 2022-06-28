import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  id = ''
  nombre = ''
  precio = 0

  constructor() { }

  submit() {
    let data = {
      "body":{
        "id_producto": this.id,
        "nombre": this.nombre,
        "precio": this.precio
      } 
    }
    fetch('https://988w4ndhpj.execute-api.us-east-1.amazonaws.com/dev/producto', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
         'Content-Type': 'text/plain' 
        }
    }).then(res => {
      alert('datos enviados')
      this.id = ""
      this.nombre = ""
      this.precio = 0
    }).catch(err => { console.log(err) })
  }

}
