import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFamilyTree } from '../../../store/reducer';
import { useTranslation } from 'react-i18next';
import Spinner from '../../spinner';

function FamilyTreePage() {
  const familyData = useSelector(state => state.family.tree);
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  let family = null;

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchFamilyTree());
  }, [dispatch]);

  if (familyData?.length) {
    family = familyData.map((item, i) => {
      return (
        <div key={ i }>
          { item.first_name }
        </div>
      )
    });
  }

  const content = isLoading ?
    <Spinner /> :
    family;

  return (
    <div className="app-content">
      <h1 className="app-content__title">{ t('sections.tree.header') }</h1>
      { content }
    </div>
  )
}

export default FamilyTreePage;
