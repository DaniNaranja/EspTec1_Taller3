<template>
    <div class="container mt-5">
    <h1 style="align-items:center">Detalles producto</h1>
    <br>
    
    <ul class="list-group" v-if="product">
      
      <li class="list-group-item mb-2 hover light" style="background-color: #e3f2fd;">
        {{ product[0].productId.name }}
      </li>
      <li class="list-group-item mb-3" v-for="image in product[0].productId.images" :key="image">
        <img :src="image" style="width:20rem"/>
      </li>
      <li class="list-group-item mb-3">
        Fecha de creacion: 
        <br> 
        {{product[0].productId.createdAt}}
      </li>
      <li class="list-group-item mb-3">
        Descripcion: 
        <br>
        {{product[0].productId.description}}
      </li>
      <li class="list-group-item mb-3">
        Precio: {{product[0].productId.price}}
      </li>
    </ul>
    <br>
    <h3>Reviews</h3>
    <ul class="list-group" v-for="prod in product" :key="prod"> 
        <li class="list-group-item mb-2 hover light" style="background-color: #e3f2fd;">
            {{ prod.user.name }} 
            <span style="float:right; font-size: small;">{{prod.createdAt}}</span>
        </li>
        <li class="list-group-item mb-3">
            <p>{{prod.review}}</p>

        </li>
      
      
    </ul>
    <br>
  </div>
     
  
</template>

<script>
import axios from 'axios'
export default {
    name: 'ProductDetails',
    data() {
        return {
            product: null
        }
    },

    mounted() {
        axios
        .get('http://170.239.85.65:4000/products/'+this.$route.params.id+"/reviews")
        .then(response => {
            this.product = response.data;
            console.log(this.product)
        })
    }

    
}
</script>

<style>

</style>