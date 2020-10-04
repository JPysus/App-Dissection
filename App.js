import { StatusBar } from "expo-status-bar";
import React from "react";
import color from './color';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function App({ navigation }) {
  return (
    //JSX
      <View style={styles.container}>
        <Image
          style={styles.logoStyle}
          source={require("./assets/mobilecog.png")}
        />
        <Text style={styles.brandName}>{"App Dissection"}</Text>
        <View style={styles.btnStyle}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={function () {
            navigation.navigate("Intro");
          }}
        >
          <Text style={styles.innerText}>Explore</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.smallText}>See the insides of your mobile app</Text>
      </View>
    /*</ImageBackground>*/
  );
}

function Intro({ navigation}) {
  return (
      <View style={styles.container}>
          <Text style={styles.brandName}>{"So, what's this app about?"}</Text>
          <Text style={styles.smallText}>{
            "This app is made for audience with little to no"+
            "\nknowledge about the component structure of the mobile apps that users tend"+
            "\n to take granted for."
          }
          </Text>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={function () {

              navigation.navigate("Menu");
            }}
          >
            <Text style={styles.innerText}>Get Started</Text>
          </TouchableOpacity>
      </View>
  );
  /**///
}
function Menu({ navigation}) {
  return (
      <View style={styles.container}>

        <Image
          style={[styles.logoStyle,{marginTop:0}]}
          source={require("./assets/mobilecog.png")}
        />
        <Text style={styles.brandName}>{"App Dissection"}</Text>
        <Text style={styles.smallText}>{
          "The following list are showcasing of the most commonly used"+
          " components in creating mobile apps that users overlook."+
          "\n"}
        </Text> 
        <View style={{flexDirection:'row'}}>
          <View style={{padding:5,flexDirection:'column',textAlign:'flex-end',}}>
            <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={function () {///
                      console.log("viewC");
                      navigation.navigate("View Component");
                    }}
                  >
                  <Text style={styles.innerText}>View</Text>
            </TouchableOpacity>
            <View style={{padding:5}}/>
            <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={function () {
                    navigation.navigate("Image Component");
                  }}
                >
                <Text style={styles.innerText}>Image</Text>
                </TouchableOpacity>

                <View style={{padding:5}}/>

                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={function () {
                    navigation.navigate("Touchable Component");
                  }}
                >
                <Text style={styles.innerText}>Touchables</Text>
                </TouchableOpacity>

          </View>
          <View style={{padding:5,flexDirection:'column', alignItems:'flex-start'}}>
                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={function () {

                    navigation.navigate("Text Component");
                  }}
                >
                <Text style={styles.innerText}>Text</Text>
                </TouchableOpacity>
                <View style={{padding:5}}/>
                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={function () {
                    navigation.navigate("Button Component");
                  }}
                >
                <Text style={styles.innerText}>Button</Text>
                </TouchableOpacity>
                <View style={{padding:5}}/>
                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={function () {
                    navigation.navigate("TextInput Component");
                  }}
                >
                <Text style={styles.innerText}>TextInput</Text>
                </TouchableOpacity>
          </View>
        </View>

        <View style={{padding:5}}/>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={function () {
            navigation.navigate("ImageBackground Component");
          }}
        >
        <Text style={styles.innerText}>ImageBackground</Text>
        </TouchableOpacity>
      </View>
  );
}///
function viewC({Navigation}){
  return(
      <View style= {styles.container}>
      <Text style={[styles.brandName,{marginTop:0}]}>{"<View/>"}</Text>
        <Text style={[styles.smallText,{fontWeight:'500'}]}>{
          "View is the most fundamental component in making UI as it acts as the main container that holds all the other components together."+
          "\nThe reason for this is its ability to handle layouts, and style."+
          "\n\n"
        }
        </Text>
        <View style={{flexDirection:"row"}}>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              width:150,
              backgroundColor: 'pink'
            }}
          >
            <View style={{height: 100, width: 50, backgroundColor: "blue", }} />
            <View style={{height: 50, width: 50,backgroundColor: "red",}} />
          </View>
          <View style={{padding:5}}/>
          <View
            style={{
              justifyContent:"space-evenly",
              alignItems:"center",
              flexDirection: "row-reverse",
              height: 100,
              width:150,
              backgroundColor: 'pink'
            }}
          >
            <View style={{height: 100, width: 50,backgroundColor: "blue", }} />
            <View style={{height: 50, width: 50, backgroundColor: "red", }} />
          </View>
        </View>
        <Text style={styles.smallText}>{
          "These colored rectangles are example of view component usage"+
          "\nThese rectangles are view components filled with colors"+
          " made with similar dimensions and sequence of addition to each pink view components."+
          "\nBut as you can see, the red and blue rectangles placement and order isn't the same."+
          "\n\n"
        }
        </Text> 
        <Text style={[
          styles.smallText,{
          borderColor:'black',
          color:'rgb(255,50,50)',
          fontWeight:'700',
          }]}>{
          "This is why the view component is important."+
          "\nIt allows the developers to manage how the components of the "+
          "app will be in order and placed in the screen."
        }
        </Text>

      </View>///
    );
}///
function textC({Navigation}){
  return(
      <View style= {styles.container}>
        <Text style={[styles.brandName,{marginTop:0}]}>{"<Text/>"}</Text>
        <Text style={styles.smallText}>{
          "Text is a very straightforward component, its a component for displaying text."+
          "\nIt is acts as a container and uses text layout."+
          "\nWhile text component is very simple, it certainly serves it purpose.\n"
        }
          <Text style={{backgroundColor:'violet', color:'rgb(0,255,0)',fontWeight:'700'}}>{"\nIt can"}</Text>
          <Text style={{backgroundColor:'yellow', color:'black'}}>{" give each character"}</Text>
          <Text style={[styles.smallText,{fontWeight:'500'}]}>{" of the text personality"}</Text>
          <Text style={{color:'yellow',fontWeight:'500',backgroundColor:"black"}}>{"\nwhich can help developers to convey"}</Text>
          <Text> </Text>
          <Text style={{color:"red", backgroundColor:'black'}}>{"\nm"}</Text>
          <Text style={{color:"orange",backgroundColor:'red'}}> e</Text>
          <Text style={{color:"yellow",backgroundColor:'orange'}}> s</Text>
          <Text style={{color:"green",backgroundColor:'yellow'}}> s</Text>
          <Text style={{color:"blue",backgroundColor:'green'}}> a</Text>
          <Text style={{color:"violet",backgroundColor:'blue'}}> g</Text>
          <Text style={{color:"pink",backgroundColor:'violet'}}> e</Text>
          <Text style={{color:"black",backgroundColor:'pink'}}> s</Text>
          <Text style={styles.smallText}> easier</Text>

        </Text>
      </View>///
    );
}
function imagesC({Navigation}){
  return(
      <View style= {styles.container}>
      <Text style={[styles.brandName,{marginTop:-50}]}>{"<Image/>"}</Text>
        <Text style={styles.smallText}>{
          "A React component for displaying"+
          "\ndifferent types of images"+
          "\nincluding network images, static resources, temporary local images, and images from local disk\n"
        }
        </Text>
        <View style={{flexDirection:'column'}}>
          <View style={{alignItems:"center"}}>
            <Text style={{textAlign:'center'}}>{"This example is loaded from the internet, it should show random pictures each load"}</Text>
            <Image source={{

              width:100,
              height:120,
              uri:"https://picsum.photos/200/300"
            }}/>
          </View>
          <View style={{alignItems:"center"}}>
          <Text style={{textAlign:'center'}}>{"This example is loaded from a static resource, it is a picture of a cellphone with a cog"}</Text>
            <Image style={{height:161,width:121,marginRight:-20}}source={require("./assets/mobilecog.png")}/>
          </View>

        </View>

      </View>///
    );
}

