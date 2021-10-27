<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <h6 class="text-white">Vue Home</h6>
      <router-link to="/" class="nav-link text-warning">Home</router-link>
      <router-link to="/about" class="nav-link text-warning">About</router-link>
    </li>
    <li class="nav-item">
      <h6 class="text-white">Menu01: Routing</h6>
      <router-link to="/menu01/exam01view" class="nav-link text-warning">선언적 방식 화면 이동</router-link>
      <router-link to="/menu01/exam02view" class="nav-link text-warning">프로그래밍 방식 화면 이동</router-link>
      <router-link to="/menu01/exam03view" class="nav-link text-warning">중첩된 라우트</router-link>
      <router-link to="/menu01/exam04view" class="nav-link text-warning">이름이 있는 뷰</router-link>
      <router-link to="/menu01/exam05view" class="nav-link text-warning">URL 데이터 전달</router-link>
    </li>
  </ul>
</template>
