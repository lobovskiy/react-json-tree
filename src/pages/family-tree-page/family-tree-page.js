import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTree } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';
import './family-tree-page.scss';

function FamilyTreePage() {
  const { members, isLoading } = useSelector(state => state.tree);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTree());
  }, [dispatch]);

  const tree = isLoading
    ? <div className="tree-spinner"><Spinner /></div>
    : <Tree data={ members } />;

  return (
    <div className="app-content tree">
      <h1 className="app-content__title">{ t('sections.family-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default FamilyTreePage;
