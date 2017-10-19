import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<{flag: string}>();

  constructor() {}

  ngOnInit() {
  }

  onMenuClick(param) {
    this.menuClicked.emit({
      flag: param
    });
  }
}
