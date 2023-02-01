// state

export const state = () => ({
    beer: [
        {
          id: 0,
          nom:'Corbeau',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        },
        {
          id: 1,
          nom:'Triple Karmeliet',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        },
        {
          id: 2,
          nom:'Anosteke',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        },
        {
          id: 3,
          nom:'Cuvée des Trolls',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        },
        {
          id: 4,
          nom:'Délirum',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        },
        {
          id: 5,
          nom:'Kasteel Rouge',
          prix: 2.5,
          prix_biere: 2.5,
          nbr_vendu: 0
        }
      ]
})

//getters

export const getters = {
    beer: state => state.beer
}  

//Actions

export const actions = {
    increment(context,id) {
        context.commit('increment',id)
    },
    updatePrice(context,id,price) {
        context.commit('updatePrice',id,price)
    }

}

//mutations

export const mutations = {
    updatePrice(state,tableau) {
      state.beer[tableau[0]].prix_biere = tableau[1]
    },
    increment(state,id) {
        state.beer[id].nbr_vendu++
    },
    
}

