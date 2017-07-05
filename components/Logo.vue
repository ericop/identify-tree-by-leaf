<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"></div>
    <div class="Triangle Triangle--one"></div>
    <div class="Triangle Triangle--three"></div>
    <div class="Triangle Triangle--four"></div>
    <div class="Square Square--one"></div>
    <div class="Square Square--two"></div>
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: y;
  height: 180px;
  width: 245px;
  margin: 1.5rem;
}

.Triangle Square--one {
  top: 0;
  height: 200px;
  background: #fff;
  opacity: 1;
  animation: infrontAnimation2 1s 2s forwards ease-out;
  -webkit-animation: infrontAnimation2 1s 2s forwards ease-out;
}

@-webkit-keyframes infrontAnimation1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99.9% {
    opacity: 0;
    height: 200px;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

@keyframes infrontAnimation1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99.9% {
    opacity: 0;
    height: 200px;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Square {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
}

.Square--one {
  top: 20px;
  left: 155px;
  animation: stemgoright 0.5s linear forwards 3.5s;
  border-left: .25rem solid #CB913F;
  border-right: .5rem solid transparent;
  border-bottom: .5rem solid #795227;
  background-color: #795227;
}

.Square--two {
  top: 20px;
  left: 95px;
  animation: stemgoright 0.5s linear forwards 3.5s;
  border-left: .25rem solid #CB913F;
  border-right: .5rem solid transparent;
  border-bottom: .5rem solid #795227;
  background-color: #795227;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41B883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3B8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495E;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

@keyframes stemgoright {
  0% {
    opacity: 0;
  }
  100% {
    top: 180px;
    opacity: 1;
  }
}
</style>
