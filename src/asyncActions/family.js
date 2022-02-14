import { addFamily } from '../store/reducer';

export const fetchFamily = () => {
  return function(dispatch) {
    fetch('http://localhost:3004/family')
      .then(response => response.json())
      .then(json => dispatch(addFamily(json)));
  }
}