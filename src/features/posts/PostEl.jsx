import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deletePosts, fetchPosts } from './postSlice'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import ReactPaginate from 'react-paginate'
import { useGlobalContext } from '../../context'
import { EditPostModal, PostModal } from '../../components/Modal'

const PostEl = () => {
    const dispatch = useDispatch()
    
    const { pagesVisited, postPageCount, changePage, previous, next, post, usersPerPage } = useGlobalContext()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    
    return (
        <Box pt='80px'>
            <Text fontSize={{ base: '2rem', lg: '3.75rem' }} className='fira'>
                Posts
                <Text as={'span'} fontSize='16px' ml='10px'>[{post.posts.length}]</Text>
            </Text>
            <PostModal />
            {post.loading && <div>Loading...</div>}                
            {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
            {
                !post.loading && post.posts.length
                    ? (
                        <Box maxW={'100%'} mx='30px' mb='30px'>
                            <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap='20px'>
                                {post.posts
                                    .slice(pagesVisited, pagesVisited + usersPerPage)
                                    .map((post) => (
                                    <Flex 
                                        key={post.id} align='flex-start' p='10px' borderRadius={'4px'}
                                        boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'}
                                    >
                                        <Text
                                            bgColor={'transparent'} fontSize={'1.4rem'}
                                            color='rgb(75, 68, 178)' cursor={'pointer'}
                                            onClick={() => dispatch(deletePosts(post.id))}
                                        >
                                            <RiDeleteBin2Fill  />
                                        </Text>
                                        <Box>
                                            <Text>id: {post.id}</Text>
                                            <Text>UserId: {post.userId}</Text>
                                            <Text>Title: {post.title}</Text>
                                            <Text>Body: {post.body}</Text>
                                        </Box>
                                        <EditPostModal />
                                    </Flex>
                                ))}
                            </Grid>
                            <ReactPaginate 
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={postPageCount}
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

export default PostEl