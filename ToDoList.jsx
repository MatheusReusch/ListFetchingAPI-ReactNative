import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import listContext from "./listContext";

export default function ToDoList() {
  const [toDos, settoDos] = useState([]);
  const { input, setInput } = useContext(listContext);

  return (
    <View style={ { display: 'flex',
    justifyContent: 'center',
    marginTop: '10%',
    marginLeft: '-51%', } }>
      <Button
        title="Adicionar tarefa"
        onPress={() => {
          settoDos([...toDos, input]);
          setInput("");
        }}
      />
      <Button title="Remover todas as tarefas" onPress={() => settoDos([])} />
      {toDos.length === 0 ? (
        <Text style={ { marginLeft: '30%', marginTop: '5%' } }>Adicione alguma tarefa</Text>
      ) : (
        toDos.map((task) => <View><Text style={ { marginLeft: '39%', marginTop: '5%', fontSize: 20 } } key={Math.random()}>- {task}</Text><Button title="Remover tarefa" onPress={ () => settoDos(toDos.filter((tasks) => tasks !== task)) } /></View>)
      )}
    </View>
  );
}
