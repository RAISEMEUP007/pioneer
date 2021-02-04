import styled from 'styled-components'

export const Page = styled.div`
  display: grid;
  grid-template-columns: 226px 1fr 0;
  grid-template-rows: auto;
  grid-template-areas:
    'navbar page .'
    'navbar page .';
  grid-column-gap: 24px;
  width: 98vw;
  height: 100%;
  min-height: 100vh;
`
