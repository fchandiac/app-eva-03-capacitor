import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  codigo = ""
  direccion = ""

  constructor() {}

  submit() {
    let data = {
      "body":{
        "codigo": this.codigo,
        "direccion": this.direccion
      } 
    }
    fetch('https://988w4ndhpj.execute-api.us-east-1.amazonaws.com/dev/envio', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
         'Content-Type': 'text/plain' 
        }
    }).then(res => {
      alert('datos enviados')
      this.codigo = ""
      this.direccion = ""
    }).catch(err => { console.log(err) })
  }

}
