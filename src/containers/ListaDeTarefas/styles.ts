import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px;
  height: 100vh;
  // TODO CONTEÚDO QUE ULTRAPASSAR O VH DE 100 VAI SER ROLADO DENTRO
  // DO CONTAINER NO EIXO Y (VERTICAL)
  overflow-y: scroll;
`
