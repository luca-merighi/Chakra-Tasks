import {VStack, Center, Heading, IconButton, useColorMode} from '@chakra-ui/react'
import {FaSun, FaMoon} from 'react-icons/fa'

export default function Header() {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <header>
            <VStack p={6} bgColor={colorMode === 'light'
                                    ? 'gray.100'
                                    : 'gray.700'}>
                <Center w='100%'  justifyContent={'center'}>
                    <Heading 
                        flexGrow={1} 
                        textColor='blue.500'
                        fontSize={'5xl'}
                        fontWeight={'700'}
                        textAlign={'center'}>
                        Chakra Tasks
                    </Heading>
                    <IconButton 
                        aria-label='Turn Light Mode'
                        icon={colorMode === 'light' 
                                ? <FaSun /> 
                                : <FaMoon/>} isRound={true}
                        onClick={toggleColorMode} />
                </Center>
            </VStack>
        </header>
    )
}