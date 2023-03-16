import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'

const SuccessAnimationWrapper = styled.div`
  .checkmark-animated {
    opacity: 0;
  }
  .green-fill {
    stroke: #4bb71b;
    box-shadow: inset 0px 0px 0px #4bb71b;
  }
  
  .red-fill {
    stroke: red;
    box-shadow: inset 0px 0px 0px red;
  }
  .checkmark {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    stroke-width: 4;
    stroke-miterlimit: 10;
    animation: fill .2s ease-in-out .2s forwards, scale .2s ease-in-out .2s both, scaleIn 0.2s ease-in-out .8s;
    position:relative;
    top: 5px;
    right: 5px;
    margin: 0 auto;
  }
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 4;
    stroke-miterlimit: 10;
    fill: #333333;
    animation: stroke 0.2s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;
  }
  
  @keyframes scaleIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } 
  }
  

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%, 100% {
      transform: none;
    }

    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #4bb`

interface IProps {
  isSuccess: boolean
}

const SuccessAnimation: FC<IProps> = ({ isSuccess }) => {
  const [isAnimated, setAnimated] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAnimated(true)
    }, 800)
  })

  return (
    <SuccessAnimationWrapper>
      <svg className={`${isAnimated && 'checkmark-animated'} checkmark`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke={isSuccess ? '#4bb71b' : 'red'} />
        {isSuccess ? (
          <path className="checkmark__check green-fill" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        ) : (
          <path className="checkmark__check red-fill" fill="none" d="M12 12 40 40 M40 12 12 40" />
        )}
      </svg>
    </SuccessAnimationWrapper>
  )
}

export default SuccessAnimation
