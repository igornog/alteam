import React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100%;
  background-origin: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form: React.FunctionComponent = () => {
  return (
    <StyledBackground>
      <p>test</p>
    </StyledBackground>
  )
}

export default Form

