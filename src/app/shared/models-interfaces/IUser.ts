import { ILinks } from "./ILinks"

export interface IUser {
  id: string
  username: string
  name: string
  portfolio_url: string
  links: ILinks
}