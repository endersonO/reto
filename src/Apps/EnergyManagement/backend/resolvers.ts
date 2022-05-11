import * as avo from './modules/avocado/avocado.resolver';
//import * as scalars from './modules/base/scalars.model'
import * as energy from './modules/energy/energy.resolver'

export default {
  //...scalars,
  avo: avo.findOne,
  avos: avo.findAll,
  energy: energy.findOne,
  energies: energy.findAll
};
