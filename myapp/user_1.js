import { useContext, useEffect, useState } from 'react';
import {  Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { io } from 'socket.io-client';
import { mycontext } from './App';


export const User_1=()=>{

const erecontext =useContext(mycontext);
 
    const[yazi1,setYazi1]=useState(``);
    const[metin,setMetin]=useState(``);
      const[num ,setNum]=useState(0);
    const[name,setName]=useState(``)
 
    const[visible,setVisible]=useState(false);
    const[cvb,setCvb]=useState(``);

const[res,setRes]=useState(``);
 

    useEffect(()=>{

        socket =io('http://192.168.1.38:8080');
       
      socket.on(`user_2`,cvb => { erecontext.setMetind(cvb.yazan); setName(cvb.kullanici) } ) ;
       socket.on(`user_1`,msd =>{erecontext.setAzirmi(msd.num),setMetin(msd.ses)})

       let myTimeout = setTimeout(Restart, 5000);
       {myTimeout};
      },[metin]);

      const Restart=()=>{
       setMetin(``);
         
        }


      const Yolla_1=()=>{
        socket.emit(`user_2`,{yazi:yazi1, user:`anil:`});
      setYazi1(``);
      };
      
const Num=()=>{
    {num === 2 ? setNum(0) : null}
    setNum(pre => pre + 1)
    
socket.emit(`user_1`,{num:num ,ses:erecontext.bmetin})

}

const Forcvb=()=>{

    socket.emit(`user_3`, cvb)
}

const BrnCvb=()=>{

    socket.on(`user_4`, mse => { setRes(mse)} );
    alert(res)
}


 return(
<View style={{backgroundColor:`yellow`,flex:1}}>

 <View style ={{flex:4}}>
   
      <View style={{marginTop:4,backgroundColor:`#eaeaea`,height:40,borderRadius:32}}> 
<Text  style={{textAlign:'center'}} >{name} :{erecontext.metind}</Text> 
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

      <View style={{alignItems:'center',justifyContent:`space-between`,marginTop:56,flexDirection:`row`}}>

      <TouchableOpacity  onPress={()=> BrnCvb()}>
        <Text style={{fontWeight:`bold`,fontSize:23,color:`blue`}}>Cevaba Bak</Text>
    </TouchableOpacity>

<TouchableOpacity  onPress={()=>  Num() }>
    <Text style={{fontWeight:`bold`,fontSize:23,color:`blue`,marginRight:21}}>Ready!!</Text>
</TouchableOpacity>
      </View>

<Text>{erecontext.azirMi}</Text>
 </View> 



   <View style={{flex:2,justifyContent:'center',alignItems:'center'}}> 

<TextInput placeholder='user_1' value={yazi1} onChangeText={(elen)=> setYazi1(elen)} style={{width:300,height:70,borderWidth:3,borderRadius:23,paddingLeft:120}} />

 <TouchableOpacity onPress={()=> {Yolla_1(),setVisible(pre => !pre),setYazi1(``)}}><Text style={{fontSize:34,backgroundColor:`blue`,marginTop:5,borderRadius:23,color:`white`}}>Sor</Text></TouchableOpacity>

 
</View>
 


</View>

 )      


}