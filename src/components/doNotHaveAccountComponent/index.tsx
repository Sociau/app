import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";


type DonotHaveAccountComponentProps = {
    handleCreateAccount: () => void
}
const DonotHaveAccountComponent: React.FC<DonotHaveAccountComponentProps> = ({ handleCreateAccount }) => {

    return (
        <View style={styles.newAccountContainer}><Text style={styles.newAccount}>Não tem uma conta?</Text><Text style={styles.newAccount} onPress={() => handleCreateAccount()}>Cadastre-se</Text></View>
    )
}

export default DonotHaveAccountComponent;