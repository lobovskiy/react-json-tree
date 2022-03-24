import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTree } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';

function TreePage() {
  const familyData = useSelector(state => state.family.tree);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTree());
  }, [dispatch]);

  const tree = isLoading ?
  <div className="family-table__spinner"><Spinner /></div> :
    <Tree data={ familyData } />;

  return (
    <div className="family-tree">
      <h1 className="family-tree__title">{ t('sections.family-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default TreePage;
