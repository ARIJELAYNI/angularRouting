import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonDetailsService {
  private person = [
    {
      id: '1',
      name: 'arij'
    },
    {
      id: '2',
      name: 'elaini'
    }
  ];

  constructor() {
  }

  getPersonById(personId: number) {
    return of(this.person.filter(x => x.id == +personId));
  }
}
