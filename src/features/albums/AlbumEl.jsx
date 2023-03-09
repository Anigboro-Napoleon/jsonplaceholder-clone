import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useGlobalContext } from "../../context"
import { deleteAlbums, fetchAlbums } from "./albumSlice"
import { RiDeleteBin2Fill } from 'react-icons/ri'
import ReactPaginate from "react-paginate"
import { AlbumModal, EditAlbumModal} from "../../components/Modal"


const AlbumEl = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [])

    const { album, changePage, previous, next, usersPerPage, pagesVisited, albumPageCount } = useGlobalContext()

    return (
        <Box pt='80px'>
            <Text fontSize={{ base: '2rem', lg: '3.75rem' }} className='fira'>
                Albums
                <Text as={'span'} fontSize='16px' ml='10px'>[{album.albums.length}]</Text>
            </Text>
            <AlbumModal />
            {album.loading && <div>Loading...</div>}
            {!album.loading && album.error ? <div>Error: {album.error}</div> : null}
            {
                !album.loading && album.albums.length
                    ? (
                        <Box maxW={'95%'} mx='auto' mb='30px'>
                            <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap='20px'>
                                {
                                    album.albums
                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                        .map(album => (
                                            <Flex 
                                                key={album.id} flexDir='column' align={'center'} p='10px' 
                                                boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'}
                                            >
                                                <Text>{album.id}</Text>
                                                <Text>{album.title}</Text>
                                                <Flex gap='50px'>
                                                    <Text 
                                                        bgColor={'rgb(75, 68, 178)'} fontSize={'1.1rem'}
                                                        cursor='pointer' color='#fff' p='15px' borderRadius={'50px'}
                                                        onClick={() => dispatch(deleteAlbums(album.id))}
                                                    >
                                                        <RiDeleteBin2Fill  />
                                                    </Text>
                                                    <EditAlbumModal />
                                                </Flex>
                                            </Flex>
                                        ))
                                }
                            </Grid>
                            <ReactPaginate
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={albumPageCount}
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

export default AlbumEl