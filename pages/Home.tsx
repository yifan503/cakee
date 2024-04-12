import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({navigation})=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button 
            title='go to setting'
            onPress={()=>{navigation.navigate('Setting')}}></Button>
        </View>
    )
}

export default Home