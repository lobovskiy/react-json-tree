import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import './content-table.scss'

function Table() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);

  if (isLoading) {
    return (
      <div className="app-spinner">
        <Spinner/>
      </div>
    )
  }

  const family = familyData.map(item => {
    return (
      <div key={item.id} className="table__row">
        <div>{item.first_name}</div>
        <div>{item.last_name}</div>
        <div>{item.gender}</div>
      </div>
    )
  })

  return (
		<div className="table">
      <h1 className="table__title">Family members</h1>
      {family}
    </div>
	)
}

export default Table;