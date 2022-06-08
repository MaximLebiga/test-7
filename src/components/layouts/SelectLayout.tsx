import { FC } from "react";

interface SelectLayoutProps {
  name: string
  values: string[]
  action: (event: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string
}

const SelectLayout: FC<SelectLayoutProps> = ({
  name,
  values,
  action,
  placeholder
}) => {
  return (
    <select
      name={name}
      onChange={action}
      className="mb-4 border-2 border-sky-400 rounded-md"
    >
      <option value='' disabled>{placeholder}</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

export default SelectLayout