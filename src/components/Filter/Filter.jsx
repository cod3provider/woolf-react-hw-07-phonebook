import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../store/selectors';
import { setFilter } from '../../store/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const {value} = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleFilter}
          placeholder="Search"
        />
      </label>
    </>
  );
};

export default Filter;
