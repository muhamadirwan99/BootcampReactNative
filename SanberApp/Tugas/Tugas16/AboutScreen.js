import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native'

export default function LoginScreen() {
    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.containerCenter}>
                    <Text style = {styles.txtJudul}>Tentang Saya</Text>
                    <Image
                        style = {styles.ava}
                        source = {require('./assets/ava.png')}
                    />
                    <Text style = {styles.txtNama}>Muhamad Irwan Ramadhan</Text>  
                    <Text style = {styles.txtJob}>React Native Developer</Text>         
                </View>
                <View style = {styles.containerPorto}>
                    <Text style = {styles.txtPorto}>Portofolio</Text>
                    <View style={{marginTop:8, borderBottomColor: '#003366', borderBottomWidth: 1,}}/>
                    <View style = {styles.containerRow}>
                        <View style = {styles.containerIsi}>
                            <Image
                                source = {require('./assets/icon1.png')}
                            />
                            <Text style = {styles.txtUser}>@muhamadirwan99</Text>
                        </View>
                        <View style = {styles.containerIsi}>
                            <Image
                                source = {require('./assets/icon2.png')}
                            />
                            <Text style = {styles.txtUser}>@muhamadirwan99</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.containerPorto}>
                    <Text style = {styles.txtPorto}>Hubungi Saya</Text>
                    <View style={{marginTop:8, borderBottomColor: '#003366', borderBottomWidth: 1,}}/>
                    <View style = {styles.containerColumn}>
                        <View style = {styles.containerIsiCP}>
                            <Image 
                                source = {require('./assets/fb.png')}
                            />
                            <Text style = {styles.txtCP}>Muhamad Irwan</Text>
                        </View>
                        <View style = {styles.containerIsiCP}>
                            <Image 
                                source = {require('./assets/ig.png')}
                            />
                            <Text style = {styles.txtCP}>@muhamadirwan99</Text>
                        </View>
                        <View style = {styles.containerIsiCP}>
                            <Image 
                                source = {require('./assets/twitter.png')}
                            />
                            <Text style = {styles.txtCP}>@muhamadirwan13</Text>
                        </View>                                  
                    </View>
                </View>
            </View>
        </ScrollView>
    
      );
    }
    
    const styles = StyleSheet.create({
      container: {
          paddingTop: 64,
          paddingLeft: 8,
          paddingRight: 8,
          paddingBottom: 64
      },
      txtJudul: {
          fontSize: 24,
          fontFamily: 'Roboto',
          color: '#003366',
          fontWeight: 'bold'
      },
      containerCenter: {
          alignItems: 'center'
      },
      ava: {
        marginTop: 12,
      },
      txtNama: {
          marginTop: 24,
          color: '#003366',
          fontWeight: 'bold',
          fontSize: 20
      },
      txtJob: {
          marginTop: 8,
          color: '#3EC6FF',
          fontWeight: 'bold',
          fontSize: 16,
      },
      containerPorto: {
          marginTop: 16,
          backgroundColor: '#EFEFEF',
          borderRadius: 16,
          padding: 8,
      },
      txtPorto: {
          color: '#003366',
          fontSize: 16
      },
      containerRow: {
          padding: 17,
          marginRight: 20,
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
      },
      containerIsi: {
          marginRight: 15,
          marginLeft: 20,
          alignItems: 'center'
      },
      txtUser: {
          marginTop: 8,
      },   
      containerColumn: {
          flexDirection: 'column',
          alignSelf: 'center',
      },
      containerIsiCP: {
          marginTop: 18,
          flexDirection: 'row',
          alignItems: 'center'
      },
      txtCP: {
          marginLeft: 16
      }   
    });