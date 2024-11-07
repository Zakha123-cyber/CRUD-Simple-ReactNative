import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

import appFirebase from "../credenciales";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct } from "firebase/firestore";
const db = getFirestore(appFirebase);

const ListProducts = (props) => {
  const [lista, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          const { nama, warna, stock } = doc.data();
          docs.push({
            id: doc.id,
            nama,
            warna,
            stock,
          });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [lista]);

  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate("Create")}>
        <Text style={styles.TextoBoton}>TAMBAHKAN BARANG</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.TextoTitulo}>LIST PRODUK KAMU</Text>
      </View>

      <View>
        {lista.map((list) => (
          <TouchableOpacity key={list.id} style={styles.BotonLista} onPress={() => props.navigation.navigate("Show", { productoId: list.id })}>
            <Text style={styles.Textonama}>- {list.nama}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  Boton: {
    backgroundColor: "cyan",
    height: 35,
    borderColor: "black",
    borderWidth: 1,
  },
  TextoBoton: {
    fontSize: 18,
    textAlign: "center",
  },
  TextoTitulo: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  Textonama: {
    fontSize: 16,
  },
  BotonLista: {
    backgroundColor: "#DDDDDD",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 3,
    padding: 5,
  },
});
