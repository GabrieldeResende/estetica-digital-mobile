import React from "react";
import { ScrollView, Dimensions } from 'react-native';
import ModalHeader from './header';
import BottomSheet from 'reanimated-bottom-sheet';

const ModalAgendamento = () => {
    return (
        <BottomSheet
            initialSnap={2}
            snapPoints={[1, 70, Dimensions.get('window').height - 30]}
            renderContent={() => (
                <ScrollView style={{ backgroundColor: "#fff", height: '100%' }}>
                    <ModalHeader />
                </ScrollView>
            )}
        />
    );
};

export default ModalAgendamento;
