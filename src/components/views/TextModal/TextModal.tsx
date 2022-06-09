import React, { FC, useState } from 'react'
import SelectLayout from '../../layouts/SelectLayout'
import TextAreaLayout from '../../layouts/TextAreaLayout'
import ModalLayout from '../../layouts/ModalLayout'

interface TextModalProps {
  changeModalStatus: () => void
  onSubmit: (data: any) => void
  type?: string
  initState: {
    text?: string
    bgColor?: string
    columnCount?: string
  }
}

const TextModal: FC<TextModalProps> = ({
  changeModalStatus,
  onSubmit,
  initState,
  type
}) => {
  const [data, setData] = useState(initState)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.currentTarget
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <ModalLayout changeModalStatus={changeModalStatus}>
      {type === 'text block' && (
        <>
          <SelectLayout
            placeholder="Choose column count"
            name="columnCount"
            values={['1', '2', '3']}
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
            values={['white', 'orange', 'amber', 'lime', 'emerald']}
            action={handleSelectChange}
            data={data}
          />
        </>
      )}
      <button
        onClick={() => {
          onSubmit(data)
          setData(initState)
          changeModalStatus()
        }}
        className="rounded-lg p-2 bg-sky-400"
      >
        Submit
      </button>
    </ModalLayout>
  )
}

export default TextModal
