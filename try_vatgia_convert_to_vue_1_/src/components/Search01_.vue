<template>
    <div _zx_="00067_" class="search">
        <form id="header_search" name="header_search" action="https://vatgia.com/hoidap/quicksearch.php" method="get"
              onsubmit="return checkHeaderSearch(this, event);">
            <div _zx_="00068_" class="border" id="home_search_control">
                <a _zx_="00116_" id="header_search_text" class="simple_tip" href="javascript:;" rel="#header_search_option">Hỏi đáp
                    <b _zx_="00069_" class="arrow_down"></b>
                </a>
                <button _zx_="00070_" class="button" type="submit" aria-label="Tìm kiếm">
                    <i _zx_="00071_" class="flaticon-search"></i>
                </button>
                <div _zx_="00072_" class="keyword">
                    <div _zx_="00073_" style="height: 30px !important;">
                        <input aria-label="Từ khóa tìm kiếm" type="text" id="header_search_keyword" name="keyword"
                               value="" placeholder="Hỏi ngay cộng đồng triệu người dùng!" maxlength="100"
                               autocomplete="off" style="">
                    </div>
                </div>
                <div _zx_="00074_" class="clear"></div>
            </div>
            <input _zx_="00075_" type="hidden" id="search_shop" name="view" value="search" disabled="disabled">
            <input _zx_="00076_" type="hidden" id="search_category" name="iCat" disabled="disabled">
            <div _zx_="00077_" id="header_history_keyword">
                <a _zx_="00078_" title="nike" href="/home/nike.spvg" target="_blank">nike</a> &nbsp; | &nbsp;
                <a _zx_="00079_" title="giay the thao" href="/home/giay+the+thao.spvg" target="_blank">giay the thao</a>
                                                                                              &nbsp; | &nbsp;
                <a _zx_="00080_" title="air max" href="/home/air+max.spvg" target="_blank">air max</a> &nbsp; | &nbsp;
                <a _zx_="00081_" title="thùng xốp" href="/home/th%C3%B9ng+x%E1%BB%91p.spvg" target="_blank">thùng xốp
                </a> &nbsp; | &nbsp;
                <a _zx_="00082_" title="phím set" href="/home/ph%C3%ADm+set.spvg" target="_blank">phím set</a> &nbsp; |
                                                                                              &nbsp;
                <a _zx_="00117_" title="bàn  ghế  x gỗ mun" href="/home/b%C3%A0n+gh%E1%BA%BF+g%E1%BB%97+mun.spvg" target="_blank">bàn ghế
                                                                                                                gỗ  mun
                </a>
            </div>
            <div _zx_="00083_" class="history-search">
                <ul _zx_="00084_" class="history-item"></ul>
                <ul _zx_="00085_" class="search-item"></ul>
            </div>
        </form>
        <div _zx_="00086_" id="header_search_option" class="hidden">
            <ul _zx_="00087_" class="header_search_option">
                <li _zx_="00088_" class="list">
                    <a _zx_="00118_" href="javascript:;" rel="nofollow" onclick="changeSearchOption('module', 0, $(this))">Sản phẩm
                    </a>
                </li>
                <li _zx_="00089_" class="list">
                    <a _zx_="00119_" href="javascript:;" rel="nofollow" onclick="changeSearchOption('module', 1, $(this))">Rao vặt
                    </a>
                </li>
                <li _zx_="00090_" class="list">
                    <a _zx_="00120_" href="javascript:;" rel="nofollow" onclick="changeSearchOption('module', 2, $(this))">Hỏi đáp
                    </a>
                </li>
            </ul>
        </div>
    </div></template>
<script>
    export default {
        name: 'Search01_'
    }
