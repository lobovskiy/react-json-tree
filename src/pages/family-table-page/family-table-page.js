import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamily } from '../../store-toolkit/reducer';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/spinner';
import Table from '../../components/table';
import { configTable } from '../../config';
import './family-table-page.scss';

function FamilyTablePage() {
  const familyData = useSelector(state => state.toolkit.family.table);
  const isLoading = useSelector(state => state.toolkit.loading);
  const error = useSelector(state => state.toolkit.error);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamily());
  }, [dispatch]);

  return (
    <div className="app-content">
      <h1 className="app-content__title">
        { t('sections.family-table.header') }
        { isLoading && <Spinner size="small" /> }
      </h1>
      { error && <h1>{ error }</h1> }
      <Table data={ familyData } columns={ configTable.columns } />
    </div>
  )
}

export default FamilyTablePage;
