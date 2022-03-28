import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTable } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import { Spinner, Table } from '../../components';
import { configTable } from '../../config';
import './table-page.scss';

function TablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.family.tableLoading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTable());
  }, [dispatch]);

  const spinner = <div className="family-table__spinner"><Spinner /></div>;

  return (
    <div className="family-table">
      <h1 className="family-table__title">{ t('sections.family-table.header') }</h1>
      { isLoading && spinner }
      <Table data={ familyData } columns={ configTable.columns } />
    </div>
  )
}

export default TablePage;
