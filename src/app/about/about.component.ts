import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private lead : LeaderService) { }
  leadDetails;
  ngOnInit() {
    this.leadDetails = this.lead.getLeaders();
  }

}
