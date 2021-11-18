import React from 'react'
import { TouchableOpacity, safeAreaView, View, Text, StyleSheet, Image, style, Button, StatusBar, statusBarStyle, statusBarTransition, FlatList } from 'react-native'




export default function payment13(navigation) {




    return (

        <View style={styles.maincontainer}>

            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={true} />


            <View style={styles.header}>
                <Image
                    style={{ width: 20, height: 15, resizeMode: 'contain' , marginLeft:15, marginTop:15 }}
                    source={require('../../assets/back-arrow.png')}    />
                <Image
                    style={{ width: 35, height: 28, resizeMode: 'contain' , marginRight:15, marginTop:10 }}
                    source={require('../../assets/User_9.png')}    />
            </View>

            <View style={styles.subcontainer}>

                <View style={styles.child}>
                    <Image
                        style={{ width: 30, height: 45, resizeMode: 'contain' }}
                        source={require('../../assets/greentick.png')}

                    />
                    <Text style={{ marginTop: 13, marginLeft: 10 }}>Appoiment Confirmed</Text>

                </View>


                <View style={styles.date} >
                    <Text style={{ fontSize: 20 }}>
                        Thu , 09 Apr  08:00
                    </Text>

                </View>

                <View style={styles.Drname}>
                    <Text style={{ fontSize: 15 }}>Dr Clara odding - Dentist</Text>

                </View>

                <View>

                    <Image
                        style={{ width: 20, height: 20, resizeMode: 'contain', marginBottom: -25, marginVertical: -5, paddingLeft: 45, position: 'absolute' }}
                        source={require('../../assets/location_icon.png')}

                    />

                    <Text style={{ color: 'grey', paddingLeft: 15, marginLeft: 30, marginVertical: -1, paddingBottom: 25, marginBottom: 10, marginTop: -15 }}>
                        2 Rue de Ermesinde {'\n'}
                        Frisange - Luxembourg 3
                    </Text>
                </View>


                <View
                    style={{
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 1,
                    }}
                />

            </View>

            <View style={styles.centerImage}>



                <Image
                    style={{ width: 250, height: 250, resizeMode: 'contain' }} source={require('../../assets/paymentSucces.png')}

                />

            </View>

            <View style={styles.button}>
                <TouchableOpacity


                >
                    <Text>Press Here</Text>
                </TouchableOpacity>

            </View>

            <View>
                <Text style={{textAlign:'center' , paddingVertical:20}} >
                 2 days 3 hours <Text style={{color:'grey'}}>before the appoiment</Text>
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    maincontainer: {
        backgroundColor: '#ecf1fa'
    },


    subcontainer: {

    },
    child: {

        flexDirection: 'row',
        paddingLeft: 25

    },

    date: {
        backgroundColor: 'white',
        paddingTop: 10,
        marginTop: 20,
        width: 200,
        height: 50,
        borderRadius: 15,
        paddingLeft: 10,
        marginLeft: 25

    },
    Drname: {
        paddingTop: 18,
        marginTop: 10,
        width: 200,
        height: 70,
        borderRadius: 15,
        paddingLeft: 15,
        marginLeft: 25
        ,
        flexDirection: 'row'
    }
    ,
    centerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25

    },
    button: {

        marginLeft: 20,
        justifyContent: "center",

        alignItems: "center",
        padding: 15,
        width: 315,
        borderRadius: 10,
        marginTop: 35,
        backgroundColor: "#2a2ac0",


    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    }


});

