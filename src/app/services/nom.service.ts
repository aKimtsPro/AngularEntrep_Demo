import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomService {

  private listNom: string[] = [
    'samy'
  ];

  listNomChanged = new BehaviorSubject<string[]>([...this.listNom]);


  constructor() { }

  addNom(nom: string) {
    this.listNom.push(nom);
    this.listNomChanged.next(this.getListNom());
  }

  getListNom(): string[] {
    return [...this.listNom];
  }
}
