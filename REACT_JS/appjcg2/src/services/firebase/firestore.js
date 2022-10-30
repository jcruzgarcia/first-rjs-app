import {getDocs, collection, query, where } from 'firebase/firestore'
import {db} from './index'



export const getProducts = (categoryId) => {
    return new Promise ((resolve,reject) => {
        const collectionRef = categoryId
 ? query(collection (db, 'products'), where('category', '==', categoryId)) : collection (db, 'products')

 getDocs(collectionRef).then(response => {

     const productsAdapted = response.docs.map(document =>{ const data = document.data()
     return { id: document.id, ...data}

 })

 resolve(productsAdapted)
 })
 .catch(error => {
     reject(error)
 })
})
}