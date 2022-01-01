import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-un-ka1]',
  templateUrl: './un-ka1.component.html',
  styleUrls: ['./un-ka1.component.scss']
})
export class UnKa1Component implements OnInit {
  @Input()
  un_ka:any={}

  constructor() { }

  ngOnInit(): void {
  }

}
