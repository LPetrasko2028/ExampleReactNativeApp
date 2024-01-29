import {Stack} from 'expo-router'

const Layout = () => (
    <Stack>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />

    </Stack>
)