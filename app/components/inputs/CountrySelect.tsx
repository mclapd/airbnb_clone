"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";
import Image from "next/image";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>
              {option.value === "AU" ||
              option.value === "US" ||
              option.value === "DE" ||
              option.value === "IT" ||
              option.value === "JP" ||
              option.value === "CA" ||
              option.value === "NZ" ||
              option.value === "KR" ? (
                <Image
                  className=""
                  height="25"
                  width="25"
                  alt="Country flag"
                  src={`/images/country_flags/${option.value.toLowerCase()}.svg`}
                />
              ) : (
                <div>{option.flag}</div>
              )}
            </div>
            <div>
              {option.label},{" "}
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
