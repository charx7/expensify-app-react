import moment from 'moment'

export default [{
  id: '1',
  descripcion: 'Gum',
  nota: '',
  monto: 195,
  creadoEn: 0
}, {
  id: '2',
  descripcion: 'Rent',
  nota: '',
  monto: 109500,
  creadoEn: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  descripcion: 'Credit Card',
  nota: '',
  monto: 4500,
  creadoEn: moment(0).add(4, 'days').valueOf()
}];
