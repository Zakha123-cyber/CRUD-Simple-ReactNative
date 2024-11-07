import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, ScrollView, Alert } from "react-native";

import appFirebase from "../credenciales";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct } from "firebase/firestore";

const db = getFirestore(appFirebase);

const CreateProduct = (props) => {
  const initialState = {
    nama: "",
    warna: "",
    stock: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const SaveProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
        ...state,
      });

      Alert.alert("Selamat", "Produk Berhasil Ditambahkan");
      //console.log(state)
      props.navigation.navigate("List");
    } catch {
      console.error(error);
    }
    // console.log(state);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> Create Product </Text>

      <View style={styles.inputgroup}>
        <TextInput placeholder="nama" value={state.nama} onChangeText={(value) => handleChangeText(value, "nama")} />
      </View>

      <View style={styles.inputgroup}>
        <TextInput placeholder="warna" value={state.warna} onChangeText={(value) => handleChangeText(value, "warna")} />
      </View>

      <View style={styles.inputgroup}>
        <TextInput placeholder="stock" value={state.stock} onChangeText={(value) => handleChangeText(value, "stock")} />
      </View>

      <View>
        <Button title="Simpan Produk" onPress={SaveProduct} />
      </View>
    </ScrollView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputgroup: {
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
