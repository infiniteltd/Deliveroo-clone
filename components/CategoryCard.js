import React from 'react';
import { Text, Pressable, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <Pressable style={styles.container}>
            <Image
                source={{ uri: imgUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginRight: 2,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
    },
    title: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CategoryCard;