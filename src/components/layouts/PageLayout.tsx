import { FC } from "react";
import { PageLayoutProps } from "../../interfaces";

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-3 auto-rows-min auto-rows-max border-2 rounded border-slate-400 max-w-5xl w-full p-4 min-h-screen h-full">
      {children}
    </div>
  )
}

export default PageLayout