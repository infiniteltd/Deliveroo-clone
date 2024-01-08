import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
    return (
        <Pressable style={{ backgroundColor: 'white', marginRight: 3, shadowColor: 'black', shadowOpacity: 0.5 }}>
            <Image
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                style={{ height: 36, width: 64, borderRadius: 4 }}
            />
            <View style={{ paddingLeft: 3, paddingBottom: 4 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 2 }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text style={{ fontSize: 12, color: 'gray' }}>
                        <Text style={{ color: 'green' }}>{rating}</Text> • {genre}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text style={{ fontSize: 12, color: 'gray' }}>Nearby • {address}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default RestaurantCard;