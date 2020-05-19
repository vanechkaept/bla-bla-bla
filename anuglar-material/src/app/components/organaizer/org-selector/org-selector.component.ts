import { DateService } from './../../../shared/services/date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-selector',
  templateUrl: './org-selector.component.html',
  styleUrls: ['./org-selector.component.scss']
})
export class OrgSelectorComponent implements OnInit {

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit() {
  }

  go(move: number){
    this.dateService.changeMonth(move);
  }

}
