import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useGlobalContext } from "../../context"
import { deleteComments, fetchComments } from "./commentSlice"
import { RiDeleteBin2Fill } from 'react-icons/ri'
import ReactPaginate from "react-paginate"
import { CommentModal, EditCommentModal } from "../../components/Modal"

const CommentEl = () => {
    const { changePage, previous, next, usersPerPage, comment, commentPageCount, pagesVisited } = useGlobalContext()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchComments())
    }, [])
    // const deleteComments = () => {
    //     dispatch(deleteComments())
    // }
    // useEffect(() => {
    //     dispatch(deleteComments())
    // }, [deleteComments])
    
    return (
        <Box pt='80px'>
            <Text fontSize={{ base: '2rem', lg: '3.75rem' }} className='fira'>
                Comments
                <Text as={'span'} fontSize='16px' ml='10px'>[{comment.comments.length}]</Text>
            </Text>
            <CommentModal />
            {comment.loading && <div>Loading...</div>}
            {!comment.loading && comment.error ? <div>Error: {comment.error}</div> : null}
            {
                !comment.loading && comment.comments.length
                    ? (
                        <Box maxW={'95%'} mx='auto' mb='30px'>
                            <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap='20px'>
                                {
                                    comment.comments
                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                        .map(comment => (
                                        <Flex
                                            key={comment.id} borderRadius={'4px'} overflowX='none'
                                            align='flex-start' overflowY={'scroll'} p='10px' 
                                            boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'} justify='center'
                                        >
                                            <Text 
                                            bgColor={'transparent'} fontSize={'1.4rem'} cursor='pointer'
                                            color='rgb(75, 68, 178)'
                                            onClick={() => dispatch(deleteComments(comment.id))}
                                            >
                                                <RiDeleteBin2Fill  />
                                            </Text>
                                            <Flex flexDir={'column'} align='center' gap={'5px'}>
                                                <Text>{comment.id}</Text>
                                                <Text>{comment.name}</Text>
                                                <Text>({comment.email})</Text>
                                                <Text>Comment: {comment.body}</Text>
                                            </Flex>
                                            <EditCommentModal />
                                        </Flex>
                                    ))
                                }
                            </Grid>
                            <ReactPaginate
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={commentPageCount}
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

export default CommentEl