import { setGenderFormat } from '../helpers';

const configTable = {
  columns: [
    {
      dataField: 'firstName',
      text: 'First name'
    },
    {
      dataField: 'lastName',
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
