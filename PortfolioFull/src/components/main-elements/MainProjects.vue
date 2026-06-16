<template>
  <div class="projects-section">
    <h2>Projects</h2>
    <div class="projects-list">
      <ProjectsProject
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :active="selectedProject && selectedProject.name === project.name"
        @click="selectProject(project)"
      ></ProjectsProject>
    </div>
  </div>
</template>

<script>
import ProjectsProject from './projects/ProjectsProject.vue'
import project1 from '../../assets/project1.svg'
import project2 from '../../assets/project2.svg'
import project3 from '../../assets/project3.svg'

export default {
  name: 'MainProjects',
  components: {
    ProjectsProject
  },
  props: {
    selectedProject: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      projects: [
        {
          name: 'Project1',
          description: 'Aplikacja ToDo napisana w Vue.js. Lista zadań z możliwością dodawania i oznaczania elementów.',
          image: project1
        },
        {
          name: 'Project2',
          description: 'Strona portfolio z komponentami Vue. Zawiera opis, listę projektów i proste style CSS.',
          image: project2
        },
        {
          name: 'Project3',
          description: 'Projekt Node.js z modułami do pracy z plikami, JSON i CSV. Laboratorium backend JavaScript.',
          image: project3
        }
      ]
    }
  },
  methods: {
    selectProject(project) {
      this.$emit('select-project', project)
    }
  }
}
</script>

<style scoped>
.projects-section {
  padding: 10px;
}

h2 {
  text-align: center;
  color: #1b5e20;
  margin-bottom: 16px;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
