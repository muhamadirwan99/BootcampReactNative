import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'

const Card = ({ title }) => {
    return (
      <TouchableOpacity style={styles.Button2}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };


export default function LoginScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image 
                    style = {styles.logo}
                    source = {require('./assets/logosanber.png')}
                />
                <Text style = {styles.text}>Login</Text>
            </View>

            <View style = {styles.form}>
                <View>
                    <Text style = {styles.labelText}>Username / Email</Text>
                    <TextInput style = {styles.input}></TextInput>
                </View>
                <View style = {styles.password}>
                    <Text style = {styles.labelText}>Passsword</Text>
                    <TextInput style = {styles.input}></TextInput>
                </View>
            </View>

            <View style = {styles.upperContainer}>
                <View style = {styles.containerButton}>
                   
                    <TouchableOpacity style={styles.appButtonContainerMasuk}>
                        <Text style={styles.appButtonTextMasuk}>Masuk</Text>
                    </TouchableOpacity>
                
                    <Text style = {styles.txtAtau}>atau</Text>
                   
                    <TouchableOpacity style={styles.appButtonContainerKeluar}>
                        <Text style={styles.appButtonTextKeluar}>Keluar</Text>
                    </TouchableOpacity>
                 
                    
                    
                   
                     
                </View>
                
            </View>
        </View>
       
    
      );
    }
    
    const styles = StyleSheet.create({
      container: {
          marginTop: 63,
          padding: 20,
      },
      logo: {
          height: 80,
          width: 300,
      },
      header: {
        alignItems: 'center'
      },
      text: {
        marginTop: 60,
        color: '#003366',
        fontSize: 24,
        fontFamily: 'Roboto'
      },
      form: {
        marginTop: 40,
      },
      input: {
          borderWidth: 1,
          height: 40,
          paddingLeft: 10,
          borderColor: '#003366',
      },
      labelText: {
        color: '#003366',
        fontFamily: 'Roboto'
      },
      password: {
          marginTop: 16
      },
      appButtonContainerMasuk: {
        backgroundColor: "#3EC6FF",
        borderRadius: 16,
        paddingVertical: 8,
      },
      appButtonTextMasuk: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 
      appButtonContainerKeluar: {
        backgroundColor: "#003366",
        borderRadius: 16,
        paddingVertical: 8,
      },
      appButtonTextKeluar: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 
      containerButton: {
        width: 140
      },
      upperContainer: {
          marginTop: 32,
          alignItems: 'center'
      },
      txtAtau: {
        color: '#3EC6FF',
        fontSize: 24,
        marginTop: 16,
        marginBottom: 16,
        alignSelf: 'center'
      }
    });