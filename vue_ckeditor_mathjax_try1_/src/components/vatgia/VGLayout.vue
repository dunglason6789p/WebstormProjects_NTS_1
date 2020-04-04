<template>
    <div id="body" style="height: auto !important;">
        <div id="container_body" style="height: auto !important;" class="">
            <div id="container_header" class="nav_header box_fix_top">
                <div id="vatgia_new_home_1190x90_header" class="banner_header"></div>


                <div class="header_bar">
                    <div class="container_width">
                        <div class="fl">
                            <a href="https://vatgia.com/home/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=product&#39;, &#39;menuProduct&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;product&#39;)">Học sinh, sinh viên</a>
                            <a href="https://vatgia.com/raovat/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=raovat&#39;, &#39;menuRaovat&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;raovat&#39;)">Thầy cô giáo</a>
                            <a href="https://vatgia.com/tu-van/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=tuvan&#39;, &#39;menuTuVan&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;tuvan&#39;)">Nhà trường</a>
                            <a class="simple_tip" onclick="return false" href="http://help.vatgia.com/" target="_blank" rel="nofollow" hidearrow="1" addclass="header_bar_simple_tip" onshow="showButton()" js="loadAjaxContent(&#39;/ajax_v4/load_support_online.php&#39;, &#39;supportOnline&#39;)">Hỗ
                                                                                                                                                                                                                                                                                                      trợ
                            </a>
                            <div id="hotline_tooltip" class="hidden">
                                <div style="margin-bottom: 8px;">
                                    <b>Từ 8h30 đến 17h30</b>
                                    (thứ 2 đến thứ 6)
                                </div>
                                <div>
                                    <b>Từ 8h đến 12h</b>
                                    (thứ 7)
                                </div>
                            </div>
                            <div id="header_bar_menu_extra" class="hidden">
                                <a class="image baokim" href="https://www.baokim.vn/" target="_blank" rel="nofollow">
                                    BaoKim.vn
                                </a>
                                <a class="image nhanh" href="http://www.nhanh.vn/" target="_blank" rel="nofollow">Nhanh.vn
                                </a>
                            </div>
                        </div>

                        <div class="fr">

                            <a href="javascript:;" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v5/load_group_product_show.php?type_show=user_save&#39;, &#39;tabUserSave&#39;);" hidearrow="1" addclass="header_simple_tip">
                                <i class="flaticon-eye-outline" style="font-size: 16px;margin-top: 1px;float: left;"></i>&nbsp;
                                <span>Theo dõi</span>
                            </a>
                            <a class="simple_tip" onclick="return false" href="javascript:;" rel="nofollow" hidearrow="1" addclass="header_bar_simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_notify.php&#39;, &#39;notifyHeader&#39;)">
                                <i class="flaticon-global"></i>&nbsp;
                                <span>Thông báo</span>
                            </a>

                            <a href="https://vnid.net/register?return_url=aHR0cHM6Ly92YXRnaWEuY29tLw==" rel="nofollow" target="_blank">
                                <i class="flaticon-user-plus" style="font-size: 14px;float: left;margin-top: 1px;"></i>&nbsp;
                                                                                                                       Đăng
                                                                                                                       ký
                            </a>
                            <a class="simple_tip" event="click" href="javascript:;" rel="#header_login" hidearrow="1" addclass="header_bar_simple_tip" onshow="simpleTipLoginOnShow()" oncleanup="simpleTipLoginOnCleanup()">
                                <i class="flaticon-user"></i>&nbsp; Đăng nhập
                            </a>

                            <div id="header_login" class="hidden">
                                <form class="header_login" name="header_login" action="https://vatgia.com/home/act_login.php?redirect=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/c29ydD0y" method="post" onsubmit="return checkForm(this.name, vatgiaConfig.login_config.array_check_form);">
                                    <div class="login_other">
                                        <a class="facebook" href="https://vnid.net/login/facebook?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/c29ydD0y" rel="nofollow"></a>
                                    </div>
                                    <div class="login_other">
                                        <a class="google" href="https://vnid.net/login/google?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/c29ydD0y" rel="nofollow"></a>
                                    </div>
                                    <div class="text">Hoặc đăng nhập bằng tài khoản
                                        <a style="color: #0C81F6;" href="https://vnid.net/login?return_url=aHR0cHM6Ly92YXRnaWEuY29tL2hvaWRhcC9pbmRleC5waHA/c29ydD0y">
                                            VNID.NET
                                        </a>
                                    </div>
                                    <div class="floginname">
                                        <i class="icon_sprite icon_sprite_floginname"></i>
                                        <input type="text" class="form_control" name="loginname" autocomplete="off" placeholder="Tên đăng nhập">
                                    </div>
                                    <div class="fpassword">
                                        <i class="icon_sprite icon_sprite_fpassword"></i>
                                        <input type="password" class="form_control" name="password" placeholder="Mật khẩu">
                                    </div>
                                    <div>
                                        <input type="checkbox" name="remember_password" value="1">
                                        <span class="text" onclick="$(this).prev().click()">Nhớ mật khẩu</span>
                                        <a class="text_link fr" href="https://vnid.net/forgot-password" target="_blank" rel="nofollow">Quên mật khẩu?
                                        </a>
                                        <span class="clear"></span>
                                    </div>
                                    <div class="text" style="width: 220px;">Hotline hỗ trợ:
                                        <b style="color: #0C81F6; font-size:12px;">024 710 78 999</b>
                                    </div>
                                    <div class="text" style="width: 220px;">Sử dụng
                                        <a style="color: #0C81F6;" href="https://vatgia.com/home/oldlogin.php">Đăng nhập</a>
                                                                            theo cách cũ
                                    </div>
                                    <div>
                                        <input type="submit" class="form_button" value="Đăng nhập">
                                    </div>
                                    <input type="hidden" name="user_login" value="login">
                                </form>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>

                <div class="bg_header_tet">
                    <div id="header_content">
                        <div class="header_content container_width" style="overflow: visible;">
                            <div class="logo">
                                <a style="display: block;" href="https://vatgia.com/hoidap/">
                                    <img src="./vatgias/logo_main.jpg" style="height: 60px;" alt="Vatgia.com">
                                </a>
                            </div>

                            <div class="group_like_cart" style="z-index: 0;">
                                <div class="fr">
                                    <button @click="showCkE" class="post_hd">
                                        <i class="flaticon-edit"></i>
                                        Đăng câu hỏi
                                    </button>
                                </div>
                                <div class="clear"></div>
                            </div>
                            <div class="search">

                                <form id="header_search" name="header_search" action="https://vatgia.com/hoidap/quicksearch.php" method="get" onsubmit="return checkHeaderSearch(this, event);">
                                    <div class="border" id="home_search_control">
                                        <a id="header_search_text" class="simple_tip" href="javascript:;" rel="#header_search_option">Hỏi đáp
                                            <b class="arrow_down"></b>
                                        </a>
                                        <button class="button" type="submit" aria-label="Tìm kiếm">
                                            <i class="flaticon-search"></i>
                                        </button>
                                        <div class="keyword">
                                            <div>
                                                <input aria-label="Từ khóa tìm kiếm" type="text" id="header_search_keyword" name="keyword" value="" placeholder="Hỏi ngay cộng đồng triệu người dùng!" maxlength="100" autocomplete="off">
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <input type="hidden" id="search_shop" name="view" value="search" disabled="disabled">
                                    <input type="hidden" id="search_category" name="iCat" disabled="disabled">
                                    <div id="header_history_keyword">
                                        <a title="nike" href="https://vatgia.com/home/nike.spvg" target="_blank">tích phân hai lớp</a>
                                        &nbsp; | &nbsp;
                                        <a title="giay the thao" href="https://vatgia.com/home/giay+the+thao.spvg" target="_blank">hình học nâng cao</a> &nbsp; | &nbsp;
                                        <a title="air max" href="https://vatgia.com/home/air+max.spvg" target="_blank">hsg địa lý</a> &nbsp; | &nbsp;
                                        <a title="khẩu trang kt5" href="https://vatgia.com/home/kh%E1%BA%A9u+trang+kt5.spvg" target="_blank">cơ học</a> &nbsp; | &nbsp;
                                        <a title="thùng xốp" href="https://vatgia.com/home/th%C3%B9ng+x%E1%BB%91p.spvg" target="_blank">lý thuyết mạch</a> &nbsp; | &nbsp;
                                        <a title="gỗ ván ép" href="https://vatgia.com/home/g%E1%BB%97+v%C3%A1n+%C3%A9p.spvg" target="_blank">cách giải đề thi</a>
                                    </div>
                                    <div class="history-search">
                                        <ul class="history-item"></ul>
                                        <ul class="search-item"></ul>
                                    </div>
                                </form>
                                <div id="header_search_option" class="hidden">
                                    <ul class="header_search_option">
                                        <li class="list">
                                            <a href="javascript:;" rel="nofollow" onclick="changeSearchOption(&#39;module&#39;, 0, $(this))">Sản phẩm
                                            </a>
                                        </li>
                                        <li class="list">
                                            <a href="javascript:;" rel="nofollow" onclick="changeSearchOption(&#39;module&#39;, 1, $(this))">Rao vặt
                                            </a>
                                        </li>
                                        <li class="list">
                                            <a href="javascript:;" rel="nofollow" onclick="changeSearchOption(&#39;module&#39;, 2, $(this))">Hỏi đáp
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>


            </div>

            <!--<MyCkEditorB ref="myCkE1"/>-->

            <div class="container_width">
                <div style="margin: 10px 0; overflow: hidden;">
                    <div id="tintuc_vatgia_1000x193"></div>
                </div>
            </div>
            <div id="container_content" style="height: auto !important;">
                <div class="qa_content page_home">
                    <div class="qa_left" style="height: auto !important; min-height: 0px !important;">
                        <div class="menu_left">
                            <div class="text_title">Danh mục</div>
                            <ul class="main_left v-2">
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/5037/hoi-dap-ve-vatgia-com.html">
                                        <span>Toán học</span>
                                        <em>5.407</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/3849/may-tinh-internet.html">
                                        <span>Vật lý</span>
                                        <em>106.092</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/4228/may-anh-may-quay-phim.html">
                                        <span>Hóa học</span>
                                        <em>13.202</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/3863/dien-thoai-vien-thong.html">
                                        <span>Sinh học</span>
                                        <em>109.776</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/5865/bao-ve-nguoi-tieu-dung.html">
                                        <span>Tin học</span>
                                        <em>2.333</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/3861/dien-tu-gia-dung.html">
                                        <span>Văn học</span>
                                        <em>32.982</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/3866/oto-xe-may-xe-dap.html">
                                        <span>Lịch sử</span>
                                        <em>49.216</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="">
                                    <i class="icon-list-menu"></i>
                                    <a href="https://vatgia.com/hoidap/4536/cong-nghiep-xay-dung.html">
                                        <span>Địa lý</span>
                                        <em>5.824</em>
                                        <i></i>
                                    </a>
                                    <ul class="main_lv2 " style="min-height: 548px;">
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Cấp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Cấp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Cấp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Đại học
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                    </ul>
                                </li>








                            </ul>
                        </div>
                        <div class="clear"></div>


                        <div class="box-product-cpm fr" style="display: none;">
                            <span class="title">
                                <span>Sản phẩm nổi bật</span>
                            </span>
                            <div id="product-cpm" status="1" scroll-top="1" url="/ajax_v5/action_auction_impression.php?action=load_data&amp;limit=8&amp;spent=1&amp;type=3">
                                <img class="img_center" src="./vatgias/loading.gif">
                            </div>
                        </div>
                        <!--<center style="height: auto !important;">
                            <div style="margin-bottom: 15px; text-align: center; width: 100%; overflow: hidden;" id="vatgia_pc_hoidap_home_1">
                                <ins class="adsbygoogle" style="display: block; height: 468px; width: 234px;" data-ad-client="ca-pub-2979760623205174" data-ad-slot="8838779329" data-ad-format="auto" data-full-width-responsive="true" data-adsbygoogle-status="done">
                                    <ins id="aswift_1_expand" style="display: inline-table; border: none; height: 468px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 234px; background-color: transparent;">
                                        <ins id="aswift_1_anchor" style="display: block; border: none; height: 468px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 234px; background-color: transparent; overflow: hidden;">
                                            <iframe width="234" height="468" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_1" name="aswift_1" style="left: 0px; position: absolute; top: 0px; border: 0px; width: 234px; height: 468px; overflow: visible;" src="./vatgias/saved_resource(4).html"></iframe>
                                        </ins>
                                    </ins>
                                </ins>

                            </div>
                        </center>-->
                    </div>
                    <div class="qa_center">
                        <div class="filter">
                            <a href="https://vatgia.com/hoidap/index.php?&amp;sort=0">Mới</a>
                            <a href="https://vatgia.com/hoidap/index.php?&amp;sort=1">Chưa trả lời</a>
                            <a class="active" href="https://vatgia.com/hoidap/index.php?&amp;sort=2">Trả lời nhiều</a>
                            <a href="https://vatgia.com/hoidap/index.php?&amp;sort=3">Xem nhiều</a>
                            <a href="https://vatgia.com/hoidap/index.php?&amp;sort=4">Có ích</a>
                        </div>
                        <div id="box_main_content">
                            <div class="box_main_content" cache="menu_hoidap_v4_new">
                                <div v-for="searchResultItem in searchResultList" v-bind:key="searchResultItem.question.id" class="qa_item item_708806">
                                    <div class="top_qa_item">
                                        <div class="img_qua_item">
                                            <a class="tooltip_user" idata="708806" iuse="7258126" href="https://vatgia.com/hoidap/type_user.php?iUse=7258126">
                                                <img src="./vatgias/avatar.jpg">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <h2 title="Tư vấn giúp mua máy giặt mini?">
                                                <a class="tooltip" href="#" :title="searchResultItem.question.title" target="_blank">{{searchResultItem.question.title}}</a>
                                            </h2>
                                            <p> 22/02/2020 - 21:12
                                                <span>•</span>
                                                <a class="text_link_pale" href="#">{{searchResultItem.question.category}}</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <div class="teaser show_708806 no-image">{{searchResultItem.question.content}}</div>
                                    </div>
                                    <div class="bot_qa_item">
                                        <a class="btn_reply_fast" onclick="openReplyFast(this)" record_id="708806" status="1">
                                            <i class="flaticon-pencil"></i>
                                            <span>Trả lời ({{searchResultItem.question.numOfAnswers}})</span>
                                        </a>
                                        <a class="btn_condone" onclick="condone(this)" record_id="708806">
                                            <span>Bỏ qua</span>
                                        </a>
                                        <a class="">
                                            <span>Lượt xem</span>
                                            <span>{{searchResultItem.question.viewCount}}</span>
                                        </a>
                                        <div class="box_share">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.vatgia.com/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html&amp;t=TITLE" target="_blank" title="Chia sẻ lên Facebook">
                                                <i class="flaticon-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/share?url=https://www.vatgia.com/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html&amp;via=TWITTER_HANDLE&amp;text=TEXT" target="_blank" title="Chia sẻ lên Twitter">
                                                <i class="flaticon-twitter"></i>
                                            </a>
                                            <a href="https://plus.google.com/share?url=https://www.vatgia.com/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html" target="_blank" title="Chia sẻ lên Google+">
                                                <i class="flaticon-ggplus"></i>
                                            </a>
                                            <a>
                                                <i class="flaticon-three-dots" onclick="moreActionList(this)">
                                                    <ul class="box-more">
                                                        <li onclick="" title="Gửi báo cáo vi phạm đến ban quản trị.">Báo vi phạm</li>
                                                        <li class="hide-rely" title="Ẩn câu hỏi" onclick="condone(this)">Ẩn câu hỏi</li>
                                                    </ul>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box_comment show_comment_708806" id="show_comment_708806" record_id="708806" last_up="1582618710">
                                        <div class="comment_description">
                                            <textarea id="conten_reply_708806" class="conten_reply conten_reply_708806" name="conten_reply" placeholder="Nhập câu trả lời của bạn tại đây" type="text" onclick="checkReply(this)" onkeypress="checkDataReply(event)"></textarea>
                                            <a class="btn_reply" onclick="replyFastAction(this)">Gửi</a>
                                            <div class="box_capcha">
                                                <div class="box_capcha_708806" id="box_capcha_708806"></div>
                                                <img class="img_loading" src="./vatgias/loading(1).gif">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_reply_hoidap" onclick="">
                                        <div class="reply_comment_box">
                                            <div class="avatar_reply">
                                                <a href="#">
                                                    <img src="./vatgias/1582681965-epc.jpg">
                                                </a>
                                            </div>
                                            <div class="description_reply">
                                                <div class="info_user_reply">
                                                    <p>{{searchResultItem.topAnswer.author.fullName}}</p>
                                                    <div class="text_comment_reply">{{searchResultItem.topAnswer.content}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="pagination" icat="0" sort="2" page="2" url="/ajax_v3/ajax_hoidap_load_content.php"></div>
                    </div>
                    <div class="qa_right" style="height: auto !important;">

                        <div id="vatgia_banner_ads_190x90">
                            <div class="str_info_main">
                                <div class="str_info">
                                    <span class="info_phone">
                                        <b>CHIA SẺ KIẾN THỨC</b>
                                    </span>
                                </div>
                                <div class="str_info">
                                    <span class="info_phone">
                                        <b>CÙNG NHAU HỌC TẬP</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!--<center>
                            <div style="margin-bottom: 15px; text-align: center; width: 100%; overflow: hidden;" id="vatgia_pc_hoidap_home_3">
                                <ins class="adsbygoogle" style="display: block; width: 234px; height: 200px;" data-ad-client="ca-pub-2979760623205174" data-ad-slot="7525697659" data-adsbygoogle-status="done">
                                    <ins id="aswift_3_expand" style="display:inline-table;border:none;height:200px;margin:0;padding:0;position:relative;visibility:visible;width:234px;background-color:transparent;">
                                        <ins id="aswift_3_anchor" style="display:block;border:none;height:200px;margin:0;padding:0;position:relative;visibility:visible;width:234px;background-color:transparent;">
                                            <iframe width="234" height="200" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_3" name="aswift_3" style="left:0;position:absolute;top:0;border:0px;width:234px;height:200px;" src="./vatgias/saved_resource(6).html"></iframe>
                                        </ins>
                                    </ins>
                                </ins>

                            </div>
                        </center>-->
                        <div class="theme_hot">
                            <div class="theme_title">
                                <h3 class="theme_hot_title">Bảng xếp hạng</h3>
                            </div>
                            <div class="box-tab">
                                <ul class="theme_hot_tab">
                                    <li class="hoidap_hot_tab active" load="1" tab="hot_week">Tuần
                                        <span class="last">|</span>
                                    </li>
                                    <li class="hoidap_hot_tab" load="0" tab="hot_month">Tháng
                                        <span class="last">|</span>
                                    </li>
                                    <li class="hoidap_hot_tab">
                                        <a target="_blank" href="https://vatgia.com/hoidap/type_hot.php">Tất cả</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="theme_hot_container">
                                <img class="hidden loading" src="./vatgias/loading_small.gif">
                                <ul class="theme_hot_content hot_week">
                                    <li class="theme_hot_item">
                                        <h4 title="CHUYÊN GIA GIẢI ĐÁP: 3 SỰ THẬT VỀ NỘI TIẾT TỐ NỮ ESTROGEN">
                                            <a title="CHUYÊN GIA GIẢI ĐÁP: 3 SỰ THẬT VỀ NỘI TIẾT TỐ NỮ ESTROGEN" href="https://vatgia.com/hoidap/3945/708916/chuyen-gia-giai-dap-3-su-that-ve-noi-tiet-to-nu-estrogen.html">
                                                Nguyễn Thị Liên
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Nhà có trẻ nhỏ nên mua điều hòa hay quạt phun sương?">
                                            <a title="Nhà có trẻ nhỏ nên mua điều hòa hay quạt phun sương?" href="https://vatgia.com/hoidap/6571/708923/nha-co-tre-nho-nen-mua-dieu-hoa-hay-quat-phun-suong.html">
                                                Lê Quang Minh
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Xin review về nước lau sàn hữu cơ diệt khuẩn bồ hòn Ecocare.">
                                            <a title="Xin review về nước lau sàn hữu cơ diệt khuẩn bồ hòn Ecocare." href="https://vatgia.com/hoidap/3906/708921/xin-review-ve-nuoc-lau-san-huu-co-diet-khuan-bo-hon-ecocare.html">
                                                Trần Phú Minh
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Quạt không cánh dùng có hiệu quả không?">
                                            <a title="Quạt không cánh dùng có hiệu quả không?" href="https://vatgia.com/hoidap/6571/708919/quat-khong-canh-dung-co-hieu-qua-khong.html">
                                                Nguyễn Bá Hùng
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Nước lau sàn hữu cơ diệt khuẩn dùng loại nào tốt???">
                                            <a title="Nước lau sàn hữu cơ diệt khuẩn dùng loại nào tốt???" href="https://vatgia.com/hoidap/3906/708920/nuoc-lau-san-huu-co-diet-khuan-dung-loai-nao-tot.html">
                                                Lý Thị Mai
                                            </a>
                                        </h4>
                                    </li>
                                </ul>
                                <ul class="hot_month theme_hot_content"></ul>
                            </div>
                        </div>
                        <div class="clear"></div>

                        <div class="answer_lp answer_new all_box-border">
                            <div class="title_answer">Câu hỏi mới nhất</div>
                            <ul class="list_lp">
                                <li>
                                    <h2 title="Đơn vị chạy Digital Marketing nào uy tín hiện nay ở TPHCM?">
                                        <a title="Đơn vị chạy Digital Marketing nào uy tín hiện nay ở TPHCM?" href="https://vatgia.com/hoidap/3869/709013/don-vi-chay-digital-marketing-nao-uy-tin-hien-nay-o-tphcm.html">
                                            Cách đo mạch điện, điện trở suất của thiết bị thí nghiệm ...
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Cho hỏi điện thoại huawei vị vô nước sửa hết bao nhiêu tiền ạ">
                                        <a title="Cho hỏi điện thoại huawei vị vô nước sửa hết bao nhiêu tiền ạ" href="https://vatgia.com/hoidap/6079/709012/cho-hoi-dien-thoai-huawei-vi-vo-nuoc-sua-het-bao-nhieu-tien-a.html">
                                            Khi tham gia thi TOEIC, cần chuẩn bị những giấy tờ gì ?
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Review nước tẩy rửa đay năng siêu sạch SUMO.">
                                        <a title="Review nước tẩy rửa đay năng siêu sạch SUMO." href="https://vatgia.com/hoidap/3948/709010/review-nuoc-tay-rua-day-nang-sieu-sach-sumo.html">
                                            Cách ôn tập trong mùa dịch Corona
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Các sản phẩm nước tẩy rửa đa năng của Hàn Quốc có thực sự tốt?">
                                        <a title="Các sản phẩm nước tẩy rửa đa năng của Hàn Quốc có thực sự tốt?" href="https://vatgia.com/hoidap/3948/709009/cac-san-pham-nuoc-tay-rua-da-nang-cua-han-quoc-co-thuc-su-tot.html">
                                            Học sinh THPT cần chuẩn bị những gì cho kỳ thi đại học ?
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Đánh giá quạt Asia treo tường có remote đi kèm.">
                                        <a title="Đánh giá quạt Asia treo tường có remote đi kèm." href="https://vatgia.com/hoidap/6571/709008/danh-gia-quat-asia-treo-tuong-co-remote-di-kem.html">
                                            Cho một mol KNO3 vào dung dịch trong suốt ở nhiệt độ phòng, hãy cho biết...
                                        </a>
                                    </h2>
                                </li>
                            </ul>
                        </div>
                        <div id="vatgia_hoidap_right_230x460"></div>
                    </div>
                </div>

            </div>
            <div class="clear"></div>
            <div id="container_footer">

                <div id="vatgia_fix_bottom">
                    <div id="vatgia_fix_bottom_393x80"></div>
                    <a title="Đóng" class="close" href="javascript:;" onclick="">
                        ×
                    </a>
                </div>


            </div>
        </div>
        <MyModalCkEditorB ref="myModalCkEditorB1" v-show="showCkEModal" @close_MyModalCkEditorB="showCkEModal = false" @open_MyModalGeogebra="switchCkeToGgb()"></MyModalCkEditorB>
        <MyModalGeogebra ref="myModalGeogebra1" v-show="showGgbModal" @close_MyModalGeogebra="showGgbModal = false" @imageCapturedEvent1="switchGgbToCke"></MyModalGeogebra>
    </div>
</template>

<script>
    /**
     * @typedef {Object} User
     * @property {string} id
     * @property {string} fullName
     */
    /**
     * @typedef {Object} Question
     * @property {string} id
     * @property {string} title
     * @property {string} content
     * @property {string} category
     * @property {User} author
     * @property {number} numOfAnswers
     * @property {number} viewCount
     */
    /**
     * @typedef {Object} Answer
     * @property {string} id
     * @property {string} content
     * @property {User} author
     */
    /**
     * @typedef {Object} SearchResultItem
     * @property {number} index
     * @property {Question} question
     * @property {Answer} topAnswer
     */


    function pickRandomInArr(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    function genFakeData(totalCount){
        /**@type {SearchResultItem[]}*/
        const arr = [];
        for (let i = 0; i < totalCount; i++) {
            arr.push({
                question:{
                    id:"id"+i,
                    title:"Đánh giá về thành tựu của ASEAN sau 40 năm hình thành và phát triển. Thành tựu nào đc cho là quan trọng nhất mà ASEAN đạt đc trong 4 thập kỉ qua",
                    content:"Mình gặp câu hỏi này trong đề thi: Nước ta đang trong quá trình thực hiện đường lối đổi mới của Đảng, tiến hành công nghiệp hóa, hiện đại hóa để xây dựng...",
                    category:"Lịch sử",
                    numOfAnswers: 11,
                    viewCount: 21,
                    author:{
                        fullName:"Son Nguyen"
                    }
                },
                topAnswer:{
                    content:"Cần tập trung phát triển công nghiệp, coi đó là khâu then chốt thúc đẩy sự phát triển nền kinh tế của VN trong công cuộc xây dựng đất nước hiện nay",
                    author:{
                        fullName:"Truong Nguyen"
                    }
                }
            });
        }
        return arr;
    }


    // import MyCkEditorB from "../cke/MyCkEditorB";
    import MyModalCkEditorB from "../cke/modal/MyModalCkEditorB";
    import MyModalGeogebra from "../geogb/modal/MyModalGeogebra"
    export default {
        name: "VGLayout",
        components: {
            // MyCkEditorB,
            MyModalCkEditorB,
            MyModalGeogebra
        },
        data(){
            return{
                showCkEModal: false,
                showGgbModal: false,
                /**@type {SearchResultItem[]}*/
                searchResultList:genFakeData(5)
            }
        },
        methods:{
            showCkE(){
                // this.$refs.myCkE1.showCk();
                this.showCkEModal = true;
            },
            switchCkeToGgb(){
                this.showCkEModal = false;
                this.showGgbModal = true;
            },
            switchGgbToCke(imageContentUrl){
                console.log("VGLayout received image:"+imageContentUrl);
                this.$refs.myModalCkEditorB1.setImageToCkEComponent(imageContentUrl);
                this.showCkEModal = true;
                this.showGgbModal = false;
            }
        }
    }
</script>

<style scoped src="./vatgias/style_all_hoidap_v1.css"></style>
<style scoped src="./vatgias/inlined_but_nts_extracted.css"></style>
<style scoped src="./vatgias/flaticon.css"></style>
