<template>
  <div class="container">
    <div class="header clearfix">
      <div class="header-left">
        <p class="profile-icon">Coody'site</p>
      </div>
      <div class="header-right">
        <a href="https://github.com/W-David">Github</a>
        <span>&nbsp;/&nbsp;</span>
        <a href="http://coody.xyz/">博客</a>
      </div>
    </div>
    <swiper :direction="'vertical'"
            :speed="680"
            :space-between="0"
            :mousewheel="true"
            :slide-per-view="1"
            @swiper="onSwiper"
            @slideChangeTransitionEnd="onSlideChangeTransitionEnd">
      <swiper-slide>
        <div class="slide-page page01-container">
          <ul class="bg-slideshow-container">
            <li v-for="sty in stys" :key="sty.id">
              <span :style="{ backgroundImage: 'url(' + sty.url + ')', animationDelay: sty.delay  + 's' }" class="bg-slide"></span>
            </li>
          </ul>
          <div class="profile-container">
            <h1 class="profile-text">Hi,Coody</h1>
          </div>
          <div class="down-icon-container">
            <img class="down-img" src="../assets/down-icon.svg" alt="no image" @click="onSecondPage">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-page page02-container">
          <!-- <div class="page02-bg-cover"></div> -->
          <transition enter-active-class="animate__animated animate__backInDown"
                      leave-active-class="animate__animated animate__fadeOut animate__faster">
            <span class="person-skill" v-if="currentPage === 1">个人技能</span>
          </transition>
          <div class="skill-list-container">
            <transition enter-active-class="animate__animated animate__lightSpeedInLeft animate__delay-1s">
              <skill name="HTML" :percent="85" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInRight animate__delay-1s">
              <skill name="CSS" :percent="80" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInLeft animate__delay-1s">
              <skill name="JS" :percent="75" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInRight animate__delay-1s">
              <skill name="VUE" :percent="75" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInLeft animate__delay-1s">
              <skill name="JAVA" :percent="65" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInRight animate__delay-1s">
              <skill name="C++" :percent="50" v-if="currentPage === 1"></skill>
            </transition>
            <transition enter-active-class="animate__animated animate__lightSpeedInLeft animate__delay-1s">
              <skill name="PYTHON" :percent="65" v-if="currentPage === 1"></skill>
            </transition>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-page page03-container">
          <!-- <div class="page03-bg-cover"></div> -->
          <transition enter-active-class="animate__animated animate__jackInTheBox"
                      leave-active-class="animate__animated animate__fadeOut animate__faster">
            <span class="person-project" v-if="currentPage === 2"></span>
          </transition>
          <div class="project-list-container">
            <div class="project-group">
              <transition enter-active-class="animate__animated animate__fadeInTopLeft">
                <project projectName="zhiye" 
                         projectLink="http://1.116.238.106/zhiye" 
                         bgColor="#0d6efd"
                         v-if="currentPage === 2">
                </project>
              </transition>
              <transition enter-active-class="animate__animated animate__fadeInTopRight">
                <project projectName="lightList" 
                         projectLink="http://1.116.238.106/todolist" 
                         bgColor="#1ac1c7"
                         v-if="currentPage === 2">
                </project>
              </transition>
            </div>
            <div class="project-group">
              <transition enter-active-class="animate__animated animate__fadeInBottomLeft">
                <project projectName="bilibili-intro" 
                         projectLink="http://1.116.238.106/bilibili-intro" 
                         bgColor="#fb7756"
                         v-if="currentPage === 2">
                </project>
              </transition>
              <transition enter-active-class="animate__animated animate__fadeInBottomRight">
                <project projectName="calculator" 
                         projectLink="http://1.116.238.106/calculator" 
                         bgColor="#4d4d4d"
                         v-if="currentPage === 2">
                </project>
              </transition>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import Skill from '../components/Skill.vue'
import Project from '../components/Project.vue'
import 'swiper/swiper-bundle.min.css'

import SwiperCore, { Mousewheel } from 'swiper/core'
import { onMounted, ref, watch } from 'vue'
SwiperCore.use([Mousewheel])

