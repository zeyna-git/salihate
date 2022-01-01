import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-un-ka2]',
  templateUrl: './un-ka2.component.html',
  styleUrls: ['./un-ka2.component.scss']
})
export class UnKa2Component implements OnInit {
  @Input()
  un_ka:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
