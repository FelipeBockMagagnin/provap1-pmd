import React, { useContext } from "react";
import { ProjectContext } from "../../Components/ProjectContextProvider";
import { View, Text, Button } from "react-native";

function ProjectTable() {
  const [state, dispatch] = useContext(ProjectContext);
  const delProject = id => {
    dispatch({
      type: "DEL_PROJECT",
      payload: id
    });
  };
  const onRemoveProject = () => {
    if (state.Projects[0] !== undefined) {
      // Exclui o primeiro registro
      const firstId = state.Projects[0].id;
      delProject(firstId);
    }
    else {
      alert("Não existem mais projetos");
    }
  };
  const rows = state.Projects.map(Project => (
    <View key={Project.id} style={{marginBottom: 10, borderWidth: 1, borderRadius: 10, padding: 20}}>
      <Text>Id: {Project.id}</Text>
      <Text>Nome: {Project.name}</Text>
      <Text>Cordenador: {Project.coordinator}</Text>
    </View>
  ));

  return (
    <View>
      <Text>Listagem de Projetos</Text>
      <View>{rows}</View>
      <Button title='Remover' onPress={onRemoveProject} />
    </View>
  );
}
export default ProjectTable;