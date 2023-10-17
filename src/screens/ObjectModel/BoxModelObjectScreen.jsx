import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styleGral } from '../../ccs/theme'

export const BoxModelObjectScreen = () => {
  return (
    // las 3 fotmas de agregar styles
    // <View> 
    //     <Text style={{fontSize:20}}>Hola Mundo</Text>
    //     <Text style={ styles.title}>Hola Mundo</Text>
    //     <Text style={ styleGral.title}>Hola Mundo</Text>
    // </View>
    <View> 
        <View style={ styles.container}>
            <Text style={styles.title}>Hola Mundo</Text>
        </View>
        <View style={ styles.container}>
            <Text style={styles.title}>Hola Mundo</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        margin: 20,
        borderWidth: 2,
        padding:20,
        textAlign: 'center'
    }
})