function touchC({Navigation}){
  return(
      <View style= {styles.container}>
      <Text style={[styles.brandName,{marginTop:0}]}>{"Touchable Component"}</Text>
        <Text style={[styles.smallText,{marginTop:-5}]}>{
          "Touchable components is very useful as it's a wrapper that allows the component its wrapping give onPress feedback."+
          "\nThese touchables works similar to each other but each one gives different feedback."+
          "\n"
        }
        </Text>
        <View style={{flexDirection:'row',marginTop:-10}}>
          <View style={{alignItems:"center"}}>
            <Text>{"TouchableOpacity"}</Text>
            
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={function () {
                alert("TouchableOpacity");
              }}
            >
              <Text style={styles.innerText}>PressMe</Text>
            </TouchableOpacity>
          </View>

          <View style={{padding:15}}/>
          <View style={{alignItems:"center"}}>
            <Text>{"TouchableHighlight"}</Text>
            <TouchableHighlight
              style={styles.btnStyle}
              onPress={function () {
                alert("TouchableHighlight");
              }}
            >
              <Text style={styles.innerText}>PressMe</Text>
            </TouchableHighlight>
          </View>

        </View>
          <View style={{padding:15}}/>
          <View style={{alignItems:"center",marginTop:-30}}>
            <Text>{"TouchableWithoutFeedback"}</Text>
            <TouchableWithoutFeedback onPress={function () {alert("TouchableWithoutFeedback");}}>
              <View style={styles.btnStyle}>
                <Text style={styles.innerText}>PressMe</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

        <View style={{padding:15}}/>
          <Text style={[
            styles.smallText,{
            borderColor:'black',
            color:'rgb(255,50,50)',
            fontWeight:'700',
            marginTop:-20,
            }]}>{
            "What makes touchable very useful is how it can change "+
            "the way user interact with the components on the screen."+
            " This could be apply at a picture and have an interactable picture"+
            " or turn a simple container into a button, and more."
          }
          </Text>
          <TouchableOpacity>
            <Image style={{height:161,width:121}}source={require("./assets/mobilecog.png")}/>
          </TouchableOpacity>

      </View>///
    );
}

