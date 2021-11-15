import { Filters } from "./includes/constants";

const FilterSection = (props) => {
  const { setGenderOption } = props;
  return (
    <div>
      <div style={{ width: "150px" }}>
        <p>Fileters</p>
        {Filters.map((el, idx) => {
          return (
            <>
              <input
                type="radio"
                id={el.value}
                name="filter"
                value={el.value}
                onChange={(e) => setGenderOption(e.target.value)}
              />
              <label for={el.value}>{el.name}</label>
              <br></br>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
