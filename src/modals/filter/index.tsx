import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"
import ButtonComponent from "../../components/buttonComponent"
import { colors } from "../../../rootStyles"
import SelectComponent from "../../components/selectComponent"

type FilterModalProps = {
    handleFilterModal: () => void,
    filterModalState: boolean
}
const FilterModal: React.FC<FilterModalProps> = ({ handleFilterModal, filterModalState }) => {


    const handleLimpar = () => {

    }

    const renderSelectField = (data: string[], onValueChange: (value: string) => void, selectedValue: string) => {
        return (
            <View style={styles.fieldPlace}>
                <View style={styles.fieldInputContainer}>
                    <SelectComponent data={data} onValueChange={onValueChange} selectedValue={selectedValue} />
                </View>

            </View>
        )
    }

    return (
        <View style={{ ...styles.overlay, display: filterModalState ? 'flex' : 'none' }}>
            <View style={{ ...styles.containerFilter, display: filterModalState ? 'flex' : 'none' }}>
                <TouchableOpacity style={styles.close} onPress={() => handleFilterModal()}>
                    <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>

                <Text style={styles.mainText}>Filtro</Text>

                <View style={styles.FiltersContainer}>

                    {
                        renderSelectField(["PB", "RN"], () => { }, "Estado")
                    }

                    {
                        renderSelectField(["Santa Luzia", "Patos", "Caicó"], () => { }, "Cidade")
                    }

                    {
                        renderSelectField(["Cachorro", "Gato"], () => { }, "Espécie")
                    }

                    {
                        renderSelectField(["M", "F"], () => { }, "Sexo")
                    }

                    {
                        renderSelectField(["P", "M", "G"], () => { }, "Tamanho")
                    }
                </View>

                <View style={styles.buttonsContainer}>
                    <ButtonComponent width={47} height={59} handleFunction={() => handleLimpar()} buttonText="Limpar" color={colors.textColor} bgColor={colors.helloText} />
                    <ButtonComponent width={47} height={59} handleFunction={() => handleLimpar()} buttonText="Filtrar" color={colors.textColor} bgColor={colors.mainColor} />
                </View>
            </View >
        </View >

    )
}

export default FilterModal