import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTable } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import { Spinner, Table } from '../../components';
import { configTable } from '../../config';
import './table-page.scss';

function TablePage() {
  const { members, isLoading, error } = useSelector(state => state.table);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);

  const spinner = <div className="family-table__spinner"><Spinner /></div>;

  return (
    <div className="family-table">
      <h1 className="family-table__title">{ t('sections.family-table.header') }</h1>
      { error && <h1>{ error }</h1> }
      { isLoading && spinner }
      <Table data={ members } columns={ configTable.columns } />
    </div>
  )
}

export default TablePage;
