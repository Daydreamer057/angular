import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Leader} from "../shared/leader";
import {LeaderService} from "../services/leader.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  leader: Leader;

  leaders : Leader[];

  constructor(private leaderservice: LeaderService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.leader = this.leaderservice.getLeader(id);
    this.leaders = this.leaderservice.getLeaders();
  }
}
