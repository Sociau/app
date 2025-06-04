import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Text } from "react-native-gesture-handler";

const PostsComponent = ({ post, postModal }: { post: any, postModal: () => void, filterModalState: boolean }) => {

    const images = {
        localization: require('../../../assets/icons/local.png'),
        eye: require('../../../assets/icons/EyeView.png')
    }

    return (
        <View style={styles.postContainer}>
            <View style={styles.userInfo}>
                <TouchableOpacity style={styles.userInfoContainer}>
                    <Image style={styles.userImage} source={{ uri: post.user.image }} />
                    <View style={styles.userInfoText}>
                        <Text style={styles.userName}>{post.user.name}</Text>
                        <Text style={styles.userTime}>{post.time}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.dotsContainer} onPress={() => postModal()}>
                    <View style={styles.dots}></View>
                    <View style={styles.dots}></View>
                    <View style={styles.dots}></View>
                </TouchableOpacity>
            </View>
            <Image style={styles.postImage} source={{ uri: post.image }} />
            <Text style={styles.postText}>{post.text}</Text>

            <View style={styles.postFooter}>
                <View style={styles.postFooterField}>
                    <Image style={{ width: 10, height: 13 }} source={images.localization} />
                    <Text style={styles.postFooterText}>{post.address.city} {post.address.state}</Text>
                </View>

                <View style={styles.postFooterField}>
                    <Image style={{ width: 19, height: 12 }} source={images.eye} />
                    <Text style={styles.postFooterText}>{post.views}</Text>
                </View>
            </View>
        </View>
    )
}

export default PostsComponent