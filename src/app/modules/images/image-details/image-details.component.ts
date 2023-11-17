import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsplashService } from 'src/app/shared/unsplash.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  private imageDetails;

  constructor(
    private route: ActivatedRoute,
    private service:UnsplashService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadImageDetails();
  }

  loadImageDetails(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getImageDetails(id).subscribe(
      resp=>{
        this.imageDetails = resp;
      },
      error=>
        console.log("Error peticiones detalles")
      );
  }


  searchTag(tagTitle:string) {
    this.router.navigate([`searcher/search/${tagTitle}`]);
  }
}
