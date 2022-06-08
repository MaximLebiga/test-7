import { FC, useState } from "react";
import TextColumn from "../TextColumn/TextColumn";
import {v4 as uuidv4} from "uuid"
import TextModal from "../TextModal/TextModal";

const TextBlock: FC = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [currentData, setCurrentData] = useState({ columnCount: '1' })
  const [columnsId, setColumnsId] = useState<Array<string>>([uuidv4()])


  const handleSubmitButtonClick = (data: { columnCount: string }) => {
    const newColumnCount = parseInt(data.columnCount)
    const oldColumnCount = parseInt(currentData.columnCount)
    if (newColumnCount < oldColumnCount) {
      setColumnsId((prevState) => {
        const array = [...prevState]
        array.splice(newColumnCount, oldColumnCount - newColumnCount)
        return array
      }
      )
    }

    if (newColumnCount > oldColumnCount) {
      setColumnsId((prevState) => {
        const array = [...prevState]
        for (let step = oldColumnCount; step < newColumnCount; step++) {
          array.push(uuidv4())
        }
        return array
      })
    }
      setCurrentData(data)
  }

  return (
    <div className="max-h-64">
      <button
        type="button"
        onClick={() => {
          setModalStatus(!modalStatus)
        }}
        className="hover:text-sky-400 mb-2"
      >
        Change column count
      </button>
      <div
        className={`grid gap-2 max-w-xs w-full ${`grid-cols-${currentData.columnCount}`}`}
      >
        {columnsId.length > 0 && columnsId.map((id) => <TextColumn key={id} />)}
      </div>
      {modalStatus && (
        <TextModal
          changeModalStatus={() => {
            setModalStatus(!modalStatus)
          }}
          onSubmit={handleSubmitButtonClick}
          initState={currentData}
          type="text block"
        />
      )}
    </div>
  )
}

export default TextBlock