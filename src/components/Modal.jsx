import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button,
    useDisclosure,
    Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { postAlbums } from '../features/albums/albumSlice'
import { postComments } from '../features/comment/commentSlice'
import { postPhotos } from '../features/photos/photoSlice'
import { postPosts } from '../features/posts/postSlice'
import { postTodos } from '../features/todos/todoSlice'
import { postUsers } from '../features/users/userSlice'


export function AlbumModal() {
    const albumEl = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const album = [
        {
            albumEl: albumEl.current.value,
        }
    ]
        dispatch(postAlbums(album))
        // console.log(data)
        albumEl.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' boxShadow={'md'}
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} borderRadius='100px' px='20px' onClick={onOpen}
            >
                <AiOutlinePlus size={'1rem'} />
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New Album</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Album' id='album' ref={albumEl} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff' _hover={{ opacity: 1 }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditAlbumModal() {
    const albumEl = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const album = [
        {
            albumEl: albumEl.current.value,
        }
    ]
        dispatch(postAlbums(album))
        // console.log(data)
        albumEl.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'rgb(75, 68, 178)'} fontSize={'1.1rem'} onClick={onOpen}
                cursor='pointer' color='#fff' p='15px' borderRadius={'50px'}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Album' id='album' ref={albumEl} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff' _hover={{ opacity: 1 }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditCommentModal() {
    const name = useRef(null)
    const email = useRef(null)
    const body = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = [
        {
            name: name.current.value,
            email: email.current.value,
            body: body.current.value
        }
    ]
        dispatch(postComments(comment))
        // console.log(data)
        name.current.value = null
        email.current.value = null
        body.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'transparent'} fontSize={'1.4rem'} color='rgb(75, 68, 178)'
                cursor='pointer' onClick={onOpen}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Name' id='name' required ref={name} />
                    <Input my='10px' type={'email'} placeholder='Email' id='email' required ref={email} />
                    <Input type={'text'} placeholder='Body' id='body' required ref={body} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function CommentModal() {
    const name = useRef(null)
    const email = useRef(null)
    const body = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = [
        {
            name: name.current.value,
            email: email.current.value,
            body: body.current.value
        }
    ]
        dispatch(postComments(comment))
        // console.log(data)
        name.current.value = null
        email.current.value = null
        body.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' boxShadow={'md'}
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} borderRadius='100px' px='20px'  onClick={onOpen}
            >
                <AiOutlinePlus size={'1rem'} />
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Name' id='name' required ref={name} />
                    <Input my='10px' type={'email'} placeholder='Email' id='email' required ref={email} />
                    <Input type={'text'} placeholder='Body' id='body' required ref={body} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditPhotoModal() {
    const title = useRef(null)
    const url = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let photo = [
        {
            title: title.current.value,
            url: url.current.value,
        }
    ]
        dispatch(postPhotos(photo))
        // console.log(data)
        title.current.value = null
        url.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'transparent'} fontSize={'1.4rem'} color='rgb(75, 68, 178)'
                cursor='pointer' onClick={onOpen}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Title' id='title' required ref={title} />
                    <Input my='10px' type={'email'} placeholder='Image url' id='url' required ref={url} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function PhotoModal() {
    const title = useRef(null)
    const url = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let photo = [
        {
            title: title.current.value,
            url: url.current.value,
        }
    ]
        dispatch(postPhotos(photo))
        // console.log(data)
        title.current.value = null
        url.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' boxShadow={'md'}
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} borderRadius='100px' px='20px'  onClick={onOpen}
            >
                <AiOutlinePlus size={'1rem'} />
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Title' id='title' required ref={title} />
                    <Input my='10px' type={'email'} placeholder='Image url' id='url' required ref={url} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function PostModal() {
    const title = useRef(null)
    const body = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let post = [
        {
            title: title.current.value,
            body: body.current.value,
        }
    ]
        dispatch(postPosts(post))
        // console.log(data)
        title.current.value = null
        body.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button 
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' 
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} onClick={onOpen}
            >
                ADD
                <Text bgColor='transparent' color='#6C62FF'>
                    <AiOutlinePlus size={'1rem'} />
                </Text>
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Title' id='title' required ref={title} />
                    <Input my='10px' type={'text'} placeholder='BOdy' id='body' required ref={body} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditPostModal() {
    const title = useRef(null)
    const body = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let post = [
        {
            title: title.current.value,
            body: body.current.value,
        }
    ]
        dispatch(postPosts(post))
        // console.log(data)
        title.current.value = null
        body.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'transparent'} fontSize={'1.4rem'} color='rgb(75, 68, 178)'
                cursor='pointer' onClick={onOpen}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Title' id='title' required ref={title} />
                    <Input my='10px' type={'text'} placeholder='BOdy' id='body' required ref={body} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    bgColor={'#121D33'} mr={3} boxShadow='md' color='#fff'
                    onClick={handleSubmit} _hover={{ opacity: 1 }}
                >
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function TodoModal() {
    const todoEl = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = [
        {
            todoEl: todoEl.current.value,
        }
    ]
        dispatch(postTodos(todo))
        // console.log(data)
        todoEl.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button 
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' 
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} onClick={onOpen}
            >
                ADD
                <Text bgColor='transparent' color='#6C62FF'>
                    <AiOutlinePlus size={'1rem'} />
                </Text>
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New Todo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Todo' id='todo' ref={todoEl} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff' _hover={{ opacity: '1' }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditTodoModal() {
    const todoEl = useRef(null)
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = [
        {
            todoEl: todoEl.current.value,
        }
    ]
        dispatch(postTodos(todo))
        // console.log(data)
        todoEl.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'transparent'} fontSize={'1.4rem'} color='rgb(75, 68, 178)'
                cursor='pointer' onClick={onOpen}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input type={'text'} placeholder='Todo' id='todo' ref={todoEl} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff' _hover={{ opacity: '1' }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function UserModal() {
    const name = useRef(null)
    const email = useRef(null)
    const username = useRef(null)
    const phone = useRef(null)
    const website = useRef(null)

    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = [
        {
            name: name.current.value,
            email: email.current.value,
            username: username.current.value,
            phone: phone.current.value,
            website: website.current.value,
        }
    ]
        dispatch(postUsers(user))
        // console.log(data)
        name.current.value = null
        email.current.value = null
        username.current.value = null
        phone.current.value = null
        website.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button 
                bgColor={'#121D33'} fontSize='.875rem' color={'#fff'} my='25px' 
                _hover={{ opacity: '1' }} h='50px' cursor={'pointer'} onClick={onOpen}
            >
                ADD
                <Text bgColor='transparent' color='#6C62FF'>
                    <AiOutlinePlus size={'1rem'} />
                </Text>
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Add New User details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input my='7px' type={'text'} placeholder='Name' id='name' ref={name} />
                    <Input my='7px' type={'email'} placeholder='E-mail' id='email' ref={email} />
                    <Input my='7px' type={'text'} placeholder='Username' id='username' ref={username} />
                    <Input my='7px' type={'number'} placeholder='Phone' id='phone' ref={phone} />
                    <Input my='7px' type={'text'} placeholder='Website' id='website' ref={website} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff'_hover={{ opacity: '1' }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}

export function EditUserModal() {
    const name = useRef(null)
    const email = useRef(null)
    const username = useRef(null)
    const phone = useRef(null)
    const website = useRef(null)

    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = [
        {
            name: name.current.value,
            email: email.current.value,
            username: username.current.value,
            phone: phone.current.value,
            website: website.current.value,
        }
    ]
        dispatch(postUsers(user))
        // console.log(data)
        name.current.value = null
        email.current.value = null
        username.current.value = null
        phone.current.value = null
        website.current.value = null
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text 
                bgColor={'transparent'} fontSize={'1.4rem'} color='rgb(75, 68, 178)'
                cursor='pointer' onClick={onOpen}
            >
                <MdModeEdit  />
            </Text>
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className='fira' fontWeight={'400'}>
                <ModalHeader>Edit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input my='7px' type={'text'} placeholder='Name' id='name' ref={name} />
                    <Input my='7px' type={'email'} placeholder='E-mail' id='email' ref={email} />
                    <Input my='7px' type={'text'} placeholder='Username' id='username' ref={username} />
                    <Input my='7px' type={'number'} placeholder='Phone' id='phone' ref={phone} />
                    <Input my='7px' type={'text'} placeholder='Website' id='website' ref={website} />
                </ModalBody>
    
                <ModalFooter>
                <Button bgColor={'#121D33'} mr={3} onClick={handleSubmit} boxShadow='md' color='#fff'_hover={{ opacity: '1' }}>
                    CREATE
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        )
}