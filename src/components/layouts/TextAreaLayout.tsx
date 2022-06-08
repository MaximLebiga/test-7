import React, { FC } from "react";

interface TextAreaLayoutProps {
  text: string,
  action: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
}

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