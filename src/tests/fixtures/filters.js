import moment from 'moment';

const filters = {
  texto: '',
  ordenarPor: 'date',
  fechaInicio: undefined,
  fechaFinal: undefined
};

const altFilters = {
  texto: 'bills',
  ordenarPor: 'amount',
  fechaInicio: moment(0),
  fechaFinal: moment(0).add(3, 'days')
};

export { filters, altFilters };
