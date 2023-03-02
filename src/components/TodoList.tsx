import {useState} from 'react' 
import {nanoid} from 'nanoid'

import {Flex, StackDivider, VStack, HStack, Text, Spacer, IconButton,
        Input, Button, Badge, useToast, useColorMode} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'


export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [content, setContent] = useState('')
    const {colorMode} = useColorMode()

    const toast = useToast()

    function deleteTasks(id) {
        const newTasks  = tasks.filter(task => {
            return task.id !== id
            })
            setTasks(newTasks)
    }

    function createTask(task) {
        setTasks([...tasks, task])
    }

    function handleSubmit(event) {
        event.preventDefault()

        if(!content) {
            toast({
                title: 'Write Something!',
                status: 'error',
                duration: 5000,
                isClosable: true
            })
            return 
        }

        const task = {
            id: nanoid,
            task: content
        }

        createTask(task)
        setContent('')
    }

    return (
        <main>
            <Flex p={10} flexDirection={'column'} gap={10} alignItems={'center'} justifyContent={'center'}>
                {!tasks.length ? (
                    <Flex alignItems={'center'} justifyContent={'center'} mt={10}>
                        <Badge 
                            bg={'blue.300'} 
                            p={'4'} m={'4'}
                            textColor={colorMode === 'light' ? 'gray.100' : 'gray.800'}
                            textTransform={'none'}
                            fontSize={'xl'} 
                            borderRadius={'lg'}>
                            No more Tasks left! 
                        </Badge>
                    </Flex>
                ) : (
                    <VStack 
                        divider={<StackDivider />} 
                        p={4} width="100%" alignItems={'stretch'}
                        maxWidth={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }} 
                        borderWidth='2px' 
                        borderColor='gray.200' 
                        borderRadius={'lg'}>
                        {tasks.map(task => (
                            <HStack key={task.id}>
                                <Text>
                                    {task.task}
                                </Text>
                                <Spacer />
                                <IconButton 
                                aria-label='Delete Task'
                                icon={<FaTrash />}
                                onClick={() => deleteTasks(task.id)} /> 
                            </HStack>
                        ))}
                    </VStack>
                )}

                <form onSubmit={handleSubmit}>
                    <HStack>
                        <Input 
                        variant='filled' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Learn web development'/>
                        <Button 
                        colorScheme='blue' 
                        px='8' 
                        type='submit'>
                            Add Task
                        </Button>
                    </HStack>
                </form>
            </Flex>
        </main>
    )
}