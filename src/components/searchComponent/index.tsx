import React from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

type SearchComponentProps = {
    handleFilterModal: () => void
}

const SearchComponent: React.FC<SearchComponentProps> = ({ handleFilterModal }) => {
    const images = {
        search: require('../../../assets/icons/search.png'),
        filter: require('../../../assets/icons/filter.png')
    }
    return (
        <View style={styles.search}>
            <TouchableOpacity style={{ position: 'absolute', left: "8%", top: "36%", zIndex: 99 }}>
                <Image source={images.search} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <TextInput style={styles.searchInput} />
            <TouchableOpacity style={styles.filter} onPress={() => handleFilterModal()}>
                <Image source={images.filter} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchComponent