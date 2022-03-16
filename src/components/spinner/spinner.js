import classNames from 'classnames/bind';
import './spinner.scss';

function Spinner({ size }) {
  return (
      <div
        className={ classNames(
          "lds-ellipsis",
          { "lds-ellipsis_small": size === 'small' },
        ) }
      ><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner;
