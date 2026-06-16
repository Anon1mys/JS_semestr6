<template>
  <div class="main-container">
    <MainDescription class="main-desc"></MainDescription>

    <MainProjects
      class="main-projects"
      :selected-project="selectedProject"
      @select-project="selectProject"
    ></MainProjects>

    <ImagePanelWithText
      v-if="selectedProject"
      class="main-panel"
      :name="selectedProject.name"
      :description="selectedProject.description"
      :image="selectedProject.image"
    ></ImagePanelWithText>
  </div>
</template>

<script>
import MainDescription from './main-elements/MainDescription.vue'
import MainProjects from './main-elements/MainProjects.vue'
import ImagePanelWithText from './main-elements/ImagePanelWithText.vue'

import project1 from '../assets/project1.svg'
import project2 from '../assets/project2.svg'
import project3 from '../assets/project3.svg'

export default {
  name: 'AppMain',
  components: {
    MainDescription,
    MainProjects,
    ImagePanelWithText
  },
  data() {
    return {
      selectedProject: {
        name: 'Project1',
        description: 'Aplikacja ToDo napisana w Vue.js. Lista zadań z możliwością dodawania i oznaczania elementów.',
        image: project1
      }
    }
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
}

.main-desc {
  margin: 15px auto;
}

.main-projects {
  margin: 30px auto 15px;
}

.main-panel {
  margin: 20px auto;
}
</style>
