import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyRoots } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';
import './tree-async-page.scss';

function TreeAsyncPage() {
  const familyData = useSelector(state => state.family.treeAsync);
  const isLoading = useSelector(state => state.family.treeAsyncLoading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyRoots());
  }, [dispatch]);

  const tree = isLoading
    ? <div className="family-tree-async__spinner"><Spinner /></div>
    : <Tree data={ familyData } async={ true } />;

  return (
    <div className="family-tree-async">
      <h1 className="family-tree-async__title">{ t('sections.family-async-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default TreeAsyncPage;
