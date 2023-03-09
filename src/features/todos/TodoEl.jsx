import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, fetchTodos } from "./todoSlice";
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useGlobalContext } from "../../context";
import ReactPaginate from "react-paginate";
import { EditTodoModal, TodoModal } from "../../components/Modal";

const TodoEl = () => {
    const { pagesVisited, todoPageCount, changePage, previous, next, usersPerPage, todo } = useGlobalContext()
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <Box pt='80px'>
            <Text fontSize='3.75rem' className='fira'>
                Todos
                <Text as={'span'} fontSize='16px' ml='10px'>[{todo.todos.length}]</Text>
            </Text>
            <TodoModal />
            {todo.loading && <div>Loading...</div>}
            {!todo.loading && todo.error ? <div>Error: {todo.error}</div> : null}
            {
                !todo.loading && todo.todos.length
                    ? (
                        <Box maxW={'1200px'} mx='auto' mb='30px'>
                            <Grid gridTemplateColumns={'repeat(4, 1fr)'} gap='20px'>
                                {
                                    todo.todos
                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                        .map((todo) => (
                                        <Flex
                                        key={todo.id} w='280px' h='150px' overflowY={'scroll'}
                                        align='flex-start' p='10px' borderRadius={'4px'}
                                        boxShadow={'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'} justify='center'
                                        >
                                            <Text
                                                bgColor={'transparent'} fontSize={'1.4rem'} cursor='pointer'
                                                color='rgb(75, 68, 178)'
                                                onClick={() => dispatch(deleteTodos(todo.id))}
                                            >
                                                <RiDeleteBin2Fill  />
                                            </Text>
                                            <Flex flexDir={'column'} align='center' gap='5px'>
                                                <Text>{todo.id}</Text>
                                                <Text>{todo.title}</Text>
                                                {
                                                    todo.completed 
                                                        ? <Flex gap='10px' align='center'>
                                                            <BsCheckCircleFill cursor={'pointer'} fontSize='1.4rem' /> Completed
                                                        </Flex>
                                                        : <Flex gap='10px' align='center'>
                                                            <BsCheckCircle cursor={'pointer'} fontSize='1.4rem' /> UnCompleted
                                                        </Flex>
                                                }
                                            </Flex>
                                            <EditTodoModal />
                                        </Flex>
                                    ))
                                }
                            </Grid>
                            <ReactPaginate
                                previousLabel={previous}
                                nextLabel={next}
                                pageCount={todoPageCount}
                                onPageChange={changePage}
                                containerClassName={'paginationBtn'}
                                previousLinkClassName='previousBtn'
                                nextLinkClassName='nextBtn'
                                disabledClassName='paginationDisabled'
                                activeClassName='paginationActive'
                            />
                        </Box>
                    )
                    :null
            }
        </Box>
    )
}

export default TodoEl