<template>
  <div class="project-container" @click="toProject" 
       :style="{ backgroundColor: isHover ? 'white' : bgColor,
                 borderColor: isHover ? bgColor : 'transparent'}"
       @mouseenter="isHover = true"
       @mouseleave="isHover = false">
    <div class="project-name"
         :style="{ color: isHover ? bgColor : 'white',
                   transform: isHover ? 'scale(1.12)' : 'scale(1)'}">
      {{ projectName }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'project',
  props: {
    projectName: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const isHover = ref(false)
    const toProject = () => {
      location.href = props.projectLink
    }
    return {
      toProject,
      isHover
    }
  }
}
</script>

<style lang="less"  scoped>
.project-container {
  cursor: pointer;
  @media screen and (min-width: 1025px) {
    width: 320px;
    height: 240px;
    border-radius: 10px;
    margin: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 240px;
    height: 180px;
    border-radius: 8px;
    margin: 8px;
  }
  @media screen and (min-width: 280px) and (max-width: 767px){
    width: 240px;
    height: 120px;
    border-radius: 5px;
    margin: 5px;
  }
  display: inline-flex;
  border-width: 3px;
  border-style: solid;
  transition: all 600ms ease-out;

  .project-name {
    margin: auto;
    font-size: 2rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}

</style>