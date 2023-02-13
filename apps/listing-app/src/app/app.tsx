import styled from 'styled-components'
import Home from './views/home'
import Form from './views/form'

const StyledApp = styled.div``

export function App() {
  return (
    <StyledApp>
      <Home  />
      <Form />
    </StyledApp>
  )
}

export default App
