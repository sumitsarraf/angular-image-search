import { IUrls } from "../IUrls"
import { ICurrentUserCollection } from "./ICurrentUserCollection"
import { IExif } from "./IExif"
import { ILinksImageDetails } from "./ILinksImageDetails"
import { ILocation } from "./ILocation"
import { ITag } from "./ITag"
import { IUserImageDetails } from "./IUserImageDetails"

export interface IImageDetails {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    downloads: number
    likes: number
    liked_by_user: boolean
    public_domain: boolean
    description: string
    exif: IExif
    location: ILocation
    tags: ITag[]
    current_user_collections: ICurrentUserCollection[]
    urls: IUrls
    links: ILinksImageDetails
    user: IUserImageDetails
  }