function btnC({Navigation}){
  return(
      <View style= {styles.container}>
      <Text style={[styles.brandName,{marginTop:0}]}>{"<Button/>"}</Text>
        <Text style={styles.smallText}>{
          "Button component is simply an interactable component with pre-made customization."+
          "\nUnlike other options with wide customizability,"+
          "\nbutton component is intended to be only a component that gives feedback, interaction to the app,"+
          " with good portability to different platforms, that is wrapping a text."
        }
        </Text>
        <View style={{width:'80%'}}>
          <Button
            title="Press me"
            onPress={function(){ alert('Simple Button pressed');}}
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={function(){ alert('Button with adjusted color pressed');}}
          />

          <Button
            title="Press me"
            disabled
            onPress={function(){ Alert.alert('Cannot press this one');}}
          />

          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <Button
              title="Left button"
              onPress={function(){ alert('Left button pressed');}}
            />
            <Button
              title="Right button"
              onPress={function(){ alert('Right button pressed');}}
            />
          </View>
        </View>

      </View>///
    );
}

function textInputC({Navigation}){
  const [username, onChangeText] = React.useState("");
  return(
      <View style= {styles.container}>
        <Text style={[styles.brandName,{marginTop:0}]}>{"<TextInput/>"}</Text>
        <Text style={styles.smallText}>{
          "TextInput is a foundational component for inputting text into the app via a keyboard"+
          "\nInputs inside it can be read by the app."+
          "\nThe text currently inside is just a placeholder, it is used to guide the user what information should be inputted"
        }
        </Text>
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "So what should we call you?"
               placeholderTextColor = {color.input}
               autoCapitalize = "none"
               onChangeText = {(text)=>onChangeText(text)}
               username={username}/>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={function () {

              if(username===""){alert("Enter a name you want us to call you");return;}
              alert("Hello "+username+" !", "Hello"); 
            }}
          >
            <Text style={styles.innerText}>Enter TextInput</Text>
          </TouchableOpacity>
        </View>
      </View>///
    );
}
function imgBGC({Navigation}){
  const [username, onChangeText] = React.useState("");
  return(
      <View style= {styles.container}>
        <Text style={[styles.brandName,{marginTop:0}]}>{"<ImageBackground/>"}</Text>
        <Text style={styles.smallText}>{
          "ImageBackground component, it is a wrapper that is supposed to be placed inside a container component"+
          "\nIt doesn't have as many functionalities as the other components but it's still worth mentioning"+ 
          "\nbecause a lot of people want it"+
          "\n"
        }
        </Text>
        
        <View style={{height:'40%',width:'80%',}}>
          <ImageBackground source={require("./assets/atombg.png")} style={{flex:1,resizeMode: "cover",justifyContent: "center"}}>
            <Text style={[styles.brandName, {fontSize: 30,fontWeight:'700', color:'white'}]}>{"\n\nThis is a text with background picture in a view component"}</Text>
          </ImageBackground>
        </View>
      </View>///
    );
}

export default function Nav() {////
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: color.headerBackground,
          },
          headerTintColor: color.btn,
        }}
      >
        <Stack.Screen options={{headerShown:false}}name="App" component={App}/>
        <Stack.Screen options={{headerShown:false}}name="Intro" component={Intro}/>
        <Stack.Screen options={{headerShown:false}}name="Menu" component={Menu}/>
        <Stack.Screen name="View Component" component={viewC}/>
        <Stack.Screen name="Text Component" component={textC}/>
        <Stack.Screen name="Image Component" component={imagesC}/>
        <Stack.Screen name="Touchable Component" component={touchC}/>
        <Stack.Screen name="Button Component" component={btnC}/>
        <Stack.Screen name="TextInput Component" component={textInputC}/>
        <Stack.Screen name="ImageBackground Component" component={imgBGC}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //..List of objects..
  container: {
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
    flex: 1,
    backgroundColor:color.bg,
  },
  brandName: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: color.bigtext,
    marginBottom: 10,
  },
  smallText: {
    color: color.smalltext,
    textAlign:'center',
    alignSelf:'center',
    alignItems:'center',
    alignContent:'center',
    fontSize: 16,
    marginHorizontal: 25,
    marginVertical: 10,
  },

  logoStyle: {
    width: 120,
    height: 120,
    left: 15,
    alignSelf: "center",
  },
  btnStyle: {
    backgroundColor: color.btn,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius:20,
    alignSelf: "center",
    overflow: 'hidden',
  },

  innerText: {
    color: color.bg,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center",

    marginHorizontal: 40,
    marginVertical: 10,
  },

   input: {
      margin: 15,
      height: 40,
      alignSelf: "center",
      textAlign: "center",
      width: '50%',
      borderColor: color.btn,
      borderWidth: 1
   },

});
