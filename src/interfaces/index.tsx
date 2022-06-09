import { ReactNode } from "react"

export type InitState = {
  columnCount?: string
  text?: string
  bgColor?: string
}

export interface TextModalProps {
  changeModalStatus: () => void
  onSubmit: (data: InitState) => void
  type?: string
  initState: InitState
}

export interface TextAreaLayoutProps {
  text: string
  action: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
}

export interface SelectLayoutProps {
  name: string
  values: string[]
  action: (event: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string
  data: InitState
}

export interface PageLayoutProps {
  children?: ReactNode
}

export interface ModalLayoutProps {
  children: ReactNode
  changeModalStatus: () => void
}

export interface ContentLayoutProps {
  children?: ReactNode
  action: () => void
  text: string
}
