import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-un-ka]',
  templateUrl: './un-ka.component.html',
  styleUrls: ['./un-ka.component.scss']
})
export class UnKaComponent implements OnInit {
  @Input()
  un_ka:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
