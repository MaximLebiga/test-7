import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface ModalLayoutProps {
  children: ReactNode
  changeModalStatus: () => void
}

const modalRoot = document.getElementById('modal-root') as HTMLElement

const ModalLayout: FC<ModalLayoutProps> = ({ children, changeModalStatus }) => {


  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      changeModalStatus()
    }
  }

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black-1 z-50"
    >
      <div className="flex flex-col items-center bg-teal-400 p-5 rounded-xl">
        <button
          onClick={closeModal}
          className="self-end mb-4 rounded-full pl-2 pr-2 bg-sky-400"
        >
          X
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default ModalLayout
