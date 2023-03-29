import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import useSubmitEquation from '@/app/utils/hooks/EquationHooks/useSubmitEquation'

const MobileEnterButton = () => {
  const { submitEquation } = useSubmitEquation({})
  return (
    <StyledWrapper
      className="col-span-3 text-rose-500 shadow-rose-500/100 shadow-md border-current sm:p-2 transition-all duration-300 bg-gradient-to-tr from-transparent via-transparent active:to-rose-500 to-rose-800"
      onClick={() => submitEquation({ userId: null })}>
      <span className="text-white font-extrabold text-2xl">Skip</span>
    </StyledWrapper>
  )
}

export default MobileEnterButton
