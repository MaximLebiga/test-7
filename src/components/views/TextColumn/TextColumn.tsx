import { FC, useState } from "react";
import { changeBgColor } from '../../../utils'
import TextModal from '../TextModal/TextModal'

const TextColumn: FC = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [currentData, setCurrentData] = useState({ text: '', bgColor: 'white' })

  const handleSubmitButtonClick = (data: { text: string; bgColor: string }) => {
    setCurrentData(data)
  }

  return (
    <>
      <div
        className={`p-2 border-2 rounded-lg border-slate-400 ${changeBgColor(
          currentData.bgColor
        )}`}
      >
        <p className="break-all mb-2">
          {currentData.text ? currentData.text : 'Empty'}
        </p>
        <button
          type="button"
          onClick={() => {
            setModalStatus(!modalStatus)
          }}
          className="rounded-lg border-2 pr-2 pl-2 border-slate-400 hover:border-sky-400"
        >
          Edit
        </button>
      </div>
      {modalStatus && (
        <TextModal
          changeModalStatus={() => {
            setModalStatus(!modalStatus)
          }}
          onSubmit={handleSubmitButtonClick}
          initState={currentData}
          type="column"
        />
      )}
    </>
  )
}

export default TextColumn