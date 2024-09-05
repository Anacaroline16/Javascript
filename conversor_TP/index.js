const express=require('express');
const app= express();

function efetuarCalculoTP(peso, altura ){
    let imc=peso/(altura*altura)
    return imc;
}