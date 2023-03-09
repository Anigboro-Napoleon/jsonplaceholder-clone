import { Box, Text, Flex, Grid, Img } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { bodyEl } from './data'

const Body = () => {
    return (
        <>
            <Box pt='80px'>
                <Text className='fira' fontSize={'2rem'}>
                    JSON Placeholder: React Redux
                </Text>
            </Box>
            <Box maxW={'1100px'} mx='auto' my='15px'>
                <Grid gridTemplateColumns={'repeat(3, 1fr)'} gap='30px' cursor={'pointer'}>
                {
                    bodyEl.map(({ id, title, caption, img, link }) => (
                        <Link to={link}>
                            <Flex
                                key={id} w='350px' h='200px' borderRadius={'4px'} flexDir='column' align={'center'}
                                boxShadow='0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
                                color={'brown'} py='5px'
                            >
                                <Text className='fira' color='#000' fontSize={'2.125rem'} borderBottom='2px solid #61dafb'>
                                    {title}
                                </Text>
                                <Img src={img} alt={caption} w='150px' />
                                <Text className='fira' color='#000' fontSize={'1rem'} borderBottom='1px solid #61dafb'>
                                    {caption}
                                </Text>
                            </Flex>
                        </Link>
                    ))
                }
                </Grid>
            </Box>
        </>
    )
}

export default Body