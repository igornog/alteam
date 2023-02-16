import { SoloClient } from './client'
import { Availability } from './talent'

export interface ClientListing {
  id?: number
  soloClient: SoloClient | string
  listingName: string
  individuals: number
  workType?: WorkType
  timeZone: string
  availability: Availability
  projectLength: number
  startDate?: Date
  currency?: Currency
  exactRate?: number
  rateFrom?: number
  rateTo?: number
  difficulty: Difficulty
  learningLink: string
  roles: Role[]
  skills: string[]
  questions: string[]
  jobDescription?: string
  listingType: ListingType
  status: ListingState
}

export interface Role {
  roleName: string
  description?: string
  price?: number
  percentage?: number
}

export enum WorkType {
  OnSite = 'On Site',
  Hybrid = 'Hybrid',
  Remote = 'Remote',
}

export enum RateType {
  Fixed = 'Fixed',
  Variable = 'Variable',
}

export enum ProjectLengthType {
  Hourly = 'Hourly',
  Daily = 'Daily',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export enum Difficulty {
  Junior = 'Junior',
  MidSenior = 'MidSenior',
  Senior = 'Senior',
  Lead = 'Lead',
}

export enum ListingType {
  Project = 'Project',
  Team = 'Team',
}

export enum ListingState {
  Draft = 'Draft',
  Active = 'Active',
  Deactivate = 'Deactivate',
}

export enum Currency {
  Dollars = 'Dollars',
  Euros = 'Euros',
  Pounds = 'Pounds',
}

export interface ListingSearch {
  listingName?: string
  listingType?: ListingType
  clientId?: number
}
