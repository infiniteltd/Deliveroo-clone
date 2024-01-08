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
            restaurants[]=>{
              ..., 
              dishes[]=> {
                
              }
            },
          }`).then(data => {
            setFeaturedCategories(data);
        });
    }, []);

    console.log(featuredCategories);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 }}>
            <View style={{ flexDirection: 'row', paddingBottom: 3, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    style={{ height: 28, width: 28, borderRadius: 14, backgroundColor: 'gray' }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 12 }}>Deliver Now!</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Current Location</Text>
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </View>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 2 }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'gray', padding: 12, borderRadius: 8, marginRight: 8, alignItems: 'center' }}>
                    <MagnifyingGlassIcon color="whitesmoke" size={20} />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                        style={{ flex: 1, marginLeft: 8 }}
                    />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            <ScrollView
                style={{ backgroundColor: 'gray' }}
                contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Categories */}
                <Categories />

                {/* Featured */}
                {featuredCategories?.map(category => (
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