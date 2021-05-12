<template>
  <div class="skill-container">
    <div class="skill-power" :style="{ width: percent + '%' }">
      <span class="skill-name">{{ name }}</span>
      <span clas="skill-percent">{{ percent + '%' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill',
  props: {
    name: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

@primary-color: #42b983;

.skill-container {
  @media screen and (min-width: 1025px) {
    width: 800px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 520px;
  }
  @media screen and (min-width: 280px) and (max-width: 767px){
    width: 280px;
  }
  font-size: 1rem;
  height: 48px;
  margin-bottom: 8px;
              
  .skill-power {
    background-color: @primary-color;
    border-radius: 5px;
    color: white;
    padding: 8px;
    transition: transform 500ms ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    .skill-name {
      float: left;
      margin-left: 35px;
    }

    .skill-percent {
      text-align: center;
    }
  }

}

</style>