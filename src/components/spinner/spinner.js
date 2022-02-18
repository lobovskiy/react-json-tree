import './spinner.scss';

function Spinner() {
  return (
    <div className="app-spinner">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner;