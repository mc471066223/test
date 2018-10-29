<template>
    <div class='top_right_help_more'>
        <div class="top_right_help_more_arrow"></div>
        <div class="top_right_help_more_main">
            <div class="top_right_help_more_main_con">
                <span class="iconfont icon-fs_2016icon-question"></span>
                <h2 class="top_right_help_more_main_con_tit">Chat live with us</h2>
                <a href="javascript:;" class="top_right_help_more_main_con_href">Live Chat</a>
            </div>
            <div class="top_right_help_more_main_con other">
                <span class="iconfont icon-fs_2018092101icon"></span>
                <h2 class="top_right_help_more_main_con_tit">Get technical support</h2>
                <a href="javascript:;" class="top_right_help_more_main_con_href">Ask an expert</a>
            </div>
            <div class="top_right_help_more_main_con other">
                <span class="iconfont icon-fs_2016icon-mail"></span>
                <h2 class="top_right_help_more_main_con_tit">Send us a message</h2>
                <a href="javascript:;" class="top_right_help_more_main_con_href">E-mail Now</a>
            </div>
            <div class="top_right_help_more_main_con phone">
                <span class="iconfont icon-fs_2016icon-phone"></span>
                <h2 class="top_right_help_more_main_con_tit">Want to call?</h2>
                <p class="top_right_help_more_main_con_txt" v-html="phone"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'topHelpMore',
    props:['phone']
}
</script>
