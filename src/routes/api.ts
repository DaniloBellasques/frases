import {Router} from 'express'
import * as apiConstroller from '../controllers/apiController'
 
 
const router = Router()
 
router.get('/ping',apiConstroller.ping)
 
// numeros aleatorios
router.get('/random',apiConstroller.random)
 
router.get('/nome/:nome',apiConstroller.nome)
 
//criando endpoint frases
router.post('/frase',apiConstroller.criarFrase)
 
router.get('/frase',apiConstroller.listarFrases)

router.get('/frase/:id',apiConstroller.pegarFrase)

router.put('/frase/:id', apiConstroller.editaFrase)

router.delete('/frase/:id', apiConstroller.excluirFrase)
 

 
export default router