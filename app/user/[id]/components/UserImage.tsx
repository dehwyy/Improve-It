interface IProps {
  image?: string | null
  name?: string | null
}
const UserImage = ({ name, image }: IProps) => {
  return (
    <div className="block-neo-style self-center uusm:min-w-[200px] uusm:min-h-[200px] min-w-[250px] min-h-[250px] bg-[#333333]">
      <img
        className="rounded-xl uusm:w-[200px] uusm:h-[200px] w-[250px] h-[250px]"
        src={image || '/images/profile_image.jpg'}
        alt={name || 'image'}
      />
    </div>
  )
}

export default UserImage
