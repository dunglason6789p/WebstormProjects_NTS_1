<template>
    <div _zx_="00005_" id="container_header" class="nav_header box_fix_top" data-pgc-define="F_HeadBar">
        <div _zx_="00006_" id="vatgia_new_home_1190x90_header" class="banner_header"></div>
        <div _zx_="00007_" class="header_bar">
            <div _zx_="00008_" class="container_width">
                <div _zx_="00009_" class="fl">
                    <a _zx_="00010_" href="https://vatgia.com/home/" class="simple_tip">Gian hàng ntx</a>
                    <a _zx_="00011_" href="https://vatgia.com/raovat/" class="simple_tip">Rao vặt</a>
                    <a _zx_="00012_" href="https://vatgia.com/tu-van/" class="simple_tip">Tư vấn</a>
                    <a class="simple_tip" onclick="return false" href="http://help.vatgia.com/" target="_blank"
                       rel="nofollow">Hỗ trợ
                    </a>
                    <a _zx_="00013_" href="javascript:" class="simple_tip arrow" rel="#header_bar_menu_extra">Thêm
                        <b _zx_="00014_" class="arrow_down"></b>
                    </a>
                    <div _zx_="00015_" id="hotline_tooltip" class="hidden">
                        <div _zx_="00016_" style="margin-bottom: 8px;">
                            <b _zx_="00017_">Từ 8h30 đến 17h30</b>
                            (thứ 2 đến thứ 6)
                        </div>
                        <div _zx_="00018_">
                            <b _zx_="00019_">Từ 8h đến 12h</b>
                            (thứ 7)
                        </div>
                    </div>
                    <div _zx_="00020_" id="header_bar_menu_extra" class="hidden">
                        <a _zx_="00021_" class="image baokim" href="https://www.baokim.vn/" target="_blank" rel="nofollow">BaoKim.vn</a>
                        <a _zx_="00022_" class="image nhanh" href="http://www.nhanh.vn/" target="_blank" rel="nofollow">Nhanh.vn</a>
                    </div>
                </div>

                <div _zx_="00023_" class="fr">
                    <a _zx_="00024_" href="https://vatgia.com/cart" class="simple_tip">
                        <i _zx_="00025_" class="flaticon-cart" style="font-size: 13px;margin-top: 1px;float: left;"></i>&nbsp;
                        <span _zx_="00026_">Giỏ hàng</span>
                    </a>
                    <a _zx_="00027_" href="javascript:;" class="simple_tip">
                        <i _zx_="00028_" class="flaticon-eye-outline" style="font-size: 16px;margin-top: 1px;float: left;"></i>&nbsp;
                        <span _zx_="00029_">Đã xem</span>
                    </a>
                    <a _zx_="00030_" class="simple_tip" onclick="return false" href="javascript:;" rel="nofollow">
                        <i _zx_="00031_" class="flaticon-global"></i>&nbsp;
                        <span _zx_="00032_">Thông báo</span>
                    </a>
                    <a href="https://id.vatgia.com/v2/dang-ky/vatgia/tai-khoan-thuong?service=vatgia&amp;_cont=http://www.vatgia.com"
                       rel="nofollow" target="_blank">
                        <i _zx_="00033_" class="flaticon-user-plus" style="font-size: 14px;float: left;margin-top: 1px;"></i>&nbsp; Đăng
                                                                                                               ký
                    </a>
                    <a _zx_="00034_" class="simple_tip" href="javascript:" rel="#header_login">
                        <i _zx_="00035_" class="flaticon-user"></i>&nbsp; Đăng nhập
                    </a>
                    <div _zx_="00036_" id="header_login" class="hidden">
                        <form class="header_login" name="header_login"
                              action="/home/act_login.php?redirect=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/"
                              method="post"
                              onsubmit="return checkForm(this.name, vatgiaConfig.login_config.array_check_form);">
                            <div _zx_="00037_" class="login_other">
                                <a class="facebook"
                                   href="https://vnid.net/login/facebook?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/"
                                   rel="nofollow"></a>
                            </div>
                            <div _zx_="00038_" class="login_other">
                                <a class="google"
                                   href="https://vnid.net/login/google?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/"
                                   rel="nofollow"></a>
                            </div>
                            <div _zx_="00039_" class="text">Hoặc đăng nhập bằng tài khoản
                                <a style="color: #0C81F6;"
                                   href="https://vnid.net/login?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/">
                                    VNID.NET
                                </a>
                            </div>
                            <div _zx_="00040_" class="floginname">
                                <i _zx_="00041_" class="icon_sprite icon_sprite_floginname"></i>
                                <input type="text" class="form_control" name="loginname" autocomplete="off"
                                       placeholder="Tên đăng nhập">
                            </div>
                            <div _zx_="00042_" class="fpassword">
                                <i _zx_="00043_" class="icon_sprite icon_sprite_fpassword"></i>
                                <input _zx_="00044_" type="password" class="form_control" name="password" placeholder="Mật khẩu">
                            </div>
                            <div _zx_="00045_">
                                <input _zx_="00046_" type="checkbox" name="remember_password" value="1">
                                <span _zx_="00047_" class="text" onclick="$(this).prev().click()">Nhớ mật khẩu</span>
                                <a class="text_link fr" href="https://vnid.net/forgot-password" target="_blank"
                                   rel="nofollow">Quên mật khẩu?
                                </a>
                                <span _zx_="00048_" class="clear"></span>
                            </div>
                            <div _zx_="00049_" class="text" style="width: 220px;">Hotline hỗ trợ:
                                <b _zx_="00050_" style="color: #0C81F6; font-size:12px;">024 710 78 999
                                </b>
                            </div>
                            <div _zx_="00051_" class="text" style="width: 220px;">Sử dụng
                                <a _zx_="00052_" style="color: #0C81F6;" href="https://vatgia.com/home/oldlogin.php">Đăng nhập</a>
                                                                    theo cách cũ
                            </div>
                            <div _zx_="00053_">
                                <input _zx_="00054_" type="submit" class="form_button" value="Đăng nhập">
                            </div>
                            <input _zx_="00055_" type="hidden" name="user_login" value="login">
                        </form>
                    </div>
                </div>
                <div _zx_="00056_" class="clear"></div>
            </div>
        </div>
        <div _zx_="00057_" class="bg_header_tet">
            <div _zx_="00058_" id="header_content">
                <div _zx_="00059_" class="header_content container_width" style="overflow: visible;">
                    <div _zx_="00060_" class="logo">
                        <a _zx_="00061_" style="display: block;" href="/hoidap/">
                            <img src="https://vatgia.com/static/20190715//themes/v1/images/hoidap_logo_v3.svg"
                                 style="height: 60px;" alt="Vatgia.com">
                        </a>
                    </div>

                    <div _zx_="00062_" class="group_like_cart">
                        <div _zx_="00063_" class="fr">
                            <a _zx_="00064_" class="post_hd" href="/hoidap/post.php">
                                <i _zx_="00065_" class="flaticon-edit"></i>
                                Đăng câu hỏi
                            </a>
                        </div>
                        <div _zx_="00066_" class="clear"></div>
                    </div>
                    <Search01_ _zx_="00115_"/>
                    <div _zx_="00091_" class="clear"></div>
                </div>
            </div>
        </div>
    </div></template>

