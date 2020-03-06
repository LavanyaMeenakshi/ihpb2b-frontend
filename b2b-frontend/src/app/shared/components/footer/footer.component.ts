import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  chatVis = false;
  msgVis = false;
  msgs = 1; // TODO: remove this when actual message hooked up

  ngOnInit() {
  }

  showChatDialog() {
    this.chatVis = true ;
  }
  showMsgDialog() {
    this.msgVis = true ;
  }
  msgRefresh() { // temporary function to test functionality.
    this.msgs = Math.floor(Math.random() * Math.floor(2)) ;
  }

}
