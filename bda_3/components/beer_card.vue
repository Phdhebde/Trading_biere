<template>
    <div>
        <b-card
            :title="beer.nom"
            :sub-title="beer.nbr_vendu + ' vendu(s)'"
            tag="beer_info"
            style="width: 10rem;"
            class="mb-2 info">
                <b-card-text class="text-center">
                Le prix de la bière est de <b style='color: #F27649'>{{ beer.prix_biere }} €</b>. Prix de départ <b style='color: #F3F3AE'>{{ beer.prix }} €</b>.
                </b-card-text>
                <button v-if="role == 'commande'" @click="$emit('addone',beer.nbr_vendu,beer.id)" class="col_12 w-100 btn-custom">Add 1</button>
        </b-card>
    </div>
</template>

<script>
    import { mapState,mapActions,mapGetters,mapMutations } from 'vuex'

    export default {
        name: 'BeerCard',
        props: {
            "role": String,
            beer: {
                id: Number,
                nom: String,
                prix: Number,
                prix_biere: Number,
                nbr_vendu: Number,
                required: true
            }
        },
    }
</script>

<style>
    .info{
        background-color: #D9BB96;
        color: #260101;
    }
    .bnt-custom{
        background-color: #F27649!important;
        color: #260101;
    }
</style>