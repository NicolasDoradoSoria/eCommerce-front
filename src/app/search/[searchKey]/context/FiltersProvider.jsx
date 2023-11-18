import React, { createContext, useState } from "react";
export const FiltersContext = createContext();
import Products from "@/components/products/Products"
import FilterOptions from "../components/FilterOptions";

const FiltersProvider = ({ params }) => {

  const [sortType, setSortType] = useState("")
  const [sortOrder, setSortOrder] = useState("")


  return (
    <FiltersContext.Provider
      value={{
        setSortType,
        setSortOrder
      }}
    >
      <div className="m-1 md:grid grid-cols-6">
      <div className="col-span-1 w-full">
          <FilterOptions searchKey={params.searchKey}></FilterOptions>
      </div>

      <div className="col-span-5 w-full">
          <Products searchKey={params.searchKey} sortType={sortType} sortOrder={sortOrder}></Products>
      </div>
    </div>
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;