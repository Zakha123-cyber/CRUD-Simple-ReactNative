import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert} from 'react-native'

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'

const db = getFirestore(appFirebase)

export default function ShowProduct(props) {

  const [product, setProduct] = useState({})

  const getOneProduct = async(id)=>{
    try{
      const docRef = doc(db, 'products', id)
      const docSnap = await getDoc(docRef)
      setProduct(docSnap.data())
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getOneProduct(props.route.params.productoId)
  },[])

  const deleteProduct = async(id)=>{ 
    await deleteDoc(doc(db,'products', id))
    Alert.alert('Selamat', 'Produk Berhasil Dihapus')
    props.navigation.navigate('List')
  }


  return (
    <View>
      <Text style={styles.titulo} >Detail Product</Text>
      
        <Text style={styles.sub}>Nama : {product.nama}</Text>
        <Text style={styles.sub}>Warna : {product.warna}</Text>
        <Text style={styles.sub}>Stok : {product.stock}</Text>
      
      <TouchableOpacity style={styles.BotonLista} onPress={()=>deleteProduct(props.route.params.productoId)}>
         <Text style={styles.TextoNombre}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    fontSize:20
  },
  sub:{
    fontSize:16
  },
  
  TextoNombre:{
    fontSize:16,
    textAlign:'center',
    color:'white',
    
  },
  BotonLista:{
    backgroundColor:'red',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    marginBottom:3,
    padding:5,
    marginTop:5
  }
})