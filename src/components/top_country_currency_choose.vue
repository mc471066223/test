<template>
    <div class="top_right_country_more">
        <div class="top_right_country_more_arrow"></div>
        <div class="top_right_country_more_main">
            <h2 class="top_right_country_more_main_tit">Country/Region</h2>
            <div class="top_right_country_choose">
                <em :class="defaultCountryCode"></em>
                <p class="top_right_country_choose_name" @click="showCountryList" :class='{"show":isShow}'>{{defaultCountryName}}</p>
                <span class="showMore iconfont icon-fs_2016icon-downarrow"></span>
            </div>
            <div class="top_right_country_more_main_list" :class="{'close':isClose}" id='countryList'>
                <div class="top_right_country_more_main_list_main">
                    <div class="top_right_country_more_main_list_search">
                        <input type="text" placeholder="Search your country/region" v-model="searchWords" @keyup="searchCountryfn(searchWords)">
                        <span class="iconfont search-icon icon-fs_2017090501icon-search"></span>
                    </div>
                    <ul v-show="searchShow">
                        <li v-for="(country , index) in allCountry" :key="index">
                            <a href="javascript:;" @click="changeCountry(country)">
                                <em :class='country.code'></em>
                                {{country.name}}
                            </a>
                        </li>
                    </ul>
                    <ul v-show="!searchShow">
                        <li v-for="(country , index) in searchCountryResult" :key="index">
                            <a href="javascript:;" @click="changeCountry(country)">
                                <em :class='country.code'></em>
                                {{country.name}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 class="top_right_country_more_main_tit">Language/Currency</h2>
            <div class="top_right_currency_choose">
                <p class="top_right_currency_choose_name" :class="{'show':curIsShow}" @click='showCurrencyList'>
                    <span>{{defaultLanguage}}</span> / <em>{{defaultCurrency}}</em>
                </p>
                <span class="showMore iconfont icon-fs_2016icon-downarrow"></span>
            </div>
            <div class="top_right_currency_more_main_list" :class="{'close':curIsClose}" id='currencyList'>
                <div class="top_right_currency_more_main_list_main">
                    <ul>
                        <li v-for="(cur , j) in currencyResult" :key="j">
                            <span>{{cur.language}}</span> / <em>{{cur.currency}}</em>
                        </li>
                    </ul>
                </div>
            </div>   

            <a href="javascript:;" class="top_right_country_more_save">Save</a>
        </div>
    </div>
</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'

export default {
    name:'topCountryCurrencyChoose',
    data(){
        return {
            isShow:true,
            isClose:false,
            curIsClose:true,
            curIsShow:false,
            searchWords : '',
            searchShow : true
        }
    },computed:{
        ...mapState(['defaultCountryName','defaultCountryCode','allCountry','defaultLanguage','defaultCurrency','currencyResult','searchCountryResult'])
    },
    methods:{
        showCountryList(){
            this.isShow = !this.isShow;
            this.isClose = !this.isClose;
            this.curIsClose = true;
        },
        showCurrencyList(){
            let oCurrencyList = document.getElementById('currencyList');
            let length = oCurrencyList.getElementsByTagName('li').length;
            let oHeight = length * 30 + 13;
            oCurrencyList.style.height = oHeight + 'px';
            this.curIsShow = !this.curIsShow;
            this.curIsClose = !this.curIsClose;
        },
        changeCountry(country){
            this.$store.dispatch('changeDefaultCountry',country).then(()=>{
                this.showCountryList()
            })
        },
        searchCountryfn(){
            this.$store.dispatch('searchCountry',this.searchWords).then(()=>{
                if(this.searchWords == ""){
                    this.searchShow = true
                }else{
                    this.searchShow = false
                }
            });
        },
        mouseOverDoc(){
            document.onmouseover = (e) => {
                var target = e.target;
                // console.log(target.closest())
            }
        }
        // ...mapMutations(['changeDefaultCountry'])
    },
    mounted:function(){
        this.mouseOverDoc()
    }
}
</script>

<style scoped>
.top_right_country_more{
    width: 300px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 38px;
    box-shadow: 0px 1px 8px 0 rgba(120,102,102,.3);
    border: none;
    background: #fff;
    border-radius: 3px;
    height: initial;
    /* display: none; */
}
.top_right_country_more_main{
    padding: 0 20px 25px;
    cursor: default;
}
.top_right_country_more_main_tit{
    font-size: 13px;
    color: #666;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 10px;
    line-height: initial;
}
.top_right_country_choose,.top_right_currency_choose{
    height: 38px;
    background-color: #ffffff;
    border-radius: 2px;
    border: solid 1px #dddddd;
    position: relative;
}
.top_right_country_choose em{
    background-image: url(../assets/images/country.png);
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 15px;
    top: 10px;
}
.top_right_country_choose_name,.top_right_currency_choose_name{
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    text-indent: 36px;
    line-height: 38px;
    color: #333;
    font-size: 13px;
}
.top_right_currency_choose_name{
    text-indent: 15px;
}
.showMore{
    float: right;
    width: 20px;
    height: 20px;
    margin: 13px 0 0;
    background: none;
    color: #aaa;
    font-size: 12px;
    line-height: 16px;
}
.top_right_country_more_main_list{
    transition: all .5s;
    height: 231px;
    overflow: hidden;
    /* display: none; */
}
.top_right_currency_more_main_list{
    transition: all .5s;
    overflow: hidden;
}
.top_right_currency_more_main_list.close{
    height: 0 !important;
}
.top_right_country_more_main_list_main,.top_right_currency_more_main_list_main{
    width: 100%;
    background-color: #fff;
    border-radius: 0px 0px 2px 2px;
    border: solid 1px #dddddd;
    border-top: none;
    box-sizing: border-box;
    padding: 11px 13px;
    position: relative;
}
.top_right_country_more_main_list.close{
    height: 0;
}
.top_right_country_more_main_list_search{
    position: relative;
}
.top_right_country_more_main_list_search input{
    width: 100%;
    height: 34px;
    background-color: #f7f8f9;
    text-indent: 10px;
    font-size: 13px;
    color: #333;
    border: none;
    -webkit-appearance: none;
    outline: none;
}
.search-icon{
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 14px;
    color: #333;
    line-height: initial;
}
.top_right_country_more_main_list ul{
    height: 160px;
    overflow-y: scroll;
    margin-top: 10px;
}
.top_right_country_more_main_list ul li{
    margin-bottom: 15px;
}
.top_right_country_more_main_list ul li a{
    display: block;
    position: relative;
    line-height: 20px;
    padding-left: 24px;
    color: #333;
    text-decoration: none
}
.top_right_country_more_main_list ul li a:hover{
    text-decoration: underline
}
.top_right_country_more_main_list ul li a em{
    background-image: url(../assets/images/country.png);
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0;
    top: 2px;
}
.top_right_currency_choose_name span{
    float: none;
}
.top_right_currency_choose_name em{
    font-style: normal
}
.top_right_currency_more_main_list_main li{
    line-height: 20px;
    text-indent: 2px;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 10px;
}
.top_right_currency_more_main_list_main li:hover{
    text-decoration: underline
}
.top_right_currency_more_main_list_main li:last-child{
    margin-bottom: 0
}
.top_right_currency_more_main_list_main li span{
    float: none
}
.top_right_currency_more_main_list_main li em{
    font-style: normal
}
.top_right_country_more_save{
    display: block;
    height: 38px;
    background-color: #ffffff;
    border-radius: 2px;
    border: solid 1px #565656;
    transition: all .3s;
    box-sizing: border-box;
    text-align: center;
    line-height: 36px;
    color: #333;
    margin-top: 15px;
}
.top_right_country_more_save:hover{
    text-decoration: none;
    background-color: #565656;
    color: #fff;
}

</style>
