import React from "react";
import { Dimensions } from "react-native";
import { Cover, GradientView, Title, Text, Badge, Box, Touchable, Button,TextInput } from '../../styles/index'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../../styles/theme.json'

const Header = () => {
    return (
        <>
            <Cover image='https://media.istockphoto.com/id/1973194125/pt/foto/hairdresser-shaping-eyebrows-of-man-client-using-razor-in-barbershop.jpg?s=2048x2048&w=is&k=20&c=NLKwbm2jPgxte5A63I6LqCsgXFsB8F7dmdL4j96KeR8='
                width="100%"
                height="300px"
                hasPadding
            >
                <Badge color='success'>Aberto</Badge>
                <Title color='light'>Salao Teste</Title>
                <Text color='light'>Estetica Digital</Text>
            </Cover>
            <Box background='light' align='center'>
                <Box hasPadding justify='space-between'>
                    <Touchable width='50px' direction='column' align='center' spacing='0px 10px 0 0' >
                        <Icon name='phone' size={24} color={theme.colors.muted} />
                        <Text small spacing='10px 0 0 0'>Ligar</Text>
                    </Touchable>
                    <Touchable width='50px' direction='column' align='center'>
                        <Icon name='map-marker' size={24} color={theme.colors.muted} />
                        <Text small spacing='10px 0 0 0'>Visitar</Text>
                    </Touchable>
                    <Touchable width='50px' direction='column' align='center'>
                        <Icon name='share' size={24} color={theme.colors.muted} />
                        <Text small spacing='10px 0 0 0'>Enviar</Text>
                    </Touchable>
                </Box>
                <Box hasPadding direction='column' align='center' justify='center'>
                    <Button icon='clock-check-outline' background='success' mode='contained' uppercase={false}>Agendar Agora</Button>
                    <Text small spacing='10px 0 0'>Horario Disponiveis</Text>
                </Box>
            </Box>
            <Box hasPadding direction='column' background='light' spacing='10px 0 0 0'>
                <Title small>Serviços</Title>
                <TextInput placeholder="Digite o serviço..." />
            </Box>
        </>

    )
}

export default Header