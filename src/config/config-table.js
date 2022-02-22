import { genderFormatter } from '../helpers';

const configTable = {
  columns: [
    // 'id',
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
      formatter: genderFormatter
    }
  ]
}

export default configTable;
