import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyRoots } from '../../store/reducer';
import { useTranslation } from 'react-i18next';
import Tree from '../../components/tree';
import Spinner from '../../components/spinner';
import './family-tree-async-page.scss';

function FamilyTreeAsyncPage() {
  const familyData = useSelector(state => state.family.asyncTree);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyRoots());
  }, [dispatch]);

  const tree = isLoading
    ? <div className="async-tree-spinner"><Spinner /></div>
    : <Tree data={ familyData } async={ true } />;

  return (
    <div className="app-content tree">
      <h1 className="app-content__title">{ t('sections.family-async-tree.header') }</h1>
      { tree }
    </div>
  )
}

export default FamilyTreeAsyncPage;
