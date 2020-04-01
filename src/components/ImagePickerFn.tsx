import ImagePicker from 'react-native-image-crop-picker';

const myPicker = {
    getSinglePic : (callback: Function) => {
        ImagePicker.openPicker({     
            cropping: false
        }).then((image: { path: string; }) => {
            callback(image)
        });  
    },
}

export default myPicker;