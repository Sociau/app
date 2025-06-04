import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./style"

const PostModal = ({ handlePostModal, postModalState }: { handlePostModal: () => void, postModalState: boolean }) => {

    const renderOption = (option: string, isLast?: boolean) => {
        return (
            <TouchableOpacity style={{ ...styles.modalOption, borderBottomWidth: isLast ? 0 : 1 }}>
                <Text style={styles.modalOptionText}>{option}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={() => handlePostModal()}>
            <View style={{ ...styles.overlay, display: postModalState ? 'flex' : 'none' }}>

                <TouchableWithoutFeedback onPress={() => { }}>
                    <View style={styles.modal}>
                        {
                            renderOption("Denunciar Perfil")
                        }

                        {
                            renderOption("Denunciar Post")
                        }

                        {
                            renderOption("Ver Perfil", true)
                        }
                    </View>
                </TouchableWithoutFeedback>


            </View>
        </TouchableWithoutFeedback>

    )
}

export default PostModal;