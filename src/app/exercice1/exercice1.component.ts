import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  nomAfficher: boolean = false;
  nom: string = "Arabah";
  prenom!: string;
  getPrenom(): string {
    this.prenom = "Imrane";
    this.nomAfficher = true;
    return this.prenom;
  }
}

