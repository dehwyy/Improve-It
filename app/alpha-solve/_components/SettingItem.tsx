interface IPropsUI {
  mode: string
  customClasses: string
}
const SettingItem: React.FC<IPropsUI> = ({ mode, customClasses }) => {
  return (
    <div
      className={`${customClasses} cursor-pointer flex items-center justify-center flex-1 rounded-lg p-4 md:p-8 transition-all bg-[#333333]  shadow-lg border-2 border-transparent hover:border-current`}>
      <div className="text-2xl font-extrabold text-center">{mode}</div>
    </div>
  )
}

export default SettingItem
