import { MouseEventHandler } from 'react'

interface IPropsUI {
  mode: string
  customClasses: string
  isActive: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}
const SettingItem: React.FC<IPropsUI> = ({ mode, customClasses, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? 'shadow-red-500/100 text-red-500 decoration-2 underline' : customClasses
      }  select-none cursor-pointer flex items-center underline-offset-4 decoration-2 justify-center flex-1 rounded-lg p-4 md:p-8 transition-all bg-[#333333]  shadow-lg border-2 border-current hover:border-current`}>
      <div className="text-2xl font-extrabold text-center">{mode}</div>
    </div>
  )
}

export default SettingItem
