import { FC } from "react";
import { TextAreaLayoutProps } from "../../interfaces";

const TextAreaLayout: FC<TextAreaLayoutProps> = ({
  text,
  action,
  value,
  name
}) => {
  return (
    <textarea
      placeholder={text}
      onChange={action}
      name={name}
      value={value}
      className="mb-4 border-2 border-sky-400 rounded-md h-auto resize-none p-2"
      required
      rows={4}
    />
  )
}

export default TextAreaLayout