<template>

<div class="container mt-5">
    <h1 style="align-items:center">Productos</h1>
    <br>
    
    <ul class="list-group" v-for="product in products" :key="product.id">
      
      <li @click="showProduct(product._id)" class="list-group-item mb-2 hover light" style="background-color: #e3f2fd;">
        {{ product.name }}
      </li>
      <li class="list-group-item mb-3">
        <img :src="product.images[0]" style="width: 15rem;" alt="">
      </li>
      <li class="list-group-item mb-3">
        Descripcion: {{product.description}}
      </li>
      <li class="list-group-item mb-3">
        Precio: {{product.price}}
      </li>
      <li class="list-group-item mb-3">
        Fecha de creacion: {{product.createdAt}}
      </li>
    </ul>
    <br>
  </div>
  
</template>

<script>

import axios from 'axios';

export default {
    name: 'ProductList',

    data() {
    return{
      products: [],
    };
  },
  mounted() {
    let vue = this;
    axios.get('http://170.239.85.65:4000/products')
    .then(function (response) {
        vue.products= response.data;
    })
  },
  methods: {
    showProduct(id) {
      //this.$router.push( `/products/${id}/reviews`);
      this.$router.push( {name: "productdetails", params: {id}});

    },

  }

}
</script>

<style>

</style>