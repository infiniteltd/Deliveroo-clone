import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 4" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 5" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
});

export default Categories;