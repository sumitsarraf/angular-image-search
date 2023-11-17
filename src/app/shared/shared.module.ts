import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnsplashService } from "./unsplash.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ListPaginatorComponent } from "./list-paginator/list-paginator.component";
@NgModule({
  declarations: [SearchBarComponent, ListPaginatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [SearchBarComponent, ListPaginatorComponent],
  providers: [UnsplashService],
})
export class SharedModule {}
