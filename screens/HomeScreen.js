import React, { useLayoutEffect, useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    useEffect(() => {
        client.fetch(`
        *[_type == "featured"]{
            ...,
            restaurants[]->{
              ..., 
              dishes[]-> {
                
              }
            },
          }`).then(data => {
            setFeaturedCategories(data);
        });
    }, []);

    console.log(featuredCategories);

    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center justify-between mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className="h7 w-7 rounded-full bg-gray-300 p-4"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400">Deliver Now!</Text>

                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className=" flex-row flex-1 bg-gray-200 p-3 space-x-2">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Categories */}
                <Categories />

                {/* Featured */}
                {featuredCategories?.map((category) => (
                    <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;