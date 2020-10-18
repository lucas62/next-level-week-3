import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import mapMaker from '../images/map-marker.png';

const { width, height } = Dimensions.get('window');

export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }

    return (
        <View style={styles.container}>
          <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map} 
            initialRegion={{
              latitude: -10.226066,
              longitude: -48.326558,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            <Marker 
              icon={mapMaker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: -10.226066,
                longitude: -48.326558,
              }}
            >
              <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>Lar das meninas</Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
    
          <View style={styles.footer}>
            <Text style={styles.footerText}>2 orfanatos encontrados</Text>
    
            <TouchableOpacity style={styles.createOrphangeButton} onPress={() => {}}>
              <Feather name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      width: width,
      height: height,
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
  
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
  
      justifyContent: 'center',
    },
  
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
  
    footerText: {
      color: '#8FA7B3',
      fontFamily: 'Nunito_700Bold',
    },
  
    createOrphangeButton: {
      width: 56,
      height: 56,
  
      backgroundColor: '#15C3D6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
});
