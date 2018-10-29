<template>
    <div class="top">
        <div class="top_main">
            <div class="top_main_left">
                <router-link to='about_us' class='top_main_left_toabout'>{{site}}</router-link>
                <router-link to='shipping_delivery' class='top_main_left_shipping'>{{topShipping}}</router-link>
            </div>

            <div class="top_main_right">
                <div class="top_main_right_help">
                    <router-link to='live_chat_service' class=''>
                        <span class='iconfont icon-fs_2017101603icon'></span>
                        <span class="top_help_font">{{topHelp}}</span>
                    </router-link> 
                    <topHelpMpre></topHelpMpre>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import '../assets/common_top.css'
import topHelpMpre from '@/components/top_help_more'

export default {
    name:'commonTop',
    data(){
        return {
            site : '',
            topShipping : '',
            topHelp : 'Need Help?'
        }
    },
    mounted:function(){
        this.$http({
            method:'get',
            url:'http://test.whgxwl.com:8000/index.php?modules=phone&version=2.2.0&handler=index&request_action=header_data'
        }).then(res => {
            console.log(res)
            this.site = res.data.site_code;
            this.topShipping = res.data.free_str;
        }).then(res =>{
            console.log(res)
        });
    },
    components:{
        topHelpMpre
    }
}
</script>
