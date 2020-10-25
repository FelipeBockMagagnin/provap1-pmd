import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectView from "./src/Pages/ProjectView";
import { ProjectContextProvider } from './src/Components/ProjectContextProvider';
export default function App() {
  return (
    <View style={styles.container}>
      <ProjectContextProvider>
        <View style={{marginTop: 50}}>
          <Text style={{textAlign: 'center'}}>Gestão de Projetos</Text>
          <ProjectView />
        </View>
      </ProjectContextProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});