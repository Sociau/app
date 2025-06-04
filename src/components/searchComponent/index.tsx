import React from "react";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type SearchComponentProps = {
    handleFilterModal: () => void,
    handleNewPost?: () => void,
    isPost?: boolean,
}

const SearchComponent: React.FC<SearchComponentProps> = ({ handleFilterModal, handleNewPost = () => { }, isPost }) => {
    const images = {
        search: require('../../../assets/icons/search.png'),
        filter: require('../../../assets/icons/filter.png')
    }
    return (
        <>
            {
                isPost &&
                (
                    <View style={styles.search}>
                        <TouchableOpacity style={{ position: 'absolute', left: "7%", top: "36%", zIndex: 99 }}>
                            <Image source={images.search} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TextInput style={{ ...styles.searchInput, width: "55%" }} />
                        <TouchableOpacity style={{ ...styles.filter, marginLeft: "3%" }} onPress={() => handleNewPost()}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.filter, marginLeft: "3%" }} onPress={() => handleFilterModal()}>
                            <Image source={images.filter} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                )
            }

            {
                !isPost &&
                (
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
        </>

    )
}

export default SearchComponent