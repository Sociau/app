import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from "./style"

const DatePickerComponent = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
    const months = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
    const years = Array.from({ length: 100 }, (_, i) => `${new Date().getFullYear() - i}`);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Data de Nascimento</Text>
            <View style={styles.row}>
                <View style={styles.pickerWraper}>
                    <Picker
                        selectedValue={day}
                        onValueChange={setDay}
                        style={styles.picker}
                        mode="dropdown"
                    >
                        <Picker.Item label="D" value="" />
                        {days.map(d => <Picker.Item key={d} label={d} value={d} />)}
                    </Picker>
                </View>

                <View style={styles.pickerWraper}>
                    <Picker
                        selectedValue={month}
                        onValueChange={setMonth}
                        style={styles.picker}
                        mode="dropdown"
                    >
                        <Picker.Item label="M" value="" />
                        {months.map(m => (
                            <Picker.Item key={m} label={m} value={m} />
                        ))}
                    </Picker>
                </View>
                <View style={{ ...styles.pickerWraper, width: 120 }}>
                    <Picker
                        selectedValue={year}
                        onValueChange={(value) => setYear(value)}
                        style={{ ...styles.picker, width: 120 }}
                        mode="dropdown"
                    >
                        <Picker.Item label="A" value="" />
                        {years.map(y => <Picker.Item key={y} label={y} value={y} />)}
                    </Picker>
                </View>

            </View>
        </View>
    );
}

export default DatePickerComponent;