 
import { createContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User_1 } from './user_1';
import { User_2 } from './user_2';
import { Selector } from './selector';


export const mycontext =createContext();
export default function App() {
  
 const Stack =createNativeStackNavigator();
const[metind,setMetind]=useState();

const[bmetin,setBmetin]=useState(``);
const[azirMi,setAzirmi]=useState(0);
 const[aain,setaain]=useState(0);

if(azirMi === 2 ){
  setaain(pre => pre + 1);
  setAzirmi(0);
}


useEffect(()=>{
 let rndm= Math.floor(Math.random() * 11);

 console.log(rndm)

  switch(rndm){
    case 1:
  setBmetin(`Dünyanın en hızlı hayvanı Çita'dır. Hızı saate 100 km.'ye ulaşır.
. Dünyanın en hızlı kuşu Boğazlı Kırlangıç'tır. 3 saniye süreyle saatte 128 km. sürate ulaşmıştır.
. İyi bakılan ve erken yaşlarda kısırlaştırılmış bir tavşan 8 ila 12 sene yaşar.`);
  break;
    
    case 2:
      setBmetin(` Kediler 100 değişik ses, köpekler ise 10 ses çıkartabilirler.
. Son 4000 sene içerisinde herhangi yeni hayvan evcilleştirilmemiştir.
. Bir pire, kendi büyüklüğünün 150 kat yüksekliğine zıplayabilir. Bu oranı tutturmak için insanın yaklaşık 30 metre zıplaması gereklidir.`);
      break   ;

      case 3:
        setBmetin(` Atlar bir aya kadar ayakta kalabilirler.
. Kedilerin herbir kulağında 32 adele vardır.
. Bir inek hayatı boyunca yaklaşık 200.000 bardak süt üretir. `);
        break   ;
        case 4:
          setBmetin(`. Fare, bir deveden bile daha uzun süre susuz kalabilir.
. Her sene Amerika'daki hayvan bakım yerleri 30.000 kedi ve köpeği uyutma mecburiyetinde kalıyorlar.
. Hastalanmayan tek hayvan köpek balıklarıdır. `);
          break   ;
          case 5:
            setBmetin(`. 2.600 değişik cins kurbağa vardır.
. Yılanlar duyamaz.
. Karıncalar uyumaz.  `);
            break   ;
            case 6:
              setBmetin(`. Zürafalar yüzemez.
. Kutup ayıları solaktır.
. Kirpiler suda batmaz.  `);
              break   ;
              case 7:
                setBmetin(` . Yetişkin bir ayı, bir at kadar hızlı koşabilir.
. Atların, insanlardan 18 tane fazla kemiği vardır.
. Fareler kusamaz. `);
                break   ;
                case 8:
                  setBmetin(`  Zürafalar 35 cm. uzunlukta siyah bir dile sahiptirler.
. Yunuslar gözleri açık uyurlar.
. Kangurular geri geri yürüyemezler. `);
                  break   ;
                  case 9:
                    setBmetin(`  Baykuş, mavi rengi görebilen tek kuştur.
. Dünyada insan başına düşen karınca sayısı 1 milyondur.
. Bir karıncanın koku alma yeteneği en az bir köpeğin ki kadar gelişmiştir. `);
                    break   ;
                    case 10:
                      setBmetin(`. Penguen yüzebilen, ama uçamayan tek kuştur.
. Dünyada en tehlikeli hayvan sivrisinektir. Çünkü insanların ölümüne en fazla sebep olan hayvandır.
. Hipopotamlar ağızlarını içine 1.20 cm.'lik bir çocuğun sığabileceği kadar geniş açabilirler.  `);
                      break   ;
                      case 11:
                        setBmetin(`. Bir sineğin hızı saatte sekiz kilometredir.
. Zürafaların ses telleri yoktur.
. İnsanları parmak izinden, köpekleri ise burun izinden tanımak mümkündür. `);
                        break   ;
                                                                                          
  }

   

},[aain])

 
 


  return (
    <mycontext.Provider value={{azirMi,metind,setMetind,bmetin,setAzirmi,setBmetin}}> 
     <NavigationContainer >
<Stack.Navigator>
  <Stack.Screen name='takim_sec' component={Selector} />
<Stack.Screen name='oyuncu_1' component={User_1} />
<Stack.Screen name='oyuncu_2' component={User_2} />
</Stack.Navigator>
     </NavigationContainer>
     </mycontext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
