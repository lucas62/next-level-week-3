import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';

interface InitialCoordinates {
  latitude: number,
  longitude: number,
}

export default function SelectMapPosition() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as InitialCoordinates;

  const [initialPosition, setInitialPosition] = useState({ latitude: 0, longitude: 0});
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});

  useEffect(() => {
    setInitialPosition({
        latitude: params.latitude,
        longitude: params.longitude
    })
  }, [params])

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setPosition({ latitude, longitude});
  }

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        { position.latitude !== 0 && (
          <Marker 
            icon={mapMarkerImg}
            coordinate={{ 
              latitude: position.latitude,
              longitude: position.longitude 
            }}
          />
        )}
      </MapView>

      { position.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,

    elevation: 2,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})