import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Spinner from '../spinner';
import Table from '../table';

function FamilyTablePage() {
  const familyData = useSelector(state => state.family.table);
  const isLoading = useSelector(state => state.loading);
  const { t } = useTranslation();
  console.log(t)

  if (isLoading) {
    return (
      <div className="app-spinner">
        <Spinner/>
      </div>
    )
  } else {

    return (
      <div className="app-content">
        <Table data={familyData} columns={['first_name', 'last_name', 'gender']} header = {t('Table header')} />
      </div>
    )
  }
}

export default FamilyTablePage;