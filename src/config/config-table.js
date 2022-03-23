import { setGenderFormat } from '../helpers';

const configTable = {
  columns: [
    {
      dataField: 'first_name',
      text: 'First name'
    },
    {
      dataField: 'last_name',
      text: 'Last name'
    },
    {
      dataField: 'gender',
      text: 'Gender',
      formatter: setGenderFormat
    }
  ]
}

export default configTable;
