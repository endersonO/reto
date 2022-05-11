import { BaseModel } from '../base/base.model'

export type Energy = BaseModel & {
  id: string
  name: string
  year: string
  month: string
  energyType: string
  consumption: number
  unit: string
}

/* const energy = [
  {
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    year: '2022',
    month: 'may',
    energyType: 'Hydro Electric',
    consumption: 3,
    unit: 'MW'
  },
  {
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    year: '2022',
    month: 'jan',
    energyType: 'Hydro Electric',
    consumption: 3,
    unit: 'MW'
  },
  {
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    year: '2022',
    month: 'feb',
    energyType: 'Hydro Electric',
    consumption: 3,
    unit: 'MW'
  }
] */