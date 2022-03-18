import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRoots } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';
import './family-tree-async-page.scss';

function FamilyTreeAsyncPage() {
  const { members, isLoading } = useSelector(state => state.treeAsync);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const tree = isLoading
    ? <div className="async-tree-spinner"><Spinner /></div>
    : <Tree data={ members } async={ true } />;

  return (
    <div className="app-content tree">
      <h1 className="app-content__title">{ t('sections.family-async-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default FamilyTreeAsyncPage;
