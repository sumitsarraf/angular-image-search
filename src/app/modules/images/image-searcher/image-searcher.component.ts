import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from 'src/app/shared/unsplash.service';
import {Router, ActivatedRoute } from '@angular/router';
import { IPage } from 'src/app/shared/models-interfaces/image-search-interfaces/IPage';
@Component({
  selector: 'app-image-searcher',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.css']
})


export class ImageSearcherComponent implements OnInit {

  private imagePageData:IPage;
  private actualQuery:string;
  private actualPage:number = 1;
  private queryError:boolean = false;

  
  constructor(private service:UnsplashService,private router: Router,private route: ActivatedRoute) {
  }

  goToImageDetais(id:string) {
    this.router.navigate([`searcher/image/${id}`]);
  }

  ngOnInit() {
    this.actualQuery = this.route.snapshot.paramMap.get('query');
    this.searchImage(this.actualQuery,1);
  }


  searchImage(query:string,page:number){
    this.service.searchImage(query,page).subscribe(
      resp=>{
        this.imagePageData = resp;
        this.queryError = false;
      },
      error=>{
        this.queryError = true;
      }
    )
  }

  
  getSearchEvent(newQuery:string){
    this.actualQuery = newQuery
    this.actualPage = 1;
    this.searchImage(newQuery,this.actualPage);
    
    this.router.navigate([`searcher/search/${newQuery}`]);
  }

  onActualPageChange(newPage:number){
    this.actualPage = newPage;
    this.searchImage(this.actualQuery,newPage);
  }


}
