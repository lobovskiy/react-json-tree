import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRoots } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import { Tree, Spinner } from '../../components';
import './tree-async-page.scss';

function TreeAsyncPage() {
  const { members, isLoading } = useSelector(state => state.treeAsync);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchRoots());
  }, [dispatch]);

  const spinner = <div className="family-tree-async__spinner"><Spinner /></div>;

  return (
    <div className="family-tree-async">
      <h1 className="family-tree-async__title">{ t('sections.family-async-tree.header') }</h1>
      { isLoading && spinner }
      <Tree nodes={ members } async={ true } />
    </div>
  )
}

export default TreeAsyncPage;
