import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTree } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';
import './family-tree-page.scss';

function FamilyTreePage() {
  const familyData = useSelector(state => state.family.tree);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTree());
  }, [dispatch]);

  const tree = isLoading
    ? <div className="tree-spinner"><Spinner /></div>
    : <Tree data={ familyData } />;

  return (
    <div className="app-content tree">
      <h1 className="app-content__title">{ t('sections.family-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default FamilyTreePage;
