import { useEffect, useState } from "react";
import axios from "axios";

import FilterSection from "./Filters";
import ItemsSection from "./Items";

const Hero = () => {
  const [originalList, setOriginalList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genederOption, setGenderOption] = useState("");

  useEffect(() => {
    callProductApi();
  }, []);

  useEffect(() => {
    const newItemList =
      originalList &&
      originalList.length > 0 &&
      originalList.filter((el) => el.gender === genederOption);
    setItemList(newItemList);
  }, [genederOption]);

  const callProductApi = async () => {
    const res = await axios.get(`https://demo7242716.mockable.io/products`);
    console.log(res.data.products);
    if (res && res.data && res.data.products) {
      setOriginalList(res.data.products);
      setItemList(res.data.products);
      setLoading(false);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FilterSection
          genederOption={genederOption}
          setGenderOption={setGenderOption}
        />
        <ItemsSection itemList={itemList} loading={loading} />
      </div>
    </>
  );
};
export default Hero;
