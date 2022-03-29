import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTree } from '../../store-family/action-creators';
import { useTranslation } from 'react-i18next';
import { Tree, Spinner } from '../../components';
import './tree-page.scss';

function TreePage() {
  const { members, isLoading } = useSelector(state => state.tree);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchTree());
  }, [dispatch]);

  const spinner = <div className="family-tree__spinner"><Spinner /></div>;

  return (
    <div className="family-tree">
      <h1 className="family-tree__title">{ t('sections.family-tree.header') }</h1>
      { isLoading && spinner }
      <Tree data={ members } />
    </div>
  )
}

export default TreePage;
