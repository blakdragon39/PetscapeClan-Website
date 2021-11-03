import styled from 'styled-components'
import theme from '../../theme'

const Container = styled.div`
    color: ${theme.colorPrimary}; 
    background-color: ${theme.colorOnPrimary};
    border-radius: 16px;
    padding: 24px;
    width: ${props => props.width ? `${props.width}px` : null}
`

export default Container
