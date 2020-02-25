import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters: {
        saleProducts: (state) => {
            return state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
        }
    },
    mutations: {
        reducePriceMutation: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload
            });
        }
    },
    actions: {
        reducePriceAction: (context, payload) => {
            setTimeout(function(){ // reach out for data
                context.commit('reducePriceMutation', payload);
            }, 2000);
        }
    }
});