<script>
    import Search01_ from "@/components/Search01_";

    export default {
        name: "Header01_",
        components: {Search01_}
    }
</script>

<style scoped>
    #header_bar {
        position: relative;
        z-index: 4;
    }

    .header_bar_hover #overlay_body {
        opacity: 0.6;
        visibility: visible;
    }

    .header_bar_hover #overlay_body {
        transition: all .6s .1s;
    }

    .header_bar_hover #header_bar {
        z-index: 4;
        transition: all 0s 0s;
    }

    .header_bar_hover #header_content, .header_bar_hover #header_navigate, .header_bar_hover #menu_link, .header_bar_hover #mega_menu, .header_bar_hover #mini_bar {
        z-index: 3;
        transition: all 0s 0s;
    }

    .mega_menu_hover #container_header {
        z-index: 4;
        transition: all 0s 0s;
        position: relative;
    }

    .header_bar .span_hotline i {
        margin-top: -3px;
    }

    #simple_tip .hotline_tooltip {
        border-radius: 3px;
        padding: 10px;
    }

    #simple_tip .hotline_tooltip div {
        color: #666666;
        font-size: 11px;
        line-height: 16px;
    }

    #simple_tip .hotline_tooltip div b {
        font-size: 12px;
    }

    .container_body_resize .header_bar a span {
        display: none;
    }

    /* Chưa thay logo */
    .header_content .logo img {
        width: 190px;
        height: auto !important;
    }

    .header_content {
        padding: 18px 0 18px;
        height: inherit;
    }

    /*-------------------------------------------------------------------*/

    .header_support_online .chat {
        padding: 6px 12px 0 12px;
    }

    .header_support_online .chat b {
        cursor: pointer;
    }

    .header_support_online .chat i {
        margin: 0 10px;
    }

    .header_support_online .button button {
        background: #f44f00;
        padding: 6px 25px;
        margin-left: 10px;
    }

    .header_support_online .button button i {
        margin-right: 10px;
    }

    /*-------------------------------------------------------------------*/

    .header_simple_tip {
        width: 100%;
        overflow: hidden;
    }

    .group_like_cart_hover #overlay_body {
        opacity: 0.6;
        visibility: visible;
    }

    .group_like_cart_hover #overlay_body {
        transition: all .6s .1s;
    }

    .group_like_cart_hover #mega_menu {
        z-index: 3;
    }

    #group_product_show .product_thumb_view .picture_main a.picture_link {
        width: 170px;
        height: 170px;
    }

    #group_product_show .product_thumb_view .picture_main img {
        max-width: 170px;
        max-height: 170px;
    }

    #group_product_show .product_thumb_view .wrapper {
        height: auto;
    }

    #group_product_show .product_wrapper {
        border: 0;
    }

    #group_product_show .group_rating_order {
        display: none;
    }

    #group_product_show .product_thumb_view {
        padding-left: 40px;
    }

    .post_hd {
        padding: 0 10px;
        width: auto !important;
        margin-top: 0;
    }

    .post_hd i {
        margin-right: 10px;
    }

    .group_like_cart > div.fr {
        width: 50%;
    }

    /*-------------------------------------------------------------------*/

    #banner_premium_990x160 {
        background: #EDECEA;
        font-size: 0;
    }

    /*-----------------------------------------------------------------------*/

    /* ! CSS Used from: https://vatgia.com/static/20190715//css/v4/style_all_hoidap_v1.css */
    :active,
    :focus {
        outline: 0;
    }

    form,
    input,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        border: 0;
        -ms-interpolation-mode: bicubic;
    }

    input[type=checkbox] {
        margin-right: 3px;
        vertical-align: text-top;
    }

    input[type=submit] {
        cursor: pointer;
    }

    .clear {
        background: 0 0;
        display: block;
        clear: both;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .hidden {
        display: none;
    }

    .icon_sprite {
        background: url(https://vatgia.com/static/20190715/css/v4/beacon_sprite.png) no-repeat;
        display: inline-block;
        vertical-align: middle;
    }

    .icon_sprite_floginname {
        background-position: -11px -3668px;
        height: 14px;
        width: 14px;
    }

    .icon_sprite_fpassword {
        background-position: -11px -3698px;
        height: 14px;
        width: 14px;
    }

    .container_width {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .arrow_down {
        position: absolute;
        right: 9px;
        width: 0;
        height: 0;
    }

    .arrow_down {
        border-top: 4px solid #BBB;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
    }

    .banner_header {
        font-size: 0;
        line-height: 0;
        position: relative;
        text-align: center;
        width: 1190px;
        overflow: hidden;
        z-index: 5;
    }

    .banner_header {
        width: auto;
    }

    .form_button {
        border: 0;
        border-radius: 3px;
        color: #FFF;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        padding: 6px 9px;
        text-align: center;
    }

    .form_control {
        background: #FFF;
        border: 1px solid #E5E5E5;
        border-radius: 1px;
        font-weight: 400;
        margin: 0;
        padding: 6px 9px;
    }

    .header_bar {
        background: #fff;
        border-bottom: 1px solid #E5E5E5;
        height: 30px;
        line-height: 30px;
        white-space: nowrap;
    }

    .header_bar a {
        color: #767676;
        float: left;
        padding: 0 8px;
        position: relative;
        font-size: 13px;
        border-left: 1px solid #FFF;
        border-right: 1px solid #FFF;
    }

    .header_bar .arrow {
        padding-right: 21px;
    }

    .header_bar a .arrow_down {
        top: 11px;
    }

    .header_bar a i {
        margin-top: -3px;
    }

    .header_bar .facebook {
        background: url(https://vatgia.com/static/20190715/css/v4/beacon_sprite_other.png) no-repeat 0 -320px;
        font-size: 0;
        width: 74px;
        height: 22px;
        margin-top: 2px;
    }

    .header_login,
    .header_login div {
        padding: 6px;
    }

    .header_login .text {
        color: #999;
        cursor: default;
        font-size: 11px;
    }

    .header_login .floginname,
    .header_login .fpassword {
        position: relative;
    }

    .header_login .floginname i,
    .header_login .fpassword i {
        left: 16px;
        position: absolute;
        top: 14px;
    }

    .header_login .form_control {
        padding-left: 32px;
        width: 177px;
    }

    .header_login .form_button {
        width: 100%;
    }

    .header_login .text_link {
        font-size: 11px;
    }

    .header_login .login_other a {
        background-image: url(https://vatgia.com/static/20190715/css/v4/beacon_sprite_other.png);
        background-repeat: no-repeat;
        display: block;
        width: 220px;
        height: 35px;
    }

    .header_login .login_other .facebook {
        background-position: 0 -320px;
    }

    .header_login .login_other .google {
        background-position: 0 -360px;
    }

    .header_content {
        height: inherit;
        padding: 15px 0;
    }

    .header_content .logo {
        float: left;
        font-size: 0;
        overflow: hidden;
        text-align: center;
        width: 200px;
    }

    #header_search .border a {
        float: left;
    }

    #header_search #header_search_text .arrow_down {
        border-color: #333 transparent transparent!important;
        right: 12px;
        top: 15px;
    }

    #header_search .keyword div,
    #header_search .keyword input {
        height: 16px;
        overflow: hidden;
    }

    #header_search .keyword div {
        position: relative;
    }

    #header_search .keyword input {
        border: 0 transparent;
        font-size: 13px;
        width: 100%;
    }

    .header_search_option li a {
        border-top: 1px solid #E5E5E5;
        display: block;
        padding: 9px 12px;
    }

    .header_search_option .list:first-child a {
        border-top: 0;
    }

    #header_history_keyword a {
        color: #999;
        white-space: nowrap;
    }

    #header_history_keyword a:hover {
        color: #0C81F6;
    }

    .text_link {
        cursor: pointer;
    }

    .text_link:hover {
        text-decoration: underline;
    }

    [class^=flaticon-]:after,
    [class^=flaticon-]:before {
        font-family: Flaticon;
        font-size: inherit!important;
        font-style: normal!important;
        margin-left: inherit!important;
    }

    .header_bar a [class*=flaticon-],
    .header_bar a [class^=flaticon-],
    .header_bar a:hover,
    .text_link {
        color: #0C81F6!important;
    }

    .group_like_cart {
        position: relative;
        float: right;
        line-height: 38px;
        z-index: 5;
        margin-top: 15px;
    }

    .group_like_cart>div.fr {
        width: 50%;
        position: relative;
        text-align: center;
        box-sizing: border-box;
    }

    .group_like_cart>div.fr a {
        display: inline-block;
        position: relative;
    }

    * {
        font-family: Arial,sans-serif,Tahoma,Helvetica;
        margin: 0;
        padding: 0;
    }

    a,
    a:hover {
        text-decoration: none;
        color: #333;
    }

    .container_width {
        width: 1050px!important;
    }

    .nav_header {
        box-shadow: 0 6px 8px #ebebeb;
    }

    .box_fix_top {
        width: 100%;
        background: #fff;
        top: 0;
        z-index: 2;
    }

    #header_content {
        padding-bottom: 3px;
    }

    .clear {
        clear: both;
        width: 0;
        height: 0;
        background: 0;
    }

    .group_like_cart {
        width: 234px;
    }

    .post_hd {
        float: right;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        width: 160px;
        height: 36px;
        line-height: 38px;
        margin-top: 2px;
        border-radius: 3px;
    }

    .post_hd:hover {
        color: #fff;
    }

    a:hover {
        color: #0C81F6;
    }

    .header_content {
        padding-bottom: 15px;
        padding-top: 5px;
    }

    .post_hd {
        background: #F44F00!important;
        white-space: nowrap;
    }

    .header_bar .fr a:last-child {
        max-width: 84px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    /* ! CSS Used from: https://vatgia.com/static/20190715/css/flaticon/flaticon.css?v=20190715 */
    .flaticon-eye-outline:before {
        content: "\f111";
    }

    .flaticon-edit:before {
        content: "\f126";
    }

    .flaticon-cart:before {
        content: "\f134";
    }

    .flaticon-global:before {
        content: "\f137";
    }

    .flaticon-user-plus:before {
        content: "\f13e";
    }

    .flaticon-user:before {
        content: "\f148";
    }

    /* ! CSS Used from: Embedded */
    .header_content .logo img {
        width: 190px;
        height: auto!important;
    }

    .header_content {
        padding: 18px 0 18px;
        height: inherit;
    }

    /* ! CSS Used from: Embedded */
    .post_hd {
        padding: 0 10px;
        width: auto!important;
        margin-top: 0;
    }

    .post_hd i {
        margin-right: 10px;
    }

    .group_like_cart>div.fr {
        width: 50%;
    }

    /* ! CSS Used fontfaces */
    @font-face{
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot);
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot#iefix) format("embedded-opentype"),url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.woff) format("woff"),url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.ttf) format("truetype"),url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
        font-weight: 400;
        font-style: normal;
    }

    @font-face{
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
    }
</style>
