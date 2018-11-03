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
    defaultLanguage : 'Englisg',
    currencyResult : [{
        language : 'English',
        currency : '$ USD'
    }],
    searchCountryResult : [],
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
        state.defaultCurrency = data.lc[0].currency;
        state.defaultLanguage = data.lc[0].language;
        for(let i = 0;i < state.allCountry.length;i++){
            if(state.allCountry[i].code == data.code){
                state.currencyResult = state.allCountry[i].lc;
            }
        }
    },
    SEARCH_COUNTRY(state , data){
        state.searchCountryResult = [];
        for(let i = 0;i < state.allCountry.length;i++){
            if(state.allCountry[i].name.toUpperCase().indexOf(data.toUpperCase()) != -1){
                
                state.searchCountryResult.push(state.allCountry[i])
            }
        }
        console.log(state.searchCountryResult)
        return state.searchCountryResult;
        
    },
    CHANGE_LANGUAGE_CURRENCY(state,data){
        state.defaultLanguage = data.language;
        state.defaultCurrency = data.currency;
    },
    SAVE_COUNTRY_LANGUAGE_CURRENCY(state){
        state.IPcode = state.defaultCountryCode;
        state.IPcountry = state.defaultCountryName;
        state.IPcurrency = state.defaultCurrency;
        var countryInformation = [state.IPcode,state.IPcountry,state.IPcurrency];
        if(localStorage.getItem('countryInformation') != null){
            localStorage.removeItem('countryInformation');
        };
        localStorage.setItem('countryInformation',countryInformation)
    },
    getCountryInformation : function(state){
        if(localStorage.getItem('countryInformation') != null){
            var cccInformation = localStorage.getItem('countryInformation').split(',');
            state.IPcode = cccInformation[0];
            state.IPcountry = cccInformation[1];
            state.IPcurrency = cccInformation[2];
            for(var i=0;i<state.allCountry.length;i++){
                if(state.IPcode == state.allCountry[i].code){
                    state.currencyResult = state.allCountry[i].lc;
                }
            }
        }
    }
}

const getters = {
    
}

const actions = {
    changeDefaultCountry({commit} , newContent){
        commit('CHANGE_COUNTRY_CODE',newContent);
    },
    searchCountry({commit} , words){
        commit('SEARCH_COUNTRY',words)
    },
    changeDefaultLanguage({commit} , newContent){
        commit('CHANGE_LANGUAGE_CURRENCY',newContent)
    },
    saveCLC({commit}){
        commit('SAVE_COUNTRY_LANGUAGE_CURRENCY');
    },
    readCLC({commit}){
        commit('getCountryInformation');
    }
}

export default new Vuex.Store({
    state,mutations,actions,getters
})
