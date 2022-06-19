import { Component } from '@angular/core';
import { ViacepService } from '../services/viacep.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(private viacep: ViacepService) { }

  getLastLogged(): any {
    throw new Error('Method not implemented.');
  }
  endereco() {  this.viacep.getEndereco()}


}
