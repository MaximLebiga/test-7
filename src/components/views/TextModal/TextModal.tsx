import React, { FC, useState } from 'react'
import SelectLayout from '../../layouts/SelectLayout'
import TextAreaLayout from '../../layouts/TextAreaLayout'
import ModalLayout from '../../layouts/ModalLayout'
import { InitState, TextModalProps } from '../../../interfaces'
import { colors, columns } from '../../../mockData'

const TextModal: FC<TextModalProps> = ({
  changeModalStatus,
  onSubmit,
  initState,
  type
}) => {
  const [data, setData] = useState<InitState>(initState)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.currentTarget
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleButtonSubmitClick = () => {
    onSubmit(data)
    setData(initState)
    changeModalStatus()
  }

  return (
    <ModalLayout changeModalStatus={changeModalStatus}>
      {type === 'text block' && (
        <>
          <SelectLayout
            placeholder="Choose column count"
            name="columnCount"
            values={columns}
            action={handleSelectChange}
            data={data}
          />
        </>
      )}
      {type === 'column' && (
        <>
          <TextAreaLayout
            text="Text"
            name="text"
            value={data.text || ''}
            action={handleInputChange}
          />
          <SelectLayout
            placeholder="Choose bg color"
            name="bgColor"
            values={colors}
            action={handleSelectChange}
            data={data}
          />
        </>
      )}
      <button
        onClick={handleButtonSubmitClick}
        className="rounded-lg p-2 bg-sky-400"
      >
        Submit
      </button>
    </ModalLayout>
  )
}

export default TextModal
