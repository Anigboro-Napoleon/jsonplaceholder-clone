import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useGlobalContext } from "../../context"
import { deletePhotos, fetchPhotos } from "./photoSlice"
import { RiDeleteBin2Fill } from 'react-icons/ri'
import ReactPaginate from "react-paginate"
import { EditPhotoModal, PhotoModal } from "../../components/Modal"

const PhotoEl = () => {
    const { photo, pagesVisited, changePage, previous, next, usersPerPage, photoPageCount } = useGlobalContext()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPhotos())
    }, [])
    
    return (
        <Box pt='80px'>
            <Text fontSize='3.75rem' className='fira'>
                Photos
                <Text as={'span'} fontSize='16px' ml='10px'>[{photo.photos.length}]</Text>
            </Text>
            <PhotoModal />
            {photo.loading && <div>Loading...</div>}
            {!photo.loading && photo.error ? <div>Error: {photo.error}</div> : null}
            {
                !photo.loading && photo.photos.length
                    ? (
                        <Box maxW={'95%'} mx='auto' mb='30px'>
                            <Grid gridTemplateColumns={'repeat(4, 1fr)'} gap='20px'>
                                {
                                    photo.photos
                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                        .map(photo => (
                                            <Flex
                                                key={photo.id} borderRadius={'4px'} overflowX='none'
                                                align='flex-start' p='10px' 
                                                boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'} justify='center'
                                            >
                                                <Text 
                                                bgColor={'transparent'} fontSize={'1.4rem'} cursor='pointer'
                                                color='rgb(75, 68, 178)' 
                                                onClick={() => dispatch(deletePhotos(photo.id))}
                                                >
                                                    <RiDeleteBin2Fill  />
                                                </Text>
                                                <Flex flexDir={'column'} align='center' gap={'5px'}>
                                                    <Text>{photo.id}</Text>
                                                    <Text>{photo.title}</Text>
                                                    <Img src={photo.url} alt={photo.title} w='250px' h='250px' />
                                                </Flex>
                                                <EditPhotoModal />
                                            </Flex>
                                        ))
                                }
                            </Grid>
                            <ReactPaginate
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={photoPageCount}
                                onPageChange={changePage}
                                containerClassName={'paginationBtn'}
                                previousLinkClassName='previousBtn'
                                nextLinkClassName='nextBtn'
                                disabledClassName='paginationDisabled'
                                activeClassName='paginationActive'
                            />
                        </Box>
                    )
                    : null
            }
        </Box>
    )
}

export default PhotoEl