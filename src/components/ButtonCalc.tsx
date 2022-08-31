import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface Props {
    title:string,
    fondo: 'gray' | '#ff9427' | '#2d2d2d'
    color: '#fff' | '#000',
    onClick?: ()=>void,
}

export const ButtonCalc = (props:Props) => {

    const {title, fondo, color, onClick} = props;

    const colorButton = {
        backgroundColor: fondo,
    }

    const colorText = {
        color: color,
    }

  return (
    <TouchableOpacity onPress={onClick}>
        <View style={[styles.botton,colorButton]}>
            <Text style={[styles.bottonText, colorText]}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    botton:{
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
    },
    bottonText:{
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: "bold",
    }
});


