import styled from 'styled-components'
import theme from '../../theme'

const Button = styled.button`
    background-color: ${theme.colorOnPrimary};
    text-color: ${theme.colorPrimary}
    height: 60px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border: 1px solid ${theme.colorSecondary};
    border-radius: 4px;
    
    &:hover {
        border-width: 2px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 15px;
        padding-right: 15px;
    }
`

export default Button
