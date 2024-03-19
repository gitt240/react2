import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary }
    from 'react-native-image-picker';
import axios from 'axios';

const UploadImage = () => {
    const [imageLocal, setImageLocal] = useState('');
    const [imageOnline, setImageOnline] = useState('');

    const takePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            cameraType: 'back',
            saveToPhotos: true,
        }
        try {
            launchCamera(options, async (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    console.log('response', response);
                    // hiện ảnh vừa chụp lên giao diện
                    setImageLocal(response.assets[0].uri);
                    // upload ảnh lên server (nodeJS/firebase/cloudinary,...)
                    try {
                        const data = new FormData();
                        data.append('file', {
                            fileName: response.assets[0].fileName,
                            name: response.assets[0].fileName,
                            type: response.assets[0].type,
                            uri: response.assets[0].uri,
                        });
                        data.append('upload_preset', 'ml_default');

                        axios({
                            url: 'https://api.cloudinary.com/v1_1/dabjkx3oi/image/upload',
                            method: 'POST',
                            data: data,
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'multipart/form-data',
                                'Authorization': ' '
                            }
                        })
                            .then(function (response) {
                                console.log("ket qua tra ve :", response.data);
                                setImageOnline(response.data.url);
                            })
                            .catch(function (error) {
                                console.log("error from image :");
                            })

                        // console.log('ket qua: ', result);
                    } catch (error) {
                        console.log('Axios: ', error)
                    }
                }
            })
        } catch (error) {
            console.log('error', error)
        }
    }
    return (
        <View>
            <Button
                title='Take photo'
                onPress={takePhoto}
            />
            {
                imageLocal !== '' &&
                <Image
                    source={{ uri: imageLocal }}
                    style={{ width: 200, height: 200 }}
                />
            }
            {
                imageOnline !== '' &&
                <Image
                    source={{ uri: imageOnline }}
                    style={{ width: 300, height: 300 }}
                />
            }
        </View>
    )
}

export default UploadImage

const styles = StyleSheet.create({})