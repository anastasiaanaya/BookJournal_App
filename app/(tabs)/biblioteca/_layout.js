import { Stack } from "expo-router";

export default function BibliotecaStackLayout() {
    return( 
        <Stack
            screenOptions={{
            headerStyle: { backgroundColor: '#25292e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },}}
        >
            {/* pantalla principal del menú */}
            <Stack.Screen name="index" options={{ title: 'La meva Biblioteca' }} />
        </Stack>
    )
}