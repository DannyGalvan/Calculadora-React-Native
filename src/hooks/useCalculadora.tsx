import React, {useState, useRef} from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [input, setinput] = useState('0');
    const [result, setResult] = useState('');
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = ()=>{
        setinput('0');
        setResult('0')
    }

    const concatenar = (text:string)=>{
       if (input.includes('.') && text === '.') {
         return
       }

       let newText;

       if (input.startsWith('0') || input.startsWith('-0')) {

        if (text === '.') {
            newText = input + text;
            setinput(newText);
        }else if (text === '0' && input.includes('.')) {
            newText = input + text;
            setinput(newText);
        }else if (text !== '0' && !input.includes('.')) {
            newText = text;
            setinput(newText);
        }else if (text === '0' &&  !input.includes('.') ) {
            newText = input;
            setinput(newText);
        }else{
            newText = input + text;
            setinput(newText);
        }

       }else{
        newText = input + text;
        setinput(newText);
       }
       
    }

    const positivoNegativo = () =>{
        if (input.includes('-')) {
            setinput(input.replace('-',''))
        }else{
            setinput(`-${input}`)
        }
    }

    const removeLatest = ()=>{
        let newText;
       if (input === '0' || input.length <= 1 || input.length <= 2 && input.includes('-') ) {
        newText = '0';
        setinput(newText)
       }else{
        newText = input.substring(0, input.length - 1);
        setinput(newText)
       }
    }

    const changeResult = ()=>{
        if (input.endsWith('.')) {
            setResult(input.substring(0,input.length-1));
        }else{
            setResult(input);
        }
        setinput('0');
    }

    const dividir = ()=>{
        changeResult();
        ultimaOperacion.current = Operadores.dividir;

    }

    const multiplicar = ()=>{
        changeResult();
        ultimaOperacion.current = Operadores.multiplicar;

    }

    const restar = ()=>{
        changeResult();
        ultimaOperacion.current = Operadores.restar;

    }

    const sumar = ()=>{
        changeResult();
        ultimaOperacion.current = Operadores.sumar;

    }

    const calcular = () =>{
        const num1 = Number(input);
        const num2 = Number(result);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setinput(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setinput(`${num2 - num1}`);
                break;
            case Operadores.dividir:
                setinput(`${num2 / num1}`);
                break;
            case Operadores.multiplicar:
                setinput(`${num1 * num2}`);
                break;
            default:
                setinput(`${num1 + num2}`);      
                console.log(num1, num2);         
                break;
        }
        setResult('0');
        ultimaOperacion.current = 0;
    } 

    return {
        input,
        result,
        limpiar,
        concatenar,
        positivoNegativo,
        removeLatest,
        changeResult,
        sumar,
        restar,
        dividir,
        multiplicar,
        calcular,
    }
}


