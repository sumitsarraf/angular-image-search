import { IUrls } from "../IUrls"
import { ILinks2ImageSearch } from "./ILinks2ImageSearch"
import { IUserImageSearch } from "./IUserImageSearch"

export interface IResult {
  id: string
  created_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: IUserImageSearch
  current_user_collections: any[]
  urls: IUrls
  links: ILinks2ImageSearch
}