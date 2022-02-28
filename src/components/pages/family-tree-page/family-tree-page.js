import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTree } from '../../../store/reducer';
import { useTranslation } from 'react-i18next';
import Tree from '../tree';
import Spinner from '../../spinner';

function FamilyTreePage() {
  const familyData = useSelector(state => state.family.tree);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTree());
  }, [dispatch]);

  const content = isLoading ?
    <Spinner /> :
    <Tree data={ familyData } />;

  return (
    <div className="app-content">
      <h1 className="app-content__title">{ t('sections.tree.header') }</h1>
      { content }
    </div>
  )
}

export default FamilyTreePage;