</script>
<style scoped>
    .search {
        width: 580px !important;
        margin: auto;
    }
    div#home_search_control {
        width:inherit;
    }
    input#header_search_keyword {
        padding-left: 11px  !important;
        height: 30px !important;
    }
    *, *::before, *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    b {
        font-weight: bolder;
    }
    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }
    button {
        border-radius: 0;
    }
    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }
    input, button {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    button, input {
        overflow: visible;
    }
    button {
        text-transform: none;
    }
    button, [type="submit"] {
        -webkit-appearance: button;
    }
    button::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }
    .border {
        border: 1px solid #dee2e6 !important;
    }
    @media print {
        *, *::before, *::after {
            text-shadow: none !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
        }
        a:not(.btn) {
            text-decoration: underline;
        }
    }
    #header_history_keyword {
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #header_search {
        width: 71%;
    }
    :active,:focus {
        outline: 0;
    }
    form, input, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .clear {
        background: 0 0;
        display: block;
        clear: both;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
    }
    .hidden {
        display: none;
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
    #header_search {
        font-size: 13px;
        margin: 0 auto;
    }
    #header_search .border {
        border: 2px solid #365DB5;
        position: relative;
        border-radius: 3px;
        margin-left: 1px;
    }
    #header_search .border a {
        float: left;
    }
    #header_search #header_search_text, #header_search .button {
        background: #365DB5;
        color: #FFF;
        height: 34px;
        line-height: 34px;
        padding: 0 25px 0 12px;
        position: relative;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
    }
    #header_search .button i.flaticon-search {
        font-size: 16px;
    }
    #header_search #header_search_text {
        background: #EEE;
        color: #333 !important;
    }
    #header_search #header_search_text .arrow_down {
        border-color: #333 transparent transparent !important;
        right: 12px;
        top: 15px;
    }
    #header_search .keyword {
        overflow: hidden;
        padding: 0px;
    }
    #header_search .keyword div, #header_search .keyword input {
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
    #header_search .button {
        border: 0;
        float: right;
        font-weight: 700;
        line-height: 28px;
        padding: 0 25px;
        margin: 0;
    }
    .header_search_option {
        min-width: 100px;
        max-width: 200px;
    }
    .header_search_option li a {
        border-top: 1px solid #E5E5E5;
        display: block;
        padding: 9px 12px;
    }
    .header_search_option .list:first-child a {
        border-top: 0;
    }
    #header_history_keyword {
        color: #CCC;
        font-size: 12px;
        height: 15px;
        margin-top: 6px;
        overflow: hidden;
    }
    #header_history_keyword a {
        color: #999;
        white-space: nowrap;
    }
    #header_history_keyword a:hover {
        color: #0C81F6;
    }
    [class^=flaticon-]:after, [class^=flaticon-]:before {
        font-family: Flaticon;
        font-size: inherit !important;
        font-style: normal !important;
        margin-left: inherit !important;
    }
    #header_search .button {
        background: #38f635 !important;
    }
    #header_search .border {
        border-color: #0C81F6 !important;
    }
    * {
        font-family: Arial, sans-serif, Tahoma, Helvetica;
        margin: 0;
        padding: 0;
    }
    a, a:hover {
        text-decoration: none;
        color: #333;
    }
    #header_search {
        position: relative;
        overflow: initial;
    }
    .clear {
        clear: both;
        width: 0;
        height: 0;
        background: 0;
    }
    a:hover {
        color: #0C81F6;
    }
    #header_search {
        width: 100% !important;
    }
    #header_history_keyword {
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #header_search .border {
        height: 34px;
        border-right: 2px solid #365DB5;
    }
    .history-search {
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-left: 84px;
        width: 462px;
        position: absolute;
        background: #fff;
        top: 39px;
        z-index: 9999;
        display: none;
    }
    .history-search .history-item, .history-search .search-item {
        display: none;
    }
    .flaticon-search:before {
        content: "\f113";
    }
    #header_history_keyword {
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #header_search {
        width: 71%;
    }
    /*! CSS Used fontfaces */
    @font-face {
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot);
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot#iefix) format("embedded-opentype"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.woff) format("woff"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.ttf) format("truetype"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
    }
    @font-face {
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot);
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.eot#iefix) format("embedded-opentype"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.woff) format("woff"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.ttf) format("truetype"), url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: Flaticon;
        src: url(https://vatgia.com/static/20190715/css/flaticon/Flaticon.svg#Flaticon) format("svg");
    }
</style>
