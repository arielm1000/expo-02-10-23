import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const PositionModelScreen = () => {
  //const { width, height} = Dimensions.get('window');
  const {width, height} = useWindowDimensions();
    return (
    <View> 
        <View style={styles.container}>
            <Text style={styles.cajaRoja}>1</Text>
            <Text style={styles.cajaAzul}>1</Text>
            <Text style={styles.cajaAmarilla}>1</Text>
            <Text style={styles.cajaNaranja}>1</Text>
        </View>
        <Text style={{ textAlign: 'center', fontSize:10}}>W: {width}  , H: {height} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height: 600,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    cajaRoja: {
        backgroundColor: 'red',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth:5,
        position: 'absolute',
        top: 0,
        right: 0
    },
    cajaAzul: {
        backgroundColor: 'blue',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth:5,
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth:5,
        position: 'absolute',
        bottom: 0
    },
    cajaAmarilla: {
        backgroundColor: 'yellow',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth:5,
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})
