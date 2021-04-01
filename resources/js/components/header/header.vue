<template>
        <!-- ヘッダー関係 -->
    <header id="index-top" class="header js-toggle-sp-menu-target">
        <div class="header__content-wrap">
        <!-- タイトル -->
        <h1 class="header__title" href="index.php"><a href="index.php" class="header__title-link">EmRev</a></h1>
        <!-- <?php
            if(empty($_SESSION['user_id'])){
        ?> -->
            <!-- ナビゲーション(ログイン前のもの。セッション内容で切り替える。) -->
            <nav class="header__nav">
            <li class="header__nav-list active-login-menu">LOGIN</li>
            <li class="header__nav-list active-signup-menu">SIGNUP</li>
            </nav>
        <!-- <?php
            }elseif(!empty($_SESSION['user_id'])){
            ?> -->
            <!-- ナビゲーション(ログイン後のもの。セッション内容で切り替える。) -->
            <nav class="header__nav">
            <li class="header__nav-list js-toggle-sp-menu">MENU</li>
            <li class="header__nav-list" ><a href="./reviewRegister-cList.php">REVIEW REGISTRATION</a></li>
            <li class="header__nav-list"><a href="./logout.php">LOGOUT</a></li>
            </nav>
        <!-- <?php
            }
            ?> -->
        </div>
    </header>

    <!-- ここにフラッシュメッセージのコンポーネントを差し込み予定 -->

    <!-- メニューバーのコンポーネント差し込み予定 -->

</template>
<style lang="scss" scope>
    .header{
        height: 70px;
        // background-color: $primary-color;
        overflow: hidden;
        width: 100%;

        &__content-wrap{
            height: 100%;
            margin: 0 auto;
            max-width: 1100px;
        }
        &__title{
            display: inline;
            font-size: 2em;
            position: relative;
            color:#fff;
            top: calc(70px / 2 - 51px / 2);
            margin-left: 67px;
            font-weight: 300;
        }
        &__title-link{
            color:#fff;
            text-decoration: none;
            &:link{
            color:#fff;
            }
            &:visited{
            color:#fff;
            }
        }

        &__nav{
            float: right;
            position: relative;
            margin-right: 67px;
            top: calc(70px / 2 - 25px / 2);
            &-list{
            list-style-type: none;
            float: left;
            margin-right: 10px;
            color:#fff;
            &:last-child{
                margin-right: 0px;
            }
            &:hover {
                border-bottom: 2px #fff solid;
            }
            }
        }
    }
</style>
