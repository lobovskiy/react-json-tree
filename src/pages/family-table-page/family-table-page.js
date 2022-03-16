import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTable } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/spinner';
import Table from '../../components/table';
import { configTable } from '../../config';
import './family-table-page.scss';

function FamilyTablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTable());
  }, [dispatch]);

  const content = isLoading
    ? <div className="table-spinner"><Spinner /></div>
    : <Table data={ familyData } columns={ configTable.columns } />

  return (
    <div className="app-content">
      <h1 className="app-content__title">{ t('sections.family-table.header') }</h1>
      { content }
    </div>
  )
}

export default FamilyTablePage;
