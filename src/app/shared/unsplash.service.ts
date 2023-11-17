import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPage } from "./models-interfaces/image-search-interfaces/IPage";
import { IImageDetails } from "./models-interfaces/image-details-interfaces/IImageDetails";

@Injectable()
export class UnsplashService {
  private readonly unsplashUrl: string = "https://api.unsplash.com/";
  private unsplash_api_key = "api_key_here";

  constructor(private http: HttpClient) {}

  searchImage(query: string, page: number) {
    let options = {
      params: new HttpParams()
        .append("client_id", this.unsplash_api_key)
        .append("query", query)
        .append("page", page.toString()),
    };

    let url = this.unsplashUrl + "search/photos";
    return this.http.get<IPage>(url, options);
  }

  getImageDetails(idImage: string) {
    let options = {
      params: new HttpParams().append("client_id", this.unsplash_api_key),
    };

    let url = this.unsplashUrl + "photos/" + idImage;
    return this.http.get<IImageDetails>(url, options);
  }
}
