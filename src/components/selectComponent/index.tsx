import { Picker } from "@react-native-picker/picker"
import { View } from "react-native"
import { styles } from "./style"

const SelectComponent = ({ data, onValueChange, selectedValue }: { data: string[], onValueChange: (value: string) => void, selectedValue: string }) => {
    return (
        <View style={styles.pickerWraper}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={styles.picker}
                mode="dropdown"
            >
                <Picker.Item label={selectedValue} value="" />
                {data.map(m => (
                    <Picker.Item key={m} label={m} value={m} />
                ))}
            </Picker>
        </View>
    )
}

export default SelectComponent