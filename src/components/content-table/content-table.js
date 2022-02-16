import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import './content-table.scss';
import { createNameFromProperty, highlightGender } from '../helpers';
import { withNamespaces } from 'react-i18next';

function Table({ t }) {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);

  if (isLoading) {
    return (
      <div className="app-spinner">
        <Spinner/>
      </div>
    )
  }

  const FIRST_NAME = 'first_name';
  const LAST_NAME = 'last_name';
  const GENDER = 'gender';

  const tableHeader =
    <div className="table__row table__row_head">
      <div>{createNameFromProperty(FIRST_NAME)}</div>
      <div>{createNameFromProperty(LAST_NAME)}</div>
      <div>{createNameFromProperty(GENDER)}</div>
    </div>

  const family = familyData.map(item => {
    return (
      <div key={item.id} className="table__row">
        <div>{item[FIRST_NAME]}</div>
        <div>{item[LAST_NAME]}</div>
        {highlightGender(item[GENDER])}
      </div>
    )
  })

  if (familyData.length) {
    return (
      <div className="table">
        <h1 className="table__title">{t('Table header')}</h1>
        {tableHeader}
        {family}
      </div>
    )
  } else {
    return null;
  }
}

export default withNamespaces()(Table);