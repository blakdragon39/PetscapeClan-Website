import styled from 'styled-components'
import { keyframes } from 'styled-components'
import theme from '../theme'

const busyAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Busy = styled.div`
    border: ${props => props.button ? '2px' : '4px'} solid ${theme.colorOnPrimary};
    border-top: ${props => props.button ? '2px' : '4px'} solid ${theme.colorSecondary};
    border-radius: 50%; 
    width: ${props => props.button ? '12px' : '28px'};
    height: ${props => props.button ? '12px' : '28px'};
    animation: ${busyAnimation} 1.5s linear infinite;
`

export default Busy
