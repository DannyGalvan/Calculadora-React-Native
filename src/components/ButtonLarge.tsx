import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Props } from './ButtonCalc';

export const ButtonLarge = (props:Props) => {

    const {color, fondo, title, onClick} = props;

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
        width: 180,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomEndRadius: 50,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    bottonText:{
        textAlign: 'left',
        marginLeft: 20,
        padding: 10,
        fontSize: 30,
        fontWeight: "bold",
    }
});

