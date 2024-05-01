import { useDispatch } from "react-redux"; 
import { changeFilter } from "../../redux/filters/slice"; 

import css from "../SearchBox/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    // console.log(event.target.value);
    dispatch(changeFilter(event.target.value));
  };

  return (
    <section>
      <h4>Find contacts by name</h4>
      <input type="text" placeholder="Search..." onChange={onChangeFilter} />
    </section>
  );
};

export default SearchBox;
