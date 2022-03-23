import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamily } from '../../../store/reducer';
import { useTranslation } from 'react-i18next';
import Spinner from '../../spinner';
import Table from '../../table';
import { configTable } from '../../../config';
import './table-page.scss';

function FamilyTablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamily());
  }, [dispatch]);

  const content = isLoading ?
    <div className="family-table__spinner"><Spinner /></div> :
    <Table data={ familyData } columns={ configTable.columns } />

  return (
    <div className="family-table">
      <h1 className="family-table__title">{ t('Table header') }</h1>
      { content }
    </div>
  )
}

export default FamilyTablePage;
