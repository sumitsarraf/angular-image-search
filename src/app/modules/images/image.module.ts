import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageSearcherComponent } from './image-searcher/image-searcher.component';
import { ImageRoutingModule } from './image-routing.module';
import { HomePortalComponent } from './home-portal/home-portal.component';

@NgModule({
  declarations: [ImageSearcherComponent, ImageDetailsComponent,HomePortalComponent],
  imports: [
    CommonModule,
    ImageRoutingModule,
    SharedModule
  ]
})
export class ImageModule { }
