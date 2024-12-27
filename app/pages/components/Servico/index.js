import React from "react";
import { Text, Box, Touchable, Cover, Title, Button } from '../../styles'

const Servico = () => {
    return (
        <Touchable
            height='100px'
            hasPadding
            align="center"
            background='light'
        >
            <Cover background='transparent' image='https://images.unsplash.com/photo-1541533848490-bc8115cd6522?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ydGUlMjBjYWJlbG98ZW58MHx8MHx8fDA%3D' />
            <Box height='auto' hasPadding='10px' direction='column'>
                <Text bold color='dark'>Corte de Cabelo Masculino</Text>
                <Text small>R$ 45 . 30min</Text>
            </Box>
            <Box>
                <Button icon='clock-check-outline' background='success' mode="contained">Agendar</Button>
            </Box>
        </Touchable>
    )
}

export default Servico