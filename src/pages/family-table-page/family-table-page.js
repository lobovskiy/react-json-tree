import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTable } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/spinner';
import Table from '../../components/table';
import { configTable } from '../../config';
import './family-table-page.scss';

function FamilyTablePage() {
  const { members, isLoading, error } = useSelector(state => state.table);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);

  return (
    <div className="app-content">
      <h1 className="app-content__title">{ t('sections.family-table.header') }</h1>
      { error && <h1>{ error }</h1> }
      { isLoading && <div className="table-spinner"><Spinner /></div> }
      <Table data={ members } columns={ configTable.columns } />
    </div>
  )
}

export default FamilyTablePage;
