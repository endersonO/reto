//import { baseModelResolver } from '../base/base.resolver';
import { Energy } from './energy.model';

const energies: Energy[] = [
  {
    id: '1',
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    name: 'Gury',
    year: '2022',
    month: 'may',
    energyType: 'Hydro Electric',
    consumption: 3,
    unit: 'MW'
  },
  {
    id: '2',
    name: 'Gury',
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
    id: '3',
    name: 'Gury',
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    year: '2022',
    month: 'feb',
    energyType: 'Hydro Electric',
    consumption: 3,
    unit: 'MW'
  }
];

export function findAll(): Energy[] {
  return energies;
}

export function findOne(id: string): Energy | null {
  return energies[0];
}
