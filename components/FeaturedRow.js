import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        client.fetch(`
                    *[_type == "featured" && _id == $id]{
                        ...,
                        restaurants[]=>{
                            ...,
                            dishes[]=>{
                                type=> {
                                    name
                                }
                            }
                        },
                    }[]
                `,
            { id }
        ).then(data => {
            setRestaurants(data?.restaurants);
        });
    }, []);

    return (
        <View>
            <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text style={{ fontSize: 12, color: 'gray', paddingHorizontal: 16, paddingBottom: 4 }}>{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 4 }}
            >
                {restaurants?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        address={restaurant.address}
                        title={restaurant.name}
                        dishes={restaurant.dishes}
                        rating={restaurant.rating}
                        short_description={restaurant.short_description}
                        genre={restaurant.type?.name}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;