export default {
  name: 'home-page',
  components: {
    Swiper,
    SwiperSlide,
    Skill,
    Project
  },
  setup () {
    const swiperRef = ref(null)
    const currentPage = ref(0)
    watch(currentPage, () => {
      sessionStorage.setItem('page', currentPage.value)
    })
    onMounted(() => {
      const page = sessionStorage.getItem('page')
      swiperRef.value.slideTo(page)
    })
    const stys = [
      { id: 'sty-1', url: require('../assets/bg-01.jpg'), delay: 0 },
      { id: 'sty-2', url: require('../assets/bg-02.jpg'), delay: 6 },
      { id: 'sty-3', url: require('../assets/bg-03.jpg'), delay: 12 },
      { id: 'sty-4', url: require('../assets/bg-04.jpg'), delay: 18 },
    ]
    const onSwiper = (swiper) => {
      swiperRef.value = swiper
    }
    const onSecondPage = () => {
      swiperRef.value.slideNext()
    }
    const onSlideChangeTransitionEnd = (swiper) => {
      currentPage.value = swiper.activeIndex
      console.log(swiper.activeIndex)
    }
     
    return {
      onSwiper,
      onSlideChangeTransitionEnd,
      stys,
      onSecondPage,
      currentPage
    }
  }
}
</script>

<style lang="less" scoped>
@header-height: 50px;
@header-text-color: #272643;
@header-bg-color: rgb(255,255,255,.618);
@primary-color: #42b983;

.page-title {
  position: absolute; 
  top: 38px;
  left: 50%;
  width: 120px;
  margin-left: -60px;
  padding: 8px;
  display: inline-block;
  text-align: center;
  font-size: 1.25rem;
  color: white;
  background-color: @primary-color;
  border-radius: 5px;
}

.relative-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bg-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: transparent;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  z-index: -1;
  overflow: hidden;
  // 解决高斯模糊的白边问题
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(1px);
  }
}

.container {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: @header-height;
    padding: 0 20px 0 25px;
    background-color: @header-bg-color;
    box-shadow: 0 1px 5px rgba(0,0,0,.5);
    .header-left {
      float: left;
      .profile-icon {
        line-height: @header-height;
        color: @header-text-color;
        cursor: pointer;
        transition: all 600ms ease-out;
        &:hover {
          transform: scale(1.2) translateY(-1px);
        }
      }
    }
    .header-right {
      float: right;
      a {
        text-decoration: none;
        line-height: @header-height;
        color: @header-text-color;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .swiper-container {
    width: 100%;
    height: calc(100% - @header-height);

    .swiper-slide {

      .slide-page {
        width: 100%;
        height: 100%;
      }

      .page01-container {
        .relative-container();

        .bg-slideshow-container {

          li > span.bg-slide {
            .bg-cover();
            opacity: 0;
            animation: slide 24s linear infinite;
            -webkit-animation: slide 24s linear infinite;
          }
        }
        .profile-container {
          width: 100%;
          height: 100%;
          display: flex;

          .profile-text {
            margin: auto;
            font-family: bold 200% Consolas, Monaco, monospace;
            font-size: 2rem;
            white-space: nowrap;
            overflow: hidden;
            color: white;
            cursor: pointer;
            animation: zoom 6s ease-out infinite;
          }
        }

        .down-icon-container {
          position: absolute;
          left: 50%;
          width: 50px;
          height: 50px;
          margin-left: -25px;
          bottom: 15px;
          animation: down-beat 2s ease infinite;
          cursor: pointer;

          .down-img {
            margin: auto;
          }
        }

      }

      .page02-container {
        .relative-container();
        display: flex;
        
        // .page02-bg-cover {
        //   .bg-cover();
        //   opacity: 1;
        //   background-image: url('../assets/page2-bg.jpg');
        //   animation: breath 9s ease infinite;
        // }
         
        span.person-skill {
          .page-title();
        }
        
        .skill-list-container {
          margin: auto;
        }
      }

      .page03-container {
        .relative-container();
        display: flex;

        // .page03-bg-cover {
        //   .bg-cover();
        //   opacity: 1;
        //   background-image: url('../assets/page3-bg.jpg');
        //   animation: breath 9s ease infinite;
        // }
        
        .project-list-container {
          margin: auto;
        }

      }
    }
  }
}
@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: scale(1.25);
    animation-timing-function: ease-out;
  }
  12.5% {
    opacity: 1;
    transform: scale(1);
  }
  25% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  37.5% {
    opacity: 0;
    transform: scale(1.25);
  }
  100% {
    opacity: 0;
  }
}

@keyframes down-beat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: translateY(5px) scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
  
} 



</style>