<template>
    <div id="body" style="height: auto !important;">
        <div id="container_body" style="height: auto !important;" class="">
            <div id="container_header" class="nav_header box_fix_top">
                <div id="vatgia_new_home_1190x90_header" class="banner_header"></div>


                <div class="header_bar">
                    <div class="container_width">
                        <div class="fl">
                            <a href="https://vatgia.com/home/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=product&#39;, &#39;menuProduct&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;product&#39;)">Gian hàng
                                                                                                                                                                                                                                                                   bán
                            </a>
                            <a href="https://vatgia.com/raovat/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=raovat&#39;, &#39;menuRaovat&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;raovat&#39;)">Rao vặt
                            </a>
                            <a href="https://vatgia.com/tu-van/" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v4/load_menu.php?module=tuvan&#39;, &#39;menuTuVan&#39;)" hidearrow="1" addclass="header_bar_simple_tip" onshow="initMenu(&#39;tuvan&#39;)">Tư vấn
                            </a>
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

                            <a href="https://vatgia.com/cart" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v5/load_group_product_show.php?type_show=my_cart&#39;, &#39;tabUserCart&#39;);" hidearrow="1" addclass="header_simple_tip">
                                <i class="flaticon-cart" style="font-size: 13px;margin-top: 1px;float: left;"></i>&nbsp;
                                <span>Giỏ hàng</span>
                            </a>
                            <a href="javascript:;" class="simple_tip" js="loadAjaxContent(&#39;/ajax_v5/load_group_product_show.php?type_show=user_save&#39;, &#39;tabUserSave&#39;);" hidearrow="1" addclass="header_simple_tip">
                                <i class="flaticon-eye-outline" style="font-size: 16px;margin-top: 1px;float: left;"></i>&nbsp;
                                <span>Đã xem</span>
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
                                    <img src="./vatgias/hoidap_logo_v3.svg" style="height: 60px;" alt="Vatgia.com">
                                </a>
                            </div>

                            <div class="group_like_cart">
                                <div class="fr">
                                    <a class="post_hd" href="https://vatgia.com/hoidap/post.php">
                                        <i class="flaticon-edit"></i>
                                        Đăng câu hỏi
                                    </a>
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
                                        <a title="nike" href="https://vatgia.com/home/nike.spvg" target="_blank">nike</a>
                                        &nbsp; | &nbsp;
                                        <a title="giay the thao" href="https://vatgia.com/home/giay+the+thao.spvg" target="_blank">giay the thao
                                        </a> &nbsp; | &nbsp;
                                        <a title="air max" href="https://vatgia.com/home/air+max.spvg" target="_blank">air
                                                                                                                       max
                                        </a> &nbsp; | &nbsp;
                                        <a title="khẩu trang kt5" href="https://vatgia.com/home/kh%E1%BA%A9u+trang+kt5.spvg" target="_blank">khẩu trang kt5
                                        </a> &nbsp; | &nbsp;
                                        <a title="thùng xốp" href="https://vatgia.com/home/th%C3%B9ng+x%E1%BB%91p.spvg" target="_blank">thùng xốp
                                        </a> &nbsp; | &nbsp;
                                        <a title="gỗ ván ép" href="https://vatgia.com/home/g%E1%BB%97+v%C3%A1n+%C3%A9p.spvg" target="_blank">gỗ ván ép
                                        </a>
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                            <a class="" href="https://vatgia.com/hoidap/9831/y-tuong-phat-trien-vatgia-com.html" title="Ý tưởng phát triển Vatgia.com">Lớp 1
                                                <em>
                                                    <span>(</span>
                                                    211
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5039/ban-hang-gian-hang-tren-vatgia-com.html" title="Bán hàng (gian hàng) trên vatgia.com">Lớp 2
                                                <em>
                                                    <span>(</span>
                                                    697
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/4556/mua-hang-tren-vatgia-com.html" title="Mua hàng trên vatgia.com">Lớp 3
                                                <em>
                                                    <span>(</span>
                                                    609
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5507/ban-hang-online-hieu-qua.html" title="Bán hàng online hiệu quả ">Lớp 4
                                                <em>
                                                    <span>(</span>
                                                    170
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5442/cac-dich-vu-moi-cua-vat-gia.html" title="Các dịch vụ mới của Vật Giá">Lớp 5
                                                <em>
                                                    <span>(</span>
                                                    93
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5443/cac-tinh-nang-moi-cua-vat-gia.html" title="Các tính năng mới của Vật Giá">Lớp 6
                                                <em>
                                                    <span>(</span>
                                                    225
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5734/giai-thuong-tren-vatgia-com.html" title="Giải thưởng trên vatgia.com">Lớp 7
                                                <em>
                                                    <span>(</span>
                                                    58
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5044/hoi-dap-binh-chon-tren-vatgia-com.html" title="Hỏi đáp, bình chọn, trên vatgia.com">Lớp 8
                                                <em>
                                                    <span>(</span>
                                                    506
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5043/rao-vat-tren-vatgia-com.html" title="Rao vặt trên vatgia.com">Lớp 9
                                                <em>
                                                    <span>(</span>
                                                    541
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5046/lam-viec-tai-vatgia-com.html" title="Làm việc tại vatgia.com">Lớp 10
                                                <em>
                                                    <span>(</span>
                                                    44
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5040/lich-su-mo-hinh-kinh-doanh-cua-vatgia-com.html" title="Lịch sử, mô hình kinh doanh của vatgia.com">Lớp 11
                                                <em>
                                                    <span>(</span>
                                                    31
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5038/quang-cao-lien-ket-tren-vatgia-com.html" title="Quảng cáo, liên kết trên vatgia.com">Lớp 12
                                                <em>
                                                    <span>(</span>
                                                    100
                                                    <span>)</span>
                                                </em>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="icon-plus">+</i>
                                            <a class="" href="https://vatgia.com/hoidap/5042/quy-dinh-chinh-sach-cua-vatgia-com.html" title="Quy định, chính sách của vatgia.com">Đại học
                                                <em>
                                                    <span>(</span>
                                                    105
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
                                <div class="qa_item item_708806 " id="item_708806">
                                    <div class="top_qa_item">
                                        <div class="img_qua_item">
                                            <a class="tooltip_user" idata="708806" iuse="7258126" href="https://vatgia.com/hoidap/type_user.php?iUse=7258126">
                                                <img src="./vatgias/avatar.jpg">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <h2 title="Tư vấn giúp mua máy giặt mini?">
                                                <a class="tooltip" href="https://vatgia.com/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html" title="Tư vấn giúp mua máy giặt mini?" target="_blank">Tư vấn giúp mua
                                                                                                                                                                                                          máy giặt mini?
                                                </a>
                                            </h2>
                                            <p> 22/02/2020 - 21:12
                                                <span>•</span>
                                                trong
                                                <a class="text_link_pale" href="https://vatgia.com/hoidap/6568/may-giat.html"> Máy giặt
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <div class="teaser show_708806 no-image">Chị gái mới mới sinh cháu nhỏ, đang muốn
                                                                                 tìm mua một cái máy giặt mini để chuyên
                                                                                 giặt quần áo cho em bé chứ chị mới sinh,
                                                                                 vẫn kiêng cữ nên k giặt tay được. Chưa hãng
                                                                                 máy giặt nào chất lượng tốt mà mua. Mọi
                                                                                 người có ai sử dụng loại...
                                            <a class="" href="https://vatgia.com/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html">
                                                (Xem thêm)
                                            </a>
                                        </div>
                                    </div>
                                    <div class="bot_qa_item">
                                        <a class="btn_reply_fast" onclick="openReplyFast(this)" record_id="708806" status="1">
                                            <i class="flaticon-pencil"></i>
                                            <span>Trả lời</span>
                                        </a>
                                        <a class="btn_condone" onclick="condone(this)" record_id="708806">
                                            <span>Bỏ qua</span>
                                        </a>
                                        <a class="">
                                            <span>Lượt xem</span>
                                            <span>24</span>
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
                                                        <li onclick="windowPrompt({ href: &#39;/ajax_v2/load_send_error_hoidap.php?record_id=708806&#39;, iframe: true, width: &#39;50%&#39;, height: &#39;80%&#39; });" title="Gửi báo cáo vi phạm đến ban quản trị.">Báo vi phạm
                                                        </li>
                                                        <li class="hide-rely" title="Ẩn câu hỏi" onclick="condone(this)">Ẩn
                                                                                                                         câu
                                                                                                                         hỏi
                                                        </li>
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
                                    <div class="list_reply_hoidap" onclick="window.location.href = &#39;/hoidap/6568/708806/tu-van-giup-mua-may-giat-mini.html&#39;;">
                                        <div class="reply_comment_box">
                                            <div class="avatar_reply">
                                                <a href="https://vatgia.com/home/detail_user.php?iUse=7678844">
                                                    <img src="./vatgias/1582681965-epc.jpg">
                                                </a>
                                            </div>
                                            <div class="description_reply">
                                                <div class="info_user_reply">
                                                    <p>Bùi Ngọc Linh</p>
                                                    <div class="text_comment_reply"> Tớ có mẫu này mà rẻ hơn website 100k,
                                                                                     khá ổn bạn ạ!
                                                                                     https://huonganhgroup.vn/may-giat-toshiba-aw-a800sv-wb
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="qa_item item_708833 " id="item_708833">
                                    <div class="top_qa_item">
                                        <div class="img_qua_item">
                                            <a class="tooltip_user" idata="708833" iuse="7160782" href="https://vatgia.com/hoidap/type_user.php?iUse=7160782">
                                                <img src="./vatgias/avatar.jpg">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <h2 title="Cho hỏi lotion của hada labo dùng có tốt không mọi người?">
                                                <a class="tooltip" href="https://vatgia.com/hoidap/3922/708833/cho-hoi-lotion-cua-hada-labo-dung-co-tot-khong-moi-nguoi.html" title="Cho hỏi lotion của hada labo dùng có tốt không mọi người?" target="_blank">Cho hỏi lotion của hada labo dùng có tốt không mọi người?
                                                </a>
                                            </h2>
                                            <p> 23/02/2020 - 16:14
                                                <span>•</span>
                                                trong
                                                <a class="text_link_pale" href="https://vatgia.com/hoidap/3922/cham-soc-da.html"> Chăm sóc da
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <div class="teaser show_708833 no-image">cho hỏi lotion của hada labo dùng có tốt
                                                                                 không mọi người?
                                        </div>
                                    </div>
                                    <div class="bot_qa_item">
                                        <a class="btn_reply_fast" onclick="openReplyFast(this)" record_id="708833" status="1">
                                            <i class="flaticon-pencil"></i>
                                            <span>Trả lời</span>
                                        </a>
                                        <a class="btn_condone" onclick="condone(this)" record_id="708833">
                                            <span>Bỏ qua</span>
                                        </a>
                                        <a class="">
                                            <span>Lượt xem</span>
                                            <span>22</span>
                                        </a>
                                        <div class="box_share">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.vatgia.com/hoidap/3922/708833/cho-hoi-lotion-cua-hada-labo-dung-co-tot-khong-moi-nguoi.html&amp;t=TITLE" target="_blank" title="Chia sẻ lên Facebook">
                                                <i class="flaticon-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/share?url=https://www.vatgia.com/hoidap/3922/708833/cho-hoi-lotion-cua-hada-labo-dung-co-tot-khong-moi-nguoi.html&amp;via=TWITTER_HANDLE&amp;text=TEXT" target="_blank" title="Chia sẻ lên Twitter">
                                                <i class="flaticon-twitter"></i>
                                            </a>
                                            <a href="https://plus.google.com/share?url=https://www.vatgia.com/hoidap/3922/708833/cho-hoi-lotion-cua-hada-labo-dung-co-tot-khong-moi-nguoi.html" target="_blank" title="Chia sẻ lên Google+">
                                                <i class="flaticon-ggplus"></i>
                                            </a>
                                            <a>
                                                <i class="flaticon-three-dots" onclick="moreActionList(this)">
                                                    <ul class="box-more">
                                                        <li onclick="windowPrompt({ href: &#39;/ajax_v2/load_send_error_hoidap.php?record_id=708833&#39;, iframe: true, width: &#39;50%&#39;, height: &#39;80%&#39; });" title="Gửi báo cáo vi phạm đến ban quản trị.">Báo vi phạm
                                                        </li>
                                                        <li class="hide-rely" title="Ẩn câu hỏi" onclick="condone(this)">Ẩn
                                                                                                                         câu
                                                                                                                         hỏi
                                                        </li>
                                                    </ul>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box_comment show_comment_708833" id="show_comment_708833" record_id="708833" last_up="1582604202">
                                        <div class="comment_description">
                                            <textarea id="conten_reply_708833" class="conten_reply conten_reply_708833" name="conten_reply" placeholder="Nhập câu trả lời của bạn tại đây" type="text" onclick="checkReply(this)" onkeypress="checkDataReply(event)"></textarea>
                                            <a class="btn_reply" onclick="replyFastAction(this)">Gửi</a>
                                            <div class="box_capcha">
                                                <div class="box_capcha_708833" id="box_capcha_708833"></div>
                                                <img class="img_loading" src="./vatgias/loading(1).gif">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_reply_hoidap" onclick="window.location.href = &#39;/hoidap/3922/708833/cho-hoi-lotion-cua-hada-labo-dung-co-tot-khong-moi-nguoi.html&#39;;">
                                        <div class="reply_comment_box">
                                            <div class="avatar_reply">
                                                <a href="https://vatgia.com/home/detail_user.php?iUse=3389839">
                                                    <img src="./vatgias/avatar.jpg">
                                                </a>
                                            </div>
                                            <div class="description_reply">
                                                <div class="info_user_reply">
                                                    <p>Do Ngoc</p>
                                                    <div class="text_comment_reply"> Em dùng cái này, chai màu đỏ á, bị dị
                                                                                     ứng 2 năm í chị, mặt nổi mụn tùm lum,
                                                                                     em đi spa nó cho cái chai caramel
                                                                                     essance trị hết mà đắt kinh khủng
                                                                                     980.000, nên em tự mua dùng, giờ bán
                                                                                     luôn vì tự tin mình từng trải nghiệm -
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="qa_item item_708875 " id="item_708875">
                                    <div class="top_qa_item">
                                        <div class="img_qua_item">
                                            <a class="tooltip_user" idata="708875" iuse="7160782" href="https://vatgia.com/hoidap/type_user.php?iUse=7160782">
                                                <img src="./vatgias/avatar.jpg">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <h2 title="dùng máy rửa mặt có đẩy được nhân mụn lên không mọi người?">
                                                <a class="tooltip" href="https://vatgia.com/hoidap/3922/708875/dung-may-rua-mat-co-day-duoc-nhan-mun-len-khong-moi-nguoi.html" title="dùng máy rửa mặt có đẩy được nhân mụn lên không mọi người?" target="_blank">dùng máy rửa mặt có đẩy được nhân mụn lên không mọi
                                                                                                                                                                                                                                                                  người?
                                                </a>
                                            </h2>
                                            <p> 24/02/2020 - 14:42
                                                <span>•</span>
                                                trong
                                                <a class="text_link_pale" href="https://vatgia.com/hoidap/3922/cham-soc-da.html"> Chăm sóc da
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <div class="teaser show_708875 no-image">dùng máy rửa mặt có đẩy được nhân mụn lên
                                                                                 không mọi người?
                                        </div>
                                    </div>
                                    <div class="bot_qa_item">
                                        <a class="btn_reply_fast" onclick="openReplyFast(this)" record_id="708875" status="1">
                                            <i class="flaticon-pencil"></i>
                                            <span>Trả lời</span>
                                        </a>
                                        <a class="btn_condone" onclick="condone(this)" record_id="708875">
                                            <span>Bỏ qua</span>
                                        </a>
                                        <a class="">
                                            <span>Lượt xem</span>
                                            <span>14</span>
                                        </a>
                                        <div class="box_share">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.vatgia.com/hoidap/3922/708875/dung-may-rua-mat-co-day-duoc-nhan-mun-len-khong-moi-nguoi.html&amp;t=TITLE" target="_blank" title="Chia sẻ lên Facebook">
                                                <i class="flaticon-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/share?url=https://www.vatgia.com/hoidap/3922/708875/dung-may-rua-mat-co-day-duoc-nhan-mun-len-khong-moi-nguoi.html&amp;via=TWITTER_HANDLE&amp;text=TEXT" target="_blank" title="Chia sẻ lên Twitter">
                                                <i class="flaticon-twitter"></i>
                                            </a>
                                            <a href="https://plus.google.com/share?url=https://www.vatgia.com/hoidap/3922/708875/dung-may-rua-mat-co-day-duoc-nhan-mun-len-khong-moi-nguoi.html" target="_blank" title="Chia sẻ lên Google+">
                                                <i class="flaticon-ggplus"></i>
                                            </a>
                                            <a>
                                                <i class="flaticon-three-dots" onclick="moreActionList(this)">
                                                    <ul class="box-more">
                                                        <li onclick="windowPrompt({ href: &#39;/ajax_v2/load_send_error_hoidap.php?record_id=708875&#39;, iframe: true, width: &#39;50%&#39;, height: &#39;80%&#39; });" title="Gửi báo cáo vi phạm đến ban quản trị.">Báo vi phạm
                                                        </li>
                                                        <li class="hide-rely" title="Ẩn câu hỏi" onclick="condone(this)">Ẩn
                                                                                                                         câu
                                                                                                                         hỏi
                                                        </li>
                                                    </ul>
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box_comment show_comment_708875" id="show_comment_708875" record_id="708875" last_up="1582604380">
                                        <div class="comment_description">
                                            <textarea id="conten_reply_708875" class="conten_reply conten_reply_708875" name="conten_reply" placeholder="Nhập câu trả lời của bạn tại đây" type="text" onclick="checkReply(this)" onkeypress="checkDataReply(event)"></textarea>
                                            <a class="btn_reply" onclick="replyFastAction(this)">Gửi</a>
                                            <div class="box_capcha">
                                                <div class="box_capcha_708875" id="box_capcha_708875"></div>
                                                <img class="img_loading" src="./vatgias/loading(1).gif">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_reply_hoidap" onclick="window.location.href = &#39;/hoidap/3922/708875/dung-may-rua-mat-co-day-duoc-nhan-mun-len-khong-moi-nguoi.html&#39;;">
                                        <div class="reply_comment_box">
                                            <div class="avatar_reply">
                                                <a href="https://vatgia.com/home/detail_user.php?iUse=3389839">
                                                    <img src="./vatgias/avatar.jpg">
                                                </a>
                                            </div>
                                            <div class="description_reply">
                                                <div class="info_user_reply">
                                                    <p>Do Ngoc</p>
                                                    <div class="text_comment_reply"> Serum Caramel Essance - Serum Da liễu
                                                                                     Nhật - Được Chứng nhận FDA Phù hợp mọi
                                                                                     loại da - đặc biệt da nhạy cảm - phục
                                                                                     hồi làn da nhiễm Corticoid - Làm dày bề
                                                                                     mặt da -
                                                    </div>
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
                                    <span class="info_name">HN:</span>
                                    <span class="info_phone">
                                        <b> 0902.957.889</b>
                                    </span>
                                </div>
                                <div class="str_info">
                                    <span class="info_name">HCM:</span>
                                    <span class="info_phone">
                                        <b> 0943.985.050</b>
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
                                <h3 class="theme_hot_title">Chủ đề hot</h3>
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
                                                CHUYÊN GIA GIẢI ĐÁP: 3 SỰ THẬT VỀ NỘI TIẾT TỐ NỮ ESTROGEN
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Nhà có trẻ nhỏ nên mua điều hòa hay quạt phun sương?">
                                            <a title="Nhà có trẻ nhỏ nên mua điều hòa hay quạt phun sương?" href="https://vatgia.com/hoidap/6571/708923/nha-co-tre-nho-nen-mua-dieu-hoa-hay-quat-phun-suong.html">
                                                Nhà có trẻ nhỏ nên mua điều hòa hay quạt phun sương?
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Xin review về nước lau sàn hữu cơ diệt khuẩn bồ hòn Ecocare.">
                                            <a title="Xin review về nước lau sàn hữu cơ diệt khuẩn bồ hòn Ecocare." href="https://vatgia.com/hoidap/3906/708921/xin-review-ve-nuoc-lau-san-huu-co-diet-khuan-bo-hon-ecocare.html">
                                                Xin review về nước lau sàn hữu cơ diệt khuẩn bồ hòn Ecocare.
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Quạt không cánh dùng có hiệu quả không?">
                                            <a title="Quạt không cánh dùng có hiệu quả không?" href="https://vatgia.com/hoidap/6571/708919/quat-khong-canh-dung-co-hieu-qua-khong.html">
                                                Quạt không cánh dùng có hiệu quả không?
                                            </a>
                                        </h4>
                                    </li>
                                    <li class="theme_hot_item">
                                        <h4 title="Nước lau sàn hữu cơ diệt khuẩn dùng loại nào tốt???">
                                            <a title="Nước lau sàn hữu cơ diệt khuẩn dùng loại nào tốt???" href="https://vatgia.com/hoidap/3906/708920/nuoc-lau-san-huu-co-diet-khuan-dung-loai-nao-tot.html">
                                                Nước lau sàn hữu cơ diệt khuẩn dùng loại nào tốt???
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
                                            Đơn vị chạy Digital Marketing nào uy tín hiện nay ở...
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Cho hỏi điện thoại huawei vị vô nước sửa hết bao nhiêu tiền ạ">
                                        <a title="Cho hỏi điện thoại huawei vị vô nước sửa hết bao nhiêu tiền ạ" href="https://vatgia.com/hoidap/6079/709012/cho-hoi-dien-thoai-huawei-vi-vo-nuoc-sua-het-bao-nhieu-tien-a.html">
                                            Cho hỏi điện thoại huawei vị vô nước sửa hết bao nhiêu...
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Review nước tẩy rửa đay năng siêu sạch SUMO.">
                                        <a title="Review nước tẩy rửa đay năng siêu sạch SUMO." href="https://vatgia.com/hoidap/3948/709010/review-nuoc-tay-rua-day-nang-sieu-sach-sumo.html">
                                            Review nước tẩy rửa đay năng siêu sạch SUMO.
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Các sản phẩm nước tẩy rửa đa năng của Hàn Quốc có thực sự tốt?">
                                        <a title="Các sản phẩm nước tẩy rửa đa năng của Hàn Quốc có thực sự tốt?" href="https://vatgia.com/hoidap/3948/709009/cac-san-pham-nuoc-tay-rua-da-nang-cua-han-quoc-co-thuc-su-tot.html">
                                            Các sản phẩm nước tẩy rửa đa năng của Hàn Quốc có thực...
                                        </a>
                                    </h2>
                                </li>
                                <li>
                                    <h2 title="Đánh giá quạt Asia treo tường có remote đi kèm.">
                                        <a title="Đánh giá quạt Asia treo tường có remote đi kèm." href="https://vatgia.com/hoidap/6571/709008/danh-gia-quat-asia-treo-tuong-co-remote-di-kem.html">
                                            Đánh giá quạt Asia treo tường có remote đi kèm.
                                        </a>
                                    </h2>
                                </li>
                            </ul>
                        </div>
                        <div id="vatgia_hoidap_right_230x460">

                        </div>
                        <!--<center>
                            <div style="margin-bottom: 15px; text-align: center; width: 100%; overflow: hidden;" id="vatgia_pc_hoidap_home_4">
                                <ins class="adsbygoogle" style="display: block; width: 100%; height: 600px;" data-ad-client="ca-pub-2979760623205174" data-ad-slot="4270701122" data-ad-format="auto" data-full-width-responsive="true" data-adsbygoogle-status="done">
                                    <ins id="aswift_4_expand" style="display:inline-table;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:234px;background-color:transparent;">
                                        <ins id="aswift_4_anchor" style="display:block;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:234px;background-color:transparent;">
                                            <iframe width="234" height="600" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_4" name="aswift_4" style="left: 0px; position: absolute; top: 0px; border: 0px; width: 234px; height: 600px; overflow: visible;" src="./vatgias/saved_resource(7).html"></iframe>
                                        </ins>
                                    </ins>
                                </ins>

                            </div>
                        </center>-->
                    </div>
                </div>

            </div>
            <div class="clear"></div>
            <div id="container_footer">


                <ul class="footer_category container_width">
                    <li class="support">
                        <div class="register_promotion fl">
                            <div class="rpr_title">Đăng ký nhận tin khuyến mại</div>
                            <div class="rpr_email fl">
                                <input aria-label="Email nhận khuyến mại" id="newsletter_email" manualclose="1" event="click" position="left" onshow="clickOutside(function(){ simpleTipRemove(); });" type="text" placeholder="Địa chỉ email của bạn" value="">
                            </div>
                            <div class="rpr_button fl">
                                <button onclick="newsletterSignup(1)">Nam</button>
                                <button onclick="newsletterSignup(2)">Nữ</button>
                            </div>
                        </div>
                        <div class="fr" style="margin: 0 20px;">Hỗ trợ thanh toán online
                            <a class="baokim" href="https://www.baokim.vn/" target="_blank" rel="nofollow" aria-label="Site baokim.vn"></a>
                        </div>
                    </li>
                </ul>

                <div id="back-to-top" onclick="moveScrollTop();" class="affix-top">
                    <span>
                        <i class="iconcolor-backtotop"></i>
                    </span>
                </div>

                <div class="footer_text container_width" id="footer_text">
                    <div class="fl">
                        <h3>Vatgia.com - Mua sắm hạnh phúc, kinh doanh hiệu quả</h3>
                        Mua hàng trực tuyến mang lại sự tiện lợi, chủ động, lựa chọn đa dạng, với các dịch vụ hỗ trợ mua
                        hàng, bán hàng, thanh toán an toàn, giao hàng chuyên nghiệp.
                        <br>
                        Với phương châm “Luôn đặt mình vào địa vị khách hàng và đối xử trên mong đợi của họ”, Vatgia.com
                        không ngừng nỗ lực, cải tiến đáp ứng nhu cầu mua sắm cho người tiêu dùng.
                        <br>
                        Vatgia đảm bảo cung cấp đúng thông tin cho đúng người, đúng lúc, đảm bảo thanh toán trực tuyến bảo
                        mật an toàn, áp dụng hình thức vận chuyển nhanh phù hợp.
                    </div>
                    <div class="fr resize_hidden" style="padding-top: 35px;">
                        <i onclick="window.open(&#39;https://www.facebook.com/VatgiaFanpage&#39;, &#39;_blank&#39;);" class="icon_sprite icon_sprite_share_facebook"></i>&nbsp;<i onclick="window.open(&#39;https://twitter.com/vatgiavn&#39;, &#39;_blank&#39;);" class="icon_sprite icon_sprite_share_twitter"></i>&nbsp;<i onclick="window.open(&#39;https://plus.google.com/b/114950894410500615984/114950894410500615984/posts&#39;, &#39;_blank&#39;);" class="icon_sprite icon_sprite_share_google"></i>&nbsp;<i onclick="window.open(&#39;https://www.pinterest.com/VatGiaVN/&#39;, &#39;_blank&#39;);" class="icon_sprite icon_sprite_share_pinterest"></i>&nbsp;
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="footer_menu container_width">
                    <a target="_blank" href="https://vatgia.com/raovat/">Rao vặt</a>
                    |
                    <a target="_blank" href="https://vatgia.com/hoidap/">Hỏi đáp</a>
                    |
                    <a target="_blank" href="https://vatgia.com/438/mobile.html">Dien thoai</a>
                    |
                    <a target="_blank" href="https://vatgia.com/317/may-tinh-laptop.html">Laptop</a>
                    |
                    <a target="_blank" href="https://vatgia.com/9012/oto-cu.html">Mua ban oto</a>
                    |
                    <a target="_blank" href="https://vatgia.com/536/xe-may.html">Xe may</a>
                    |
                    <a target="_blank" href="https://vatgia.com/878/ao-khoac-nam.html">Áo khoác nam</a>
                    |
                    <a target="_blank" href="https://vatgia.com/7143/giay-dep-nam.html">Giày nam</a>
                    |
                    <a target="_blank" href="https://vatgia.com/877/vest-nam.html">Vest nam</a>
                    |
                    <a target="_blank" href="https://vatgia.com/5850/ao-khoac-nu.html">Áo khoác nữ</a>
                    |
                    <a target="_blank" href="https://vatgia.com/7168/giay-cao-got.html">Giày cao gót</a>
                    |
                    <a target="_blank" href="https://vatgia.com/376/may-loc-nuoc-tinh-khiet.html">Máy lọc nước</a>
                    |
                    <a target="_blank" href="https://www.vatgia.com/tu-van">Tư vấn tiêu dùng</a>
                </div>

                <div class="footer_content">
                    <div class="container_width">
                        <div class="fr">
                            <a class="vnpgroup" href="http://www.vnpgroup.vn/" target="_blank" rel="nofollow" aria-label="Site vnpgroup.vn"></a>
                            <a class="licensed" href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=88" target="_blank" rel="nofollow" aria-label="Site licensed"></a>
                            <a class="logo_tem" href="http://help.vatgia.com/quy-dinh-ve-quy-trinh-tiep-nhan-va-xu-ly-khieu-nai-hang-gia-hang-vi-pham-quyen-so-huu-tri-tue-tren-website-vatgia-com-n1240/" target="_blank" rel="nofollow">
                                <img src="./vatgias/logo_tem.png" alt="Quy định giải quyết liên quan tới hàng giả, nhái">
                            </a>
                        </div>
                        <div class="content">
                            <div style="margin-bottom: 6px;">
                                <a href="http://help.vatgia.com/vatgia-com-la-gi-n29/" rel="nofollow" target="_blank">Giới
                                                                                                                      thiệu
                                </a> &nbsp; | &nbsp;
                                <a href="http://help.vatgia.com/" rel="nofollow" target="_blank">Hướng dẫn</a> &nbsp; |
                                     &nbsp;
                                <a href="http://help.vatgia.com/nguyen-tac-chung-n281/" rel="nofollow" target="_blank">Quy
                                                                                                                       chế
                                                                                                                       hoạt
                                                                                                                       động
                                </a>&nbsp; | &nbsp;
                                <a href="http://help.vatgia.com/quy-dinh-chung-n16/" rel="nofollow" target="_blank">Cơ chế
                                                                                                                    giải
                                                                                                                    quyết
                                                                                                                    tranh
                                                                                                                    chấp
                                </a> &nbsp; | &nbsp;<a href="http://help.vatgia.com/chinh-sach-bao-mat-thong-tin-n280/" rel="nofollow" target="_blank">Chính sách bảo vệ thông tin
                            </a> &nbsp; | &nbsp;<a href="https://sosanhnha.com/" target="_blank" rel="nofollow">Bất động sản
                            </a>
                            </div>
                            <div>Công ty Cổ phần VNP Group. Số GCNĐKDN: 0102015284, cấp ngày 21/06/2012, nơi cấp: Sở kế
                                 hoạch và đầu tư thành phố Hà Nội
                                <br>
                                 Trụ sở chính: 102 Thái Thịnh Phường Trung Liệt, Quận Đống Đa, Hà Nội - Hồ Chí Minh: Đường
                                 Lữ Gia, Phường 15, Quận 11, Hồ Chí Minh
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>


                <!-- Google Tag Manager -->


                <div id="fb-root" class=" fb_reset">
                    <div style="position: absolute; top: -10000px; width: 0px; height: 0px;">
                        <div></div>
                    </div>
                </div>
                <!-- hoidap_all=1 | widget 3 -->





                <div id="vatgia_fix_bottom">
                    <div id="vatgia_fix_bottom_393x80"></div>
                    <a title="Đóng" class="close" href="javascript:;" onclick="$(this).parent().remove(); $.cookie(&#39;check_show_vatgia_fix_bottom&#39;, 1, { expires: 86400, path: &#39;/&#39; })">
                        ×
                    </a>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VGLayout"
    }
</script>


