import styled from 'styled-components'
import { keyframes } from 'styled-components'
import theme from '../theme'

const busyAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Busy = styled.div`
    border: 4px solid ${theme.colorOnPrimary};
    border-top: 4px solid ${theme.colorSecondary};
    border-radius: 50%; 
    width: 28px;
    height: 28px;
    animation: ${busyAnimation} 1.5s linear infinite;
`

export default Busy
