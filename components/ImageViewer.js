import { StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';


export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" } : placeholderImageSource;

  return  <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
    />;
}

const styles = StyleSheet.create({  
  video: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
