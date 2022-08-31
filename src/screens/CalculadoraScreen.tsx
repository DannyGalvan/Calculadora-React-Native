import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { ButtonLarge } from '../components/ButtonLarge';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { input,
        result,
        limpiar,
        concatenar,
        positivoNegativo,
        removeLatest,
        sumar,
        restar,
        dividir,
        multiplicar,
        calcular,} = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {result !== '0' ?  <Text style={styles.subResultado}>{result}</Text> : null}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{input}</Text>

      <View style={styles.fila}>
        <ButtonCalc title="C" fondo='gray' color='#000' onClick={limpiar}/>
        <ButtonCalc title="+/-" fondo='gray' color='#000' onClick={positivoNegativo}/>
        <ButtonCalc title="󠀥Del" fondo='gray' color='#000' onClick={removeLatest}/>
        <ButtonCalc title="÷" fondo='#ff9427' color='#fff' onClick={dividir}/>
      </View>

      <View style={styles.fila}>
        <ButtonCalc title="7" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('7')}/>
        <ButtonCalc title="8" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('8')}/>
        <ButtonCalc title="9" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('9')}/>
        <ButtonCalc title="x" fondo='#ff9427' color='#fff' onClick={multiplicar}/>
      </View>

      <View style={styles.fila}>
        <ButtonCalc title="4" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('4')}/>
        <ButtonCalc title="5" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('5')}/>
        <ButtonCalc title="6" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('6')}/>
        <ButtonCalc title="-" fondo='#ff9427' color='#fff' onClick={restar}/>
      </View>

      <View style={styles.fila}>
        <ButtonCalc title="1" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('1')}/>
        <ButtonCalc title="2" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('2')}/>
        <ButtonCalc title="3" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('3')}/>
        <ButtonCalc title="+" fondo='#ff9427' color='#fff' onClick={sumar}/>
      </View>

      <View style={styles.fila}>
        <ButtonLarge title="0" fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('0')}/>
        <ButtonCalc title="." fondo='#2d2d2d' color='#fff' onClick={()=>concatenar('.')}/>
        <ButtonCalc title="=" fondo='#ff9427' color='#fff' onClick={calcular}/>
      </View>

    </View>
  )
}

