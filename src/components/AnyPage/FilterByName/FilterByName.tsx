import React, { FC } from "react";
import {
  FieldValues,
  useFormContext,
  Controller,
  useForm,
} from "react-hook-form";
import { useFilterByNameStyle } from "./style";

const FilterByName: FC = () => {
  const { control, handleSubmit, setValue, watch } = useForm();

  const onSubmit = () => {
    const sort = watch("sort");
    console.log(sort);
  };

  return (
    <FilterByNameWrapperSC onSubmit={handleSubmit(onSubmit)}>
      <FilterByNameBlockSC>
        <Controller
          control={control}
          name="sort"
          render={({ field }) => <input {...field} />}
        />
      </FilterByNameBlockSC>
      <button type="submit">Search</button>
    </FilterByNameWrapperSC>
  );
};

const { FilterByNameWrapperSC, FilterByNameBlockSC } = useFilterByNameStyle();
export default React.memo(FilterByName);
