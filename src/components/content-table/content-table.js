import { useSelector } from 'react-redux';
import Spinner from '../spinner';

function Table() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);

  if (isLoading) {
    return (
      <Spinner/>
    )
  }

  const family = familyData.map(item => {
    return (
      <div key={item.id}>{item.first_name} {item.last_name}</div>
    )
  })

  return (
		<div>
      {family}
    </div>
	)
}

export default Table;