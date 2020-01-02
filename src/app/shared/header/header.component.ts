import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() shortTitle = '';
  @Input() longTitle = '';
  @Input() leftActionIcon;
  @Input() rightActionIcon;
  @Input() leftActionText = '';
  @Input() rightActionText = '';

  constructor() {
  }

  ngOnInit() {
  }

}
