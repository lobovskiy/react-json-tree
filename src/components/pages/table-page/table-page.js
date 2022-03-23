import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTable } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
<<<<<<<< HEAD:src/pages/family-table-page/family-table-page.js
import Spinner from '../../components/spinner';
import Table from '../../components/table';
import { configTable } from '../../config';
========
import Spinner from '../../spinner';
import Table from '../../table';
import { configTable } from '../../../config';
import './table-page.scss';
>>>>>>>> table:src/components/pages/table-page/table-page.js

function FamilyTablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTable());
  }, [dispatch]);

  const content = isLoading ?
    <div className="family-table__spinner"><Spinner /></div> :
    <Table data={ familyData } columns={ configTable.columns } />

  return (
<<<<<<<< HEAD:src/pages/family-table-page/family-table-page.js
    <div className="app-content">
      <h1 className="app-content__title">{ t('sections.family-table.header') }</h1>
========
    <div className="family-table">
      <h1 className="family-table__title">{ t('Table header') }</h1>
>>>>>>>> table:src/components/pages/table-page/table-page.js
      { content }
    </div>
  )
}

export default FamilyTablePage;
