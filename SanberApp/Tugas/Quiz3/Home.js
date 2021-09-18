import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import AddScreen from '../Tugas18/Pages/AddScreen';
import { Data }from './data'
export default function Home({route, navigation}) {
    const { username } = route.params;
    const [totalPrice, setTotalPrice] = useState(0);

    const currencyFormat=(num)=> {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };
    
    const updateHarga =(price)=>{
        console.log("Update Price : " + price);
        const temp = Number(price) + totalPrice;
        console.log(temp)
        setTotalPrice(temp)
        
        //? #Bonus (10 poin) -- HomeScreen.js --
        //? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
            
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:"space-between", padding: 16}}>
                <View>
                    <Text>Selamat Datang,</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>{username}</Text>
                </View>
                <View>
                    <Text>Total Harga:</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}> {currencyFormat(totalPrice)}</Text>
                </View>
            </View>
            <View style={{alignItems: 'center',marginBottom: 20, paddingBottom: 60}}>{
            /* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->
           

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */
            
                <FlatList 
                    data = {Data}
                    keyExtractor = {(item) => item.id}
                    numColumns={2}
                    renderItem = {({item}) => {
                        return(
                            <View style={styles.subContainer}>
                                <Image 
                                    style = {{height: 100, width: 100}}
                                    source = {item.image}
                                />
                                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.itemName} >
                                    {item.title}
                                </Text>
                                <View style={styles.itemDetail}>
                                    <Text>
                                        {currencyFormat(Number(item.harga))}
                                    </Text>
                                    <TouchableOpacity style={styles.itemButton} onPress = {() => updateHarga(Number(item.harga))}>
                                        <Text style={styles.buttonText}>Beli</Text>
                                    </TouchableOpacity>
                                </View>
                          </View>
                        )
                    }}
                />

            }
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor:'white', 
    },  
    content:{
        width: 150,
        height: 220,        
        margin: 5,
        borderWidth:1,
        alignItems:'center',
        borderRadius: 5,
        borderColor:'grey',    
    },
    subContainer: {
        margin: 8,
        padding: 10,
    },
    itemDetail: {
        alignItems: 'center'
    },
    itemButton: {
        width : "75%",
        padding : 8,
        marginTop : 10,
        borderRadius : 10, 
        backgroundColor : "#082B59",
        alignItems : "center",
        justifyContent : 'center'
      },
      buttonText: {
        color:"white",
        fontSize : 15
      },
        
})
