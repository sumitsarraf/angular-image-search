import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild("queryInput",{static: false}) queryInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  searhEvent(){
  this.searchEvent.emit(this.queryInput.nativeElement.value)
  }

}
