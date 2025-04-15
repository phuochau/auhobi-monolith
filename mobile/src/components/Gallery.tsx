import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

interface GalleryProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  maxImages?: number;
  imagesPerRow?: number;
  readOnly?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  onImagesChange,
  maxImages = 4,
  imagesPerRow = 4,
  readOnly = false,
}) => {
  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 800,
        height: 800,
        cropping: true,
        compressImageQuality: 0.8,
        multiple: true,
        maxFiles: maxImages - images.length,
      });

      if (Array.isArray(image)) {
        onImagesChange([...images, ...image.map(img => img.path)]);
      }
    } catch (error) {
      console.warn('Image selection canceled or failed', error);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onImagesChange(newImages);
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
        {!readOnly && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeImage(index)}
          >
            <Text style={styles.removeButtonText}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderAddButton = () => {
    if (readOnly || images.length >= maxImages) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <Text style={styles.addButtonText}>+</Text>
        <Text style={styles.addButtonLabel}>Add Photo</Text>
      </TouchableOpacity>
    );
  };

  const data = [...images];
  if (!readOnly && images.length < maxImages) {
    data.push('ADD_BUTTON');
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) =>
        item === 'ADD_BUTTON' ? (
          renderAddButton()
        ) : (
          renderItem({ item, index })
        )
      }
      keyExtractor={(item, index) => (item === 'ADD_BUTTON' ? 'add' : item)}
      numColumns={imagesPerRow}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF3B30',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  addButton: {
    flex: 1,
    aspectRatio: 1,
    margin: 4,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  addButtonText: {
    fontSize: 24,
    color: '#845EF7',
    fontWeight: 'bold',
  },
  addButtonLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
}); 