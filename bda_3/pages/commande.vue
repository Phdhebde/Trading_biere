<template>
    <div>
        <Entete />

        <div class="row d-flex justify-content-center align-items-center container-fluid">
            <!-- Contient les cartes permettant de faire un plus 1 -->

            <BeerCard class="col-md-4 d-flex justify-content-center align-items-center" v-for="beer in beer"
                :key="beer.nom" :beer="beer" v-on:addone="plus1" role="commande" />

        </div>

        <div class="row d-flex justify-content-center align-items-center py-4"><button class="btn-success h-100"
                @click="Graphic">Launch Graphic</button></div>
    </div>
</template>

<script>

import BeerCard from '~/components/beer_card.vue'
import Entete from '~/components/entete.vue'
// store function
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'CommandePage',
    components: {
        BeerCard,
        Entete
    },
    computed: {
        ...mapState(['beer']),
    },
    data() {
        return {
        }
    },
    methods: {
        plus1(nbr_vendu, id) {

            var incrementation = 0.10;
            // generate the new price
            var other_id = (id % 2 == 0) ? id + 1 : id - 1;

            var prix = (this.beer[id].prix_biere + incrementation);
            var other_prix = (this.beer[other_id].prix_biere - incrementation);

            // check vérifie le minimum et le max du prix

            if (prix < 1.00) {
                prix = 1.00;
            }
            else if (prix > 3.00) {
                prix = 3.00;
            }

            if (other_prix < 1.00) {
                other_prix = 1.00;
            }
            else if (other_prix > 3.00) {
                other_prix = 3.00;
            }


            // update the price
            this.$store.commit('updatePrice', [id, prix]);
            this.$store.commit('updatePrice', [other_id, other_prix]);


            //mutate nbr_vendu using id and ...mapMutations
            this.$store.commit('increment', id)
        },
        Graphic() {
            this.$router.push('/view')
        }
    }
}

</script>

<style>

</style>
