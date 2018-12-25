import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonDetailsService} from './person-details.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  personId;
  person;

  constructor(private activeRoute: ActivatedRoute, private personDetailsService: PersonDetailsService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const personId = params['personId'];
      this.personDetailsService.getPersonById(+personId).subscribe(person => {
        this.person = person;
      });
    });
  }
}
