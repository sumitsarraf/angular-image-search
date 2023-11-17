import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageSearcherComponent } from './image-searcher/image-searcher.component';


const routes: Routes = [
  {
    path : '',
    component: HomePortalComponent
  },
  {
     path: 'image/:id',
     component: ImageDetailsComponent 
  },
  {
     path: 'search/:query',
     component: ImageSearcherComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
