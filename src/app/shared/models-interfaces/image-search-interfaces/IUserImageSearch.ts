import { IUser } from "../IUser"
import { IProfileImage } from "./IProfileImage"

export interface IUserImageSearch extends IUser{
  first_name: string
  last_name: string
  instagram_username: string
  twitter_username: string
  profile_image: IProfileImage
}