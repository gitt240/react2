import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Bai1 = () => {
    const [images, setImages] = useState();

    const commonOptions = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };

    const cameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions,
    };

    const libraryOptions = {
        seletLimit: 10,
        ...commonOptions,
    };

    const onOpenCamera = async () => {
        const response = await launchCamera(cameraOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage);
        }
    };

    const onOpenLibrary = async () => {
        const response = await launchImageLibrary(libraryOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage);
        }
    };


    return (
        <View>
            <Image
                source={{
                    uri:
                        images?.[0]?.uri ||
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
                }}
                style={styles.avatar}
            />
            <TouchableOpacity style={styles.btn} onPress={onOpenCamera}>
                <Text style={styles.txtBtn}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onOpenLibrary}>
                <Text style={styles.txtBtn}>Open Libery</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    txtBtn: {
        fontSize: 16,
        color: '#fff'
    },
    btn: {
        paddingVertical: 10,
        backgroundColor: '#657dfd',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100
    },
})