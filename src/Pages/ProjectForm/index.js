import React, { useContext, useEffect } from "react";
import _ from "lodash";
import { ProjectContext } from "../../Components/ProjectContextProvider";
import { useForm } from 'react-hook-form'
import { View, Text, Button, TextInput } from "react-native";

function ProjectForm() {
  const { handleSubmit, register, setValue } = useForm();
  
  useEffect(() => {
    register('nome');
    register('coordinator');
    }, [register]);

  const [, dispatch] = useContext(ProjectContext);
  const onAddProject = (data) => {
    console.log(data);

    dispatch({
      type: "ADD_PROJECT",
      payload: {
        id: _.uniqueId(10),
        name: data.nome,
        coordinator: data.coordinator
      }
    });

    setValue('nome', '');
    setValue('coordinator', '');
  };

  return (
    <View style={{ padding: 10, margin: 20 }}>
        <Text style={{marginBottom: 30}}>Adicionar Novo Projeto</Text>

        <Text>Nome:</Text> 
        <TextInput underlineColorAndroid={'#428AF8'} style={{height: 40, paddingLeft: 6}}  onChangeText={text => setValue('nome', text)}/>
        <Text>Cordenador:</Text> 
        <TextInput underlineColorAndroid={'#428AF8'} style={{height: 40, paddingLeft: 6}} onChangeText={text => setValue('coordinator', text)} />

        <Button style={{margin: 20}} title='Novo Projeto' onPress={handleSubmit(onAddProject)}/>
    </View>

  );
}
export default ProjectForm;