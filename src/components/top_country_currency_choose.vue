<template>
    <div class="top_right_country_more">
        <div class="top_right_country_more_arrow"></div>
        <div class="top_right_country_more_main">
            <h2 class="top_right_country_more_main_tit">Country/Region</h2>
            <div class="top_right_country_choose">
                <em :class="flag"></em>
                <p class="top_right_country_choose_name">{{countryName}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'topCountryCurrencyChoose',
    data(){
        return {
            flag : 'cn',
            countryName : 'China'
        }
    }
}
</script>
