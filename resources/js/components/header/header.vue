<template>
        <!-- ヘッダー関係 -->
    <header id="index-top" class="header js-toggle-sp-menu-target">
        <div class="header__content-wrap">
        <!-- タイトル -->
        <h1 class="header__title" href="index.php"><a href="index.php" class="header__title-link">EmRev</a></h1>
            <!-- ナビゲーション(ログイン前のもの。セッション内容で切り替える。) -->
            <nav class="header__nav" v-show="Login_status === false">
                <li class="header__nav-list active-login-menu" @click="tswitching_auth = 'login'">LOGIN</li>
                <li class="header__nav-list active-signup-menu" @click="switching_auth = 'signup'">SIGNUP</li>
            </nav>
            <!-- ナビゲーション(ログイン後のもの。セッション内容で切り替える。) -->
            <nav class="header__nav" v-show="Login_status === true">
                <li class="header__nav-list js-toggle-sp-menu">MENU</li>
                <li class="header__nav-list"><a href="./reviewRegister-cList.php">REVIEW REGISTRATION</a></li>
                <li class="header__nav-list" @click="logout">LOGOUT</li>
            </nav>
        </div>
    </header>
    <!-- ここにフラッシュメッセージのコンポーネントを差し込み予定 -->
    <!-- メニューバーのコンポーネント差し込み予定 -->
</template>

<script>
export default {
    methods: {
        async logout () {
        // authストアのresigterアクションを呼び出す
        // 多分dispatchの第一引数はstoreフォルダ内のファイルを探している。
        await this.$store.dispatch('auth/logout')
        //ステート内を空にする為に第二引数にnullを指定する。
        context.commit('setUser', null)
        // ホームに移動する
        this.$router.push('/')
        }
    },
}
</script>

<style lang="scss" scope>
    .header{
        height: 70px;
        background-color: #047aed;
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
