import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamily } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Spinner from '../spinner';
import Table from '../table';
import { configTable } from '../../config';

function FamilyTablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamily());
  }, [dispatch]);

  const content = isLoading
    ? <Spinner/>
    : <Table data={familyData} columns={configTable.columns} />

  return (
    <div className="app-content">
      <h1 className="app-content__title">{t('Table header')}</h1>
      {content}
    </div>
  )
}

export default FamilyTablePage;
