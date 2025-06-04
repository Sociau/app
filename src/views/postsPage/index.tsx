import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./style";
import BottomMenuComponent from "../../components/bottomMenu";
import { useNavigation } from "@react-navigation/native";
import { PostsNavigationProp } from "../../types/navigation";
import TopComponent from "../../components/topComponent";
import SearchComponent from "../../components/searchComponent";
import PostsComponent from "../../components/postsComponent";
import PostModal from "../../modals/postModal";
import FilterModal from "../../modals/filter";


const PostsPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openPostModal, setOpenPostModal] = useState(false)

    const navigation = useNavigation<PostsNavigationProp>();
    const handleFilterModal = () => {
        setOpenModal(!openModal)
    }

    const handleNewPost = () => {
        navigation.navigate("NewPostPage");
    }

    const handlePostModal = () => {
        setOpenPostModal(!openPostModal)
    }

    const posts = [
        {
            user: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8d6YyhIzk3iuWxQ7r0i6YE_CqtITUTX1jw&s",
                name: "Tutu",
            },
            time: "Há 15 min.",
            image: "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg",
            text: "Encontrei esse cachorro, às 15h aqui perto do supermercado cantalice, ele está precisando de um lar.",
            address: {
                city: "Santa Luzia",
                state: "PB",
            },
            views: "10",
        },
        {
            user: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8d6YyhIzk3iuWxQ7r0i6YE_CqtITUTX1jw&s",
                name: "Tutu",
            },
            time: "Há 15 min.",
            image: "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg",
            text: "Encontrei esse cachorro, às 15h aqui perto do supermercado cantalice, ele está precisando de um lar.",
            address: {
                city: "Santa Luzia",
                state: "PB",
            },
            views: "10",
        }
    ]

    return (
        <>
            <View style={styles.mainAboutUs}>
                <TopComponent navigation={navigation} />
                <SearchComponent handleFilterModal={handleFilterModal} isPost handleNewPost={handleNewPost} />
                <ScrollView contentContainerStyle={styles.container}>

                    {
                        posts.map((post, index) => (
                            <PostsComponent key={index} post={post} postModal={handlePostModal} filterModalState={openPostModal} />
                        ))
                    }

                </ScrollView>
                <BottomMenuComponent />
            </View>

            {
                openModal && <FilterModal handleFilterModal={handleFilterModal} filterModalState={openModal} />
            }
            {
                openPostModal && <PostModal handlePostModal={handlePostModal} postModalState={openPostModal} />
            }
        </>


    )
}

export default PostsPage;