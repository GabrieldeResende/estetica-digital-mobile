import React from "react";
import { Touchable, GradientView, Text, Box, Spacer } from '../../styles'
import theme from '../../styles/theme.json'
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <GradientView
                colors={[theme.colors.dark, theme.colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Box>
                    <Touchable hasPadding>
                        <Icon name='chevron-left' color={theme.colors.light} size={30} />
                        <View style={{ marginLeft: 20 }}>
                            <Text color='light'>Finalizar Agendamento</Text>
                            <Spacer size='3px' />
                            <Text small color='light'>Horario, Pagamento e Especialista</Text>
                        </View>
                    </Touchable>
                </Box>
            </GradientView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 70
    }
})

export default ModalHeader