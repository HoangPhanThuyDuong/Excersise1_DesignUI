import React, {useState} from "react";
import { Button, Text, View } from "react-native";

const Cat =(props) => {
    const[isHungry, setIsHungry] = useState(true);
    return (
        <View>
            <Text>
                I am {props.name}, and i am {isHungry ? "Hungry" : "full"}
            </Text>
            <Button
                onPress = {()=>{
                    setIsHungry(false);
                }}
                disabled ={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
        </View>
    )
}
const Cafe = () =>{
    return (
        <>
            <Cat name = "Đặng trọng Đại"/>
            <Cat name = "Dương Thần"/>
        </>
    );
}
export default Cafe;