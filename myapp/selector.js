import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, View,Text } from "react-native"


export const Selector=()=>{
const nav =useNavigation();
    return(

        <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:`green`}}>
            <Text style={{fontSize:54}}>Takim Seciniz :</Text>

<TouchableOpacity style={{backgroundColor:`yellow`,width:100,height:100,justifyContent:"center",alignItems:"center",marginTop:60}}
onPress={()=>nav.navigate('oyuncu_1') }>

    <Text style={{fontSize:24}}>oyuncu 1</Text>

</TouchableOpacity>
           
<TouchableOpacity style={{backgroundColor:`#eaea`,width:100,height:100,justifyContent:"center",alignItems:"center",marginTop:60}}
onPress={()=>nav.navigate('oyuncu_2') }>
    
    <Text style={{fontSize:24}}>oyuncu 2</Text>

</TouchableOpacity>
           
        </View>
    )
}