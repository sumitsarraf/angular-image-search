import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "searcher",
    loadChildren: () =>
      import("./modules/images/image.module").then((m) => m.ImageModule),
  },
  { path: "", redirectTo: "searcher", pathMatch: "full" },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
