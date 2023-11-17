import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-portal',
  templateUrl: './home-portal.component.html',
  styleUrls: ['./home-portal.component.css']
})
export class HomePortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getSearchEvent(newQuery:string){
    this.router.navigate([`searcher/search/${newQuery}`]);
  }
}
