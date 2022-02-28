import { genderFormatter } from '../helpers';

const configTable = {
  columns: [
    // 'id',
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
      formatter: genderFormatter
    }
  ]
}

export default configTable;
