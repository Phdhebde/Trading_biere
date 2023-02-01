<template>
  <div id="index">
    <Entete />
    <div class="row grid cards d-flex justify-content-center align-items-center">
      <BeerCard class="col-md-4 p-3 d-flex justify-content-center align-items-center" v-for="beer in beer" :key="beer.nom" :beer="beer" role="view"/>
    </div>
    <div class="row d-flex justify-content-center align-items-center py-4"><button class="btn-custom h-100" @click="Newpages">START THE TRADING</button></div>    
  </div>
</template>

<script>
import Entete from '~/components/entete.vue'
import BeerCard from '~/components/beer_card.vue'

// store function

import { mapState,mapActions,mapGetters,mapMutations } from 'vuex'

export default {
  components: {
    Entete,
    BeerCard
  },
  computed: {
    ...mapState(['beer']),
  },
  name: 'IndexPage',
  data() {
    return {
    }
  },
  methods: {
    Newpages() {
      this.$router.push('/view')
    }
  }
}
</script>

<style scoped>
  #index{
    background-color: #7B92A6;
    color: #260101;
  }
  .btn-custom{
    background-color: #260101;
    color: #7B92A6;
    border: none;
    border-radius: 10px;
    font-size: 1.5em;
    font-weight: bold;
    width: 300px;
    height: 100px;
  }
</style>