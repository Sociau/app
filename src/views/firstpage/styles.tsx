import {
    StyleSheet
}

from "react-native";

import {
    colors
}

from "../../../rootStyles";

const styles=StyleSheet.create({
    firstPageMain: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "100%",
        backgroundColor: colors.mainColor,
    }
});

export {
    styles
}

;