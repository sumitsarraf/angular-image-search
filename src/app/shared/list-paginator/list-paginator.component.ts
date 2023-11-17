import { Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-list-paginator',
  templateUrl: './list-paginator.component.html',
  styleUrls: ['./list-paginator.component.css']
})
export class ListPaginatorComponent implements OnInit{
  private isFirstLoad = true;
  private paginatorNumbers: Array<number>;
  private buttonState = [false, true];

  @Input('actual-page') actualPage: number;
  @Input('number-page') numberOfPages: number;
  @Input('paginator-size') defaultPaginatorSize: number;
  private finalPaginatorSize;

  @Output() actualPageChange = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    if((changes.numberOfPages && changes.numberOfPages.currentValue) || (changes.actualPage && changes.actualPage.currentValue )){
    this.checkPaginatoSizeForARange();
    this.paginatorNumbers = new Array<number>(this.finalPaginatorSize);
    this.upgradePaginatorPages();
    this.updateArrowButtonsState();

    }

  }
  
  changeNextOrPreviousPage(direction:number){
    this.changePage(this.actualPage + direction);
  }

  changePage(newPage:number){
   this.actualPage = newPage;
   this.actualPageChange.emit(this.actualPage)
    this.upgradePaginatorPages();
    this.updateArrowButtonsState();
  }

  checkPaginatoSizeForARange(){
    if(!this.numberOfPages){
      throw new Error("It has not specific the number of pages")
    }


    if(!this.defaultPaginatorSize){
      this.finalPaginatorSize = 3;
    }else{
      this.finalPaginatorSize = this.defaultPaginatorSize;
    }

    if(this.finalPaginatorSize > this.numberOfPages){
        this.finalPaginatorSize = this.numberOfPages;
    }
    
  }

  upgradePaginatorPages(){
    this.paginatorNumbers = this.calculatePaginatorNumbers(this.getFirstElementOfPaginator())
  }

  getFirstElementOfPaginator(){

    let amountOfOneSidePaginatorNumbers = Math.floor(this.finalPaginatorSize / 2.0);
    let pageInBoundsInferiorLimit = (this.actualPage >= 1 + amountOfOneSidePaginatorNumbers)
    let pageInBoundsSuperiorLimit = (this.actualPage < this.numberOfPages - amountOfOneSidePaginatorNumbers);
   
    if(this.finalPaginatorSize == 1){
      return 1;
    } else if(pageInBoundsInferiorLimit && pageInBoundsSuperiorLimit){
      return this.actualPage - amountOfOneSidePaginatorNumbers;

    }else if(!pageInBoundsInferiorLimit && this.actualPage >= 1){
      return 1;

    }else if(!pageInBoundsSuperiorLimit && this.actualPage < this.numberOfPages){
      return this.numberOfPages - this.finalPaginatorSize;
    }
  }


  calculatePaginatorNumbers(firstElement:number):number[]{
    let paginatorNumbers = new Array<number>();
    for(let i = 0; i < this.finalPaginatorSize ; i++){
      paginatorNumbers.push(firstElement + i);
    }
    return paginatorNumbers;
  }

  
   updateArrowButtonsState() {
    if(this.finalPaginatorSize == 1){
      this.buttonState = [false,false];
    }else if (this.actualPage == 1) {

      this.buttonState = [false,true];
    } else if (this.actualPage == this.numberOfPages - 1) {
      this.buttonState = [true,false];
    } else {
      this.buttonState = [true, true];
    }
  }
}
