import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

let _cep = document.getElementsByTagName('input');

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  public get apiUrl() : string {
      return `http://viacep.com.br/ws/${_cep[0].value}/json/`
  }

  constructor(public http: HttpClient) { }

  getEndereco() {
    return new Promise( (resolve, reject) => {
      this.http.request('GET', this.apiUrl, { responseType: 'json' })
        .subscribe(
          (result: any) => {

            console.log(result);
            resolve(result.json);
          },
          error => {
            console.error(error);
            reject(error.json);
          }
        );
    })
      .catch(e => console.error(e));
  }




}
