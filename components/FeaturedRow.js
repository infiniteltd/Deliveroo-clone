import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* RestaurantCards */}
                <RestaurantCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="The Sushi"
                    rating={4.8}
                    genre="French"
                    address="124 Main St. ave "
                    short_description="This is a description"
                    dishes={[]}
                    long={25}
                    lat={5}
                /><RestaurantCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="The Sushi"
                    rating={4.8}
                    genre="French"
                    address="124 Main St. ave "
                    short_description="This is a description"
                    dishes={[]}
                    long={25}
                    lat={5}
                /><RestaurantCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="The Sushi"
                    rating={4.8}
                    genre="French"
                    address="124 Main St. ave "
                    short_description="This is a description"
                    dishes={[]}
                    long={25}
                    lat={5}
                /><RestaurantCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="The Sushi"
                    rating={4.8}
                    genre="French"
                    address="124 Main St. ave "
                    short_description="This is a description"
                    dishes={[]}
                    long={25}
                    lat={5}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;