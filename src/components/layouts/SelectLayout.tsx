import { FC, useState } from "react";
import { SelectLayoutProps } from "../../interfaces";

const SelectLayout: FC<SelectLayoutProps> = ({
  name,
  values,
  action,
  placeholder,
  data,
}) => {
  const [currentValues] = useState<string[]>(Object.values(data))

  return (
    <select
      name={name}
      onChange={action}
      className="mb-4 border-2 border-sky-400 rounded-md"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {values.map((value) => (
        <option
          key={value}
          value={value}
          selected={currentValues.includes(value)}
        >
          {value}
        </option>
      ))}
    </select>
  )
}

export default SelectLayout