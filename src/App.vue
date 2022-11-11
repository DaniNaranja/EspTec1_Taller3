<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link style="text-decoration: none; color: white;" to="/">Inicio</router-link> 
        </li>
        <li class="breadcrumb-item">
          <router-link style="text-decoration: none; color:white" to="/products"> Productos</router-link>

        </li>
        
      </ol>
    </nav>
  </div>
</nav>

  
  

  <div class="mx-auto">
    <router-view/>
  </div>
  

  
  
</template>

<style>
</style>
