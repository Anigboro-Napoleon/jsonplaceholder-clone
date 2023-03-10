import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../context";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { deleteUsers, fetchUsers } from "./userSlice";
import { RiDeleteBin2Fill } from 'react-icons/ri'
import ReactPaginate from "react-paginate";
import { EditUserModal, UserModal } from "../../components/Modal";
import Loading from "../../components/Loading";

const UserEl = () => {
    const { user, pagesVisited, changePage, previous, next, usersPerPage, userPageCount } = useGlobalContext()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    return (
        <Box pt='80px'>
            <Text fontSize={{ base: '2rem', lg: '3.75rem' }} className='fira'>
                Users
                <Text as={'span'} fontSize='16px' ml='10px'>[{user.users.length}]</Text>
            </Text>
            <UserModal />
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {
                !user.loading && user.users.length
                    ? (
                        <Box maxW={'100%'} mx='30px' mb='30px'>
                            <Grid gridTemplateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap='20px'>
                                {
                                    user.users
                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                        .map(user => (
                                        <Flex
                                        key={user.id}
                                        align='flex-start' p='10px' borderRadius={'4px'}
                                        boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'} justify='center'
                                        >
                                            <Text 
                                                bgColor={'transparent'} fontSize={'1.4rem'} cursor='pointer'
                                                color='rgb(75, 68, 178)'
                                                onClick={() => dispatch(deleteUsers(user.id))}
                                            >
                                                <RiDeleteBin2Fill  />
                                            </Text>
                                            <Flex flexDir={'column'} align='center' gap={'5px'}>
                                                <Text>{user.id}</Text>
                                                <Text>{user.name}</Text>
                                                <Text>{user.username}</Text>
                                                <Text>{user.email}</Text>
                                                <Text>{user.phone}</Text>
                                                <Text>{user.website}</Text>
                                            </Flex>
                                            <EditUserModal />
                                        </Flex>
                                    ))
                                }
                            </Grid>
                            <ReactPaginate
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={userPageCount}
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

export default UserEl