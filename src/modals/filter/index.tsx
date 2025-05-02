import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"
import ButtonComponent from "../../components/buttonComponent"
import { colors } from "../../../rootStyles"

type FilterModalProps = {
    handleFilterModal: () => void,
    filterModalState: boolean
}
const FilterModal: React.FC<FilterModalProps> = ({ handleFilterModal, filterModalState }) => {


    const handleLimpar = () => {

    }

    return (
        <View style={{ ...styles.overlay, display: filterModalState ? 'flex' : 'none' }}>
            <View style={{ ...styles.containerFilter, display: filterModalState ? 'flex' : 'none' }}>
                <TouchableOpacity style={styles.close} onPress={() => handleFilterModal()}>
                    <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>

                <Text style={styles.mainText}>Filtro</Text>

                <View style={styles.buttonsContainer}>
                    <ButtonComponent width={47} height={59} handleFunction={() => handleLimpar()} buttonText="Limpar" color={colors.textColor} bgColor={colors.helloText} />
                    <ButtonComponent width={47} height={59} handleFunction={() => handleLimpar()} buttonText="Filtrar" color={colors.textColor} bgColor={colors.mainColor} />
                </View>
            </View >
        </View >

    )
}

export default FilterModal