<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);

// change value on true
function clickOpenMenu() {
  isOpen.value = !isOpen.value;
}

</script>
 
<template>
    <div>
      <header>
        <div class="mobile-icon" :class="{ open: isOpen }" @click="clickOpenMenu">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div id="logo" class="z-10">
          <router-link :to="{name: 'home' }"><img src="../assets/logo.png"/></router-link>
        </div>
      </header>
      <nav id="navMobile" class="z-50" :class="{navMobile: true, open: isOpen}">
        <ul>
          <li>
            <RouterLink :to="{name: 'heroka'}">Heroka</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'selena'}">Selena</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'fantasy'}">Fanstasy</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'clark'}">Clark</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'stellar'}">Stellar</RouterLink>
          </li>
          <li class="contactButton">
            <RouterLink :to="{name: 'contact'}">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");

header {
  height: 60px;
  background-color: #f9f4eb;
  display: flex;
  .mobile-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 24px;
    position: absolute;
    top: 15px;
    right: 17px;
    z-index: 999;
    background: transparent;
    cursor: pointer;

    .line {
      width: 30px;
      height: 4px;
      background-color: #4f5154;
      transition: transform 0.5s ease-in-out;
      border-radius: 10px;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    &.open {
      transition: 500ms all;
      .line:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      .line:nth-child(2) {
        opacity: 0;
      }
      .line:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
  #logo {
    display: flex;
    align-items: center;
    a {
      margin-left: 10px;
      img {
        width: 50px;
        height: auto;
      }
    }
  }
}

// / gère open et close du navMobile

#navMobile {
  transform: translate(100vw);
  transition: all 500ms;
  display: none;
  &.open {
    transition: all 500ms;
    transform: translate(0vw);
    display: block;
  }
}

// // scss for menu mobile

#navMobile {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: radial-gradient(103.09% 1253.23% at 100% 48.69%, #150900 0%, #151917 99.3%);
    ul {
      background: radial-gradient(103.09% 1253.23% at 100% 48.69%, #150900 0%, #151917 99.3%);
        li {
        list-style: none;
        position: relative;
        padding: 30px 0;
        margin-bottom: 5px;
        transition: 500ms;
            a {
                position: relative;
                z-index: 1;
                background: transparent;
                font-family: "Black Ops One", cursive;
                color: #ffffff;
                font-size: 20px;
                text-transform: capitalize;
                text-decoration: none;
                cursor: pointer;
            }
            &:nth-child(1) {
                text-align: right;
                &::before {
                display: block;
                content: "";
                background-image: url("../assets/card/card1.png");
                background-position: -113px -94px;
                background-size: 477px;
                position: absolute;
                top: 0;
                width: 100%;
                opacity: 0.6;
                height: 100%;
                }
            }
            &:nth-child(2) {
                text-align: left;
                &::before {
                display: block;
                content: "";
                background-image: url("../assets/card/card2.png");
                background-position: 79px -52px;
                background-size: 300px;
                position: absolute;
                top: 0;
                width: 100%;
                opacity: 0.6;
                height: 100%;
                }
            }
            &:nth-child(3) {
                text-align: right;
                &::before {
                display: block;
                content: "";
                background-image: url("../assets/card/card3.png");
                background-position: 301px -51px;
                background-size: 311px;
                position: absolute;
                top: 0;
                width: 100%;
                opacity: 0.6;
                height: 100%;
                }
            }
            &:nth-child(4) {
                text-align: left;
                &::before {
                display: block;
                content: "";
                background-image: url("../assets/card/card4.png");
                background-position: 357px -49px;
                background-size: 300px;
                position: absolute;
                top: 0;
                width: 100%;
                opacity: 0.6;
                height: 100%;
                }
            }
            &:nth-child(5) { 
              text-align: right;
              &::before {
              display: block;
              content: "";
              background-image: url("../assets/card/card5.png");
              background-position: 245px -49px;
              background-size: 259px;
              position: absolute;
              top: 0;
              width: 100%;
              opacity: 0.6;
              height: 100%;
              }
            }
            &:nth-child(6) { 
              background: transparent;
            }
            &:nth-child(odd) {
                a {
                bottom: 5px;
                right: 39px;
                }
            }
            &:nth-child(even) {
                a {
                top: 8px;
                left: 39px;
                }
            }
            &:hover {
                transition: 500ms all;
                &::before {
                opacity: 1;
                }
                a {
                color: #ffffff;
                text-shadow: #000 2px 0 3px;
                }
            }
        }
    }
}

@media (min-width: 360px) {
  // scss for menu mobile
  header {
    height: 65px;
  }
  #navMobile {
    ul {
      li {
        padding: 35px 0;
        &:nth-child(1) {
          &::before {
            background-size: cover;
            background-position: -47px -46px;
          }
        }
        &:nth-child(2) {
          &::before {
            background-size: cover;
            background-position: 72px -82px;
          }
        }
        &:nth-child(3) {
          &::before {
            background-size: cover;
          }
        }
        &:nth-child(4) {
          &::before {
            background-size: cover;
            background-position: 363px -70px;
          }
        }
        &:nth-child(5) {
          &::before {
            background-position: 285px -87px;
            background-size: cover;
          }
        }
      }
    }
  }
}

</style>