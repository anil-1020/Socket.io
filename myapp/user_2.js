import { useContext, useEffect, useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { io } from 'socket.io-client';
import { mycontext } from './App';




export const User_2=()=>{

const erecontext =useContext(mycontext)

    const[yazi,setYazi]=useState(``);
    const[metin,setMetin]=useState([]);
    const[num ,setNum]=useState(0);
  const[name,setName]=useState(``);
  const[visible,setVisible]=useState(false);
  const[cvb,setCvb]=useState(``);
  const[res,setRes]=useState(null)

useEffect(()=>{
socket=io('http://192.168.1.38:8080');
socket.on(`user_2`,mse =>  { erecontext.setMetind(mse.yazan);setName(mse.kullanici) }  )
    socket.on(`user_1`,msa=>{erecontext.setAzirmi(msa.num), setMetin(msa.ses)})

    let myTimeout = setTimeout(Restart, 5000);
    {myTimeout};
},[metin])

const Restart=()=>{
  setMetin(``);
     
    }

    const Forcvb=()=>{

        socket.emit(`user_4`, cvb)
    }
    
    const BrnCvb=()=>{
    
        socket.on(`user_3`, mse => { setRes(mse)} );
        alert(res);
    }
    

const Yolla=()=>{
    socket.emit(`user_2`,{yazi:yazi,user:`user_2: `});
  setYazi(``);
  
   
  };
    

  const Num=()=>{
    {num === 2 ? setNum(0) : null } 
setNum(pre=> pre + 1)
 
socket.emit(`user_1`, {num:num , ses:erecontext.bmetin})
  }

return(
 <View style={{backgroundColor:`#eaea`,flex:1}}>

 
   <View style ={{flex:4}}>
    
   
       <View style={{marginTop:4,backgroundColor:`#eaeaea`,height:60,borderRadius:32,justifyContent:'center',alignItems:'center'}}> 
          <Text style={{textAlign:'center',fontSize:23}}> {name} :{erecontext.metind}</Text>
       </View>

 <Modal
 animationType='slide'
 transparent={true}
 visible={visible}
 >
                 <View style ={{flex:1 ,backgroundColor:`purple`,alignItems:'center',justifyContent:'center'}}>

    <Text style={{color:`white`,fontSize:40}}>Cevabi enterleyiniz:</Text>

     <TextInput style={{width:300,height:50,borderWidth:3}} 
            value={cvb} onChangeText={(elen)=>   setCvb(elen.toLowerCase())} />

    <Text>{cvb}</Text>

    <TouchableOpacity  style={{width:120,height:50,backgroundColor:`blue`,alignItems:'center',justifyContent:'center'}}  onPress={()=> {setVisible(pre => !pre),setCvb(``),Forcvb() }}>
        <Text style={{color:`white`}}>Tamamdir</Text>
     </TouchableOpacity>
                      </View>

 </Modal>


       <View style={{backgroundColor:`white`,width:300,height:300,marginTop:21,marginLeft:28,justifyContent:'center',alignItems:'center'}}>   
           <Text>{metin}</Text>
       </View>
 
<View style={{alignItems:`center`,justifyContent:`space-between`,marginTop:56,flexDirection:`row`}}>
 
<TouchableOpacity  onPress={()=> BrnCvb()}>
        <Text style={{fontWeight:`bold`,fontSize:23,color:`blue`}}>Cevaba Bak</Text>
    </TouchableOpacity>


    <TouchableOpacity  onPress={()=>  Num()}>
        <Text style={{fontWeight:`bold`,fontSize:23,color:`blue`,marginRight:21}}>Ready!!</Text>
        <Text>{erecontext.azirMi}</Text>
    </TouchableOpacity>
</View>

    </View> 

   <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 

<TextInput placeholder='user_2' value={yazi} onChangeText={(elen)=> setYazi(elen)} style={{width:300,height:70,borderWidth:3,borderRadius:23,paddingLeft:120}} />

 <TouchableOpacity onPress={()=> {Yolla(),setVisible(pre => !pre) } }><Text style={{fontSize:34,backgroundColor:`blue`,marginTop:5,borderRadius:18,color:`white`}}>Sor</Text></TouchableOpacity>

</View>
 


</View>
)

}