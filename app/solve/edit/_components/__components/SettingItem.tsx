import { MouseEventHandler } from 'react'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IPropsUI {
  mode: string
  customClasses: string
  isActive: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}
const SettingItem: React.FC<IPropsUI> = ({ mode, customClasses, isActive, onClick }) => {
  return (
    <StyleWrapper
      data-testid="mode_button"
      onClick={onClick}
      className={`${
        isActive ? 'shadow-red-500/100 text-red-500 underline' : customClasses
      }  underline-offset-4 decoration-2 rounded-lg p-4 shadow-lg border-current`}>
      <div className="text-2xl font-extrabold text-center">{mode}</div>
    </StyleWrapper>
  )
}

export default SettingItem
