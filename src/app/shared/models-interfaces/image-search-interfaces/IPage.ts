import { IResult } from "./IResult"

export interface IPage {
  total: number
  total_pages: number
  results: IResult[]
}