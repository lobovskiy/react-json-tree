import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTree } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import { Tree, Spinner } from '../../components';
import './tree-page.scss';

function TreePage() {
  const familyData = useSelector(state => state.family.tree);
  const isLoading = useSelector(state => state.family.treeLoading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTree());
  }, [dispatch]);

  const tree = isLoading ?
  <div className="family-tree__spinner"><Spinner /></div> :
    <Tree data={ familyData } />;

  return (
    <div className="family-tree">
      <h1 className="family-tree__title">{ t('sections.family-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default TreePage;
