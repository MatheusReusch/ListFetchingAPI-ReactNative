import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, SafeAreaView } from "react-native";

export default function Cocktail(props) {
    const [cocktail, setCocktail] = useState('')
 
    useEffect(() => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setCocktail(data.drinks[0]))
      console.log(cocktail)
    }, [])

    return (
      cocktail !== '' ?  
      <View style={styles.container}>  
        <Text style={ { textAlign: 'center', fontSize: 20 } }>Cocktail</Text>
        <Text style={ { textAlign: 'center' } }>Nome: {cocktail.strDrink}</Text>
        <Text style={ { textAlign: 'center' } }>Alcólico: {cocktail.strAlcoholic}</Text>
        <Text style={ { textAlign: 'center' } }>Categoria: {cocktail.strCategory}</Text>
        <Image style={{width: 400, height: 400}} source={{ uri: cocktail.strDrinkThumb.toString() }} />
        <SafeAreaView>
        <Text style={ { textAlign: 'center', marginBottom: '5%' } }>Instruções: {cocktail.strInstructions}</Text>
        <Button style={ { marginBottom: '7%' } } title="Buscar outro drink" onPress={ () => {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then((response) => response.json())
            .then((data) => setCocktail(data.drinks[0]))
        } } />
        </SafeAreaView>
      </View> : <Text>Carregando...</Text>
    )
}

const styles = {
    container: {
        marginLeft: "-55%",
        marginTop: "10%"
    }
}
