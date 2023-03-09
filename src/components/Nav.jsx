import { Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Flex 
            minH={'64px'} bgColor='#121D33' p='24px' 
            justify={'space-between'} align='center' boxShadow={'0 0 8px 0 #353535'}
        >
            <Link to='/' color='#fff' fontSize={'1.5rem'} className='fira nav' fontWeight={'400'}>R,R & J</Link>
            <Flex color='#fff' fontSize={'1rem'} className='fira' fontWeight={'400'} gap='80px'>
                <Link to={'/albums'}>Albums</Link>
                <Link to={'/comments'}>Comments</Link>
                <Link to={'/photos'}>Photos</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/todos'>Todos</Link>
                <Link to='/users'>Users</Link>
            </Flex>
            <Button 
                className='fira' color={'#fff'} bgColor={'rgb(75, 68, 178)'}
                fontWeight='500' fontSize={'.875rem'} _hover={{ opacity: 1 }}
            >
                <Link to='https://github.com/Anigboro-Napoleon' target={'_blank'}>
                    GITHUB
                </Link>
            </Button>
        </Flex>
    )
}

export default Nav