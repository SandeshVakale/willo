import {transformData} from '../utils/transformData';

export const getCycles = () => {
  const cyclesData = require('../mock/raw_brushing_cycle.json');
  return transformData(cyclesData);
};
