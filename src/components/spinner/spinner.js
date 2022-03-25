import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import './spinner.scss';

function Spinner({ size }) {
  return (
    <div
      className={ classNames(
        "lds-ellipsis",
        { [`lds-ellipsis_${size}`]: Object.values(Spinner.sizes).includes(size) },
      ) }
    ><div></div><div></div><div></div><div></div></div>
  )
}

Spinner.sizes = { S: 'small' };

Spinner.propTypes = {
  size: PropTypes.oneOf(Object.values(Spinner.sizes))
};

export default Spinner;
