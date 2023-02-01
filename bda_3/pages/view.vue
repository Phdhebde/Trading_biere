<template>
    <div style="
    background-color: #7B92A6;
    color: #260101;" >
        <Entete />
        <div class="row w-100">
            <div class="col-md-8 pl-5 pb-5">
                <chart></chart>
            </div>
            <ul class="col-md-3 pt-5 ml-5" style="background-color: #260101; color: #F2DBAE; border-radius: 10px;">
                <h3 class="text-left" style="text-decoration: underline;">Légende : </h3>
                <li v-for="beer in beer" :key="beer.nom" :beer="beer" role="view" class="content">
                    {{ beer.nom }} -- {{ beer.prix_biere }} € -- nombre vendu : {{ beer.nbr_vendu }}
                </li>
            </ul>
        </div>
        <div class="row d-flex justify-content-left align-items-flex-start mt-2 container-fluid">
            <!-- Contient les cartes permettant de faire un plus 1 -->
            <BeerCard class="col-md-2 d-flex justify-content-center align-items-flex-start" style="font-size:smaller" v-for="beer in beer"
                :key="beer.nom" :beer="beer" v-on:addone="plus1" role="commande" />

        </div>
    </div>
</template>

<script>
import Entete from '~/components/entete.vue'
import chart from '~/components/chart.vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'ViewPage',
    components: {
        Entete,
        chart
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

            var incrementation = 0.01;
            // generate the new price
            var other_id = (id % 2 == 0) ? id + 1 : id - 1;

            var prix = (this.beer[id].prix_biere + incrementation);
            var other_prix = (this.beer[other_id].prix_biere - incrementation);

            // check vérifie le minimum et le max du prix
            prix = Math.round(prix * 100) / 100;
            other_prix = Math.round(other_prix * 100) / 100;
            if (prix < 2.00) {
                prix = 2.00;
            }
            else if (prix > 3.00) {
                prix = 3.00;
            }

            if (other_prix < 2.00) {
                other_prix = 2.00;
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
    },

}

</script>

<style>
.content {

    list-style: none;
    padding: 10px;

}
#view{
    background-color: #7B92A6;
    color: #260101;
}
</style>