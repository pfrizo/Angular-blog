import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css']
})
export class MenuInfoComponent implements OnInit {

  @Input()
  menuSubject:string = ''

  @Input()
  data:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
