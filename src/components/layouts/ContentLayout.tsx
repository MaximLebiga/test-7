import { FC, ReactNode } from 'react'

interface ContentLayoutProps {
  children?: ReactNode
  action: () => void
  text: string
}

const ContentLayout: FC<ContentLayoutProps> = ({ children, action, text }) => {
  return (
    <div className="pt-4 pb-4">
      <div className="pt-4 pb-4">
        <button onClick={action} className="rounded-lg p-2 bg-sky-400">
          {text}
        </button>
      </div>
      <div className="grid place-items-center">{children}</div>
    </div>
  )
}

export default ContentLayout