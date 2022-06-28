import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre = ""
  correo = ""

  constructor() {}

  submit() {
    let data = {
      "body":{
        "nombre": this.nombre,
        "correo": this.correo
      } 
    }
    fetch('https://988w4ndhpj.execute-api.us-east-1.amazonaws.com/dev/cliente', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
         'Content-Type': 'text/plain' 
        }
    }).then(res => {
      alert('datos enviados')
      this.nombre = ""
      this.correo = ""
    }).catch(err => { console.log(err) })
  }

}


