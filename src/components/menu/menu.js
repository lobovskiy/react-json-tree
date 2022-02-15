import { useDispatch } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { fetchFamily } from '../../store/reducer';

function Menu({ t }) {
  const dispatch = useDispatch();
  
  return (
    <>
      <button onClick={() => dispatch(fetchFamily())}>{t('Menu button')}</button>
    </>
  );
}

export default withNamespaces()(Menu);