import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import data from "./data"

export default function App() {

  const [search,setSearch]=useState("")
  const [searchNow,setSearchNow]=useState(false)
  const [curList,setCurList] = useState([])
  const[counter,setCounter] = useState(0);
  const handleSearch=()=>{
    setSearchNow(!searchNow)
  
  }
 
  const handleAdd=()=>{
    if(counter>data.length){
      alert("Cannot add more elements");
      return;
    }
    setCurList([...curList,data[counter]]) 
    setCounter(counter+1)
  }
  return (
    <View style={styles.container}>
    <View style={styles.subContainer}>
      <View style={styles.header}>
        
        <TextInput style={styles.textInput} value={search} onChangeText={(e)=>setSearch(e)} placeholder="Search"/>
     
      
      <View style={styles.headerRight}>
      <Text style={styles.text}  onClick={handleSearch}>Search</Text>
       <TouchableOpacity ><Text style={styles.add} onClick={()=>handleAdd()}>+</Text></TouchableOpacity>
      </View>
      </View>
      <View style={styles.list}>
        { curList.length==0? <Text>List is Empty!</Text>:<Text></Text>}
{ !searchNow ? (
  
  curList.map((item)=>(
    <Text key={item} style={styles.item}>{item}</Text>
  ))):(
 curList.filter(item=>{
    //  if(search===item || search===item.toLowerCase()){
    //   return item;
    if(item.includes(search) ){
return item;
     }
    }).map((item)=>
    <Text style={styles.item} key={item}>{item}</Text>)
  
  )     
}
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  marginTop:"20%",
  marginHorizontal:5,
  height: "100%",
  width: "100%",
  },
  subContainer:{
width: "90%",
marginHorizontal:"auto",
borderWidth:1,
borderColor:"gray",
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:4,
    paddingVertical:8,
    alignItems:"center",
    borderBottomColor:"gray",
    borderBottomWidth:1,
  },
  textInput:{
    fontSize:20,
   flex:1,
   borderWidth:1,
   borderColor:"gray",
   borderRadius:12,
   padding: 4
  },
  add:{
    fontSize:34
  },
  headerRight:{
    flexDirection:"row",
    paddingHorizontal:2,
    alignItems:"center",
    
  },
  text:{fontSize:16,
  marginHorizontal:6},
  list:{
    marginLeft:20,
    marginVertical:6,
   
    height:"80%",
    width:"80%",
  },
  item:{
    
    fontSize:18,
    padding:2,
    borderBottomWidth:1,
    borderBottomColor:"gray"
  }
});
