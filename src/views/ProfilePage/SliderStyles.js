import styled from 'styled-components'

export const RangeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledRange = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 15px;
`

export const StyledRangeProgress = styled.div`
    border-radius: 3px;
    position: absolute;
    height: 100%;
    background: #823eb7;
`
export const StyledThumb = styled.div`
  width: 10px;
  height: 25px;
  border-radius: 3px;
  position: relative;
  top: -5px;
  opacity: 0.5;
  background: #823eb7;
  cursor: pointer;
`;
