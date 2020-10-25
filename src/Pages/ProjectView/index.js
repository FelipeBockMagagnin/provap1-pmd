import React from "react";
import ProjectForm from "../ProjectForm";
import ProjectTable from "../ProjectTable";
import { ProjectContextProvider } from "../../Components/ProjectContextProvider";
import { View } from "react-native";

function ProjectView() {
  return (
    <ProjectContextProvider>
      <View>
        <ProjectForm />
        <ProjectTable />
      </View>
    </ProjectContextProvider>
  );
}
export default ProjectView;