import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    IPcountry : 'china',
    IPcode : 'cn',
    IPcurrency : '$ USD',
    defaultCountryName : 'china',
    defaultCountryCode : 'cn',
    defaultCurrency : '$ USD',
    allCountry:[
        {
            name : 'United States',
            code : 'us',
            lc : [{
                language : 'English',
                currency : '$ USD'
            }]
        },{
            name : 'United Kingdom',
            code : 'gb',
            lc : [{
                language : 'English',
                currency : '£ GBP'
            }]
        },{
            name : 'Canada',
            code : 'ca',
            lc : [{
                language : 'English',
                currency : '$ CAD'
            },{
                language : 'Français',
                currency : '$ CAD'
            },{
                language : 'English',
                currency : '$ USD'
            },{
                language : 'Français',
                currency : '$ USD'
            }]
        },{
            name : 'Australia',
            code : 'au',
            lc : [{
                language : 'English',
                currency : '$ AUD'
            }]
        },{
            name : 'France',
            code : 'fr',
            lc : [{
                language : 'Français',
                currency : '€ EUR'
            },{
                language : 'English',
                currency : '€ EUR'
            }]
        },{
            name : 'Germany (Deutschland)',
            code : 'de',
            lc : [{
                language : 'Deutsch',
                currency : '€ EUR'
            },{
                language : 'English',
                currency : '€ EUR'
            }]
        },{
            name : 'Spain (España)',
            code : 'es',
            lc : [{
                language : 'Español',
                currency : '€ EUR'
            },{
                language : 'English',
                currency : '€ EUR'
            }]
        }
    ]
}

const mutations = {
    CHANGE_COUNTRY_CODE(state,data){
        state.defaultCountryName = data.name;
        state.defaultCountryCode = data.code;
    }
}

const getters = {

}

const actions = {
    changeDefaultCountry({commit} , newContent){
        commit('CHANGE_COUNTRY_CODE',newContent)
    }
}

export default new Vuex.Store({
    state,mutations,actions,getters
})