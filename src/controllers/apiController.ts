import { Request, Response } from "express";
import {Frase} from '../models/Frase'

export const ping = (req:Request, res:Response) =>{

    res.json({pong:true})
}
export const random = (req:Request, res:Response) =>{

    let nRand: number = Math.floor(Math.random() * 10)
    res.json({number: nRand})
}

export const nome = (req:Request, res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome : ${nome}`})
}

export const criarFrase = async (req:Request, res:Response) =>{
    let {autor, texto} = req.body

    let novaFrase  = await Frase.create({autor,texto})

    res.json({id: novaFrase.id, autor, texto})
}

export const listarFrases = async(req:Request, res:Response) =>{
    //exibir as frases
    let lista = await Frase.findAll()
    res.json({lista})
}

export const pegarFrase = async(req:Request, res:Response)=>{
    let {id} = req.params
    let frase = await Frase.findByPk(id)

    if(frase){
        res.json({frase})
    }else{
        res.json({erro:'Frase não existe'})
    }
}

export const editaFrase = async(req:Request, res:Response)=>{
    let{id} = req.params
    let{autor,texto}= req.body
    let frase = await Frase.findByPk(id)

    if(frase){
        frase.autor = autor
        frase.texto = texto
        await frase.save()
        res.json({frase})
    }else{
        res.json({error: 'frase não existe'})
    }
}

export const excluirFrase = async(req:Request, res:Response)=>{
    let{id} = req.params
    
     await Frase.destroy({
        where:{id}
     })
     res.json({})
    
}

