import { IUser } from "../IUser"
import { ILinks2ImageDetails } from "./ILinks2ImageDetails"

export interface IUserImageDetails extends IUser{
    updated_at: string
    bio: string
    location: string
    total_likes: number
    total_photos: number
    total_collections: number
    links: ILinks2ImageDetails
  }