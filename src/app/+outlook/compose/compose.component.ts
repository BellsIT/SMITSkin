import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OutlookMessage} from '../shared/outlook-message.class';
import {OutlookService} from '../shared/outlook.service';

import {FadeInLeft} from '../../shared/animations/fade-in-left.decorator';


@FadeInLeft()
@Component({
  selector: 'sa-compose',
  templateUrl: './compose.component.html',
})
export class ComposeComponent implements OnInit {

  public message:OutlookMessage;


  public carbonCopy: boolean = false;
  public blindCarbonCopy: boolean = false;
  public attachments = false;

  public sending = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: OutlookService) {

  }

  ngOnInit()
  // tslint:disable-next-line:one-line
  {
    this.message = new OutlookMessage({})

  }

  send() {
    this.sending = true;
    setTimeout(() => {
      this.router.navigate(['/outlook'])
    }, 2000)
  }
}
