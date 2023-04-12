import { Flex } from '@chakra-ui/react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
    return (
        <Flex w='100%' h='100vh' bgColor={'#121D33'} justify='center' align={'center'} pos='fixed'>
            <StyledProgress>
                <div></div>
            </StyledProgress>
        </Flex>
    )
}

const move = keyframes`
    from {
        left: 0;
    }
    to {
        left: 80%;
    }
`

const StyledProgress = styled.div`
    width: 500px;
    height: 5px;
    background-color: rgba(219, 217, 253, 0.534);
    position: relative;
    div {
        width: 100px;
        height: 5px;
        background-color: rgb(75, 68, 178);
        position: absolute;
        left: 0;
        animation: ${move} infinite 1.5s linear;
    }
`



export default Loading