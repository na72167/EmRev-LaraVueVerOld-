<template>
    <!-- 会員登録関係 -->
    <div class="hero__signup js-signup-style">

        <!-- {{-- postメソッド・uriに/register持ちのルーティングにアクセス --}} -->
        <form class="hero__signup-formStyle" @submit.prevent="signUp">
            <!-- @csrf -->
            <h2 class="hero__signup-title">SignUp</h2>
            <div class="hero__signup-commonMsgArea">
                <!-- 接続エラー等のメッセージをここに出力させる。 -->
                <!--例外処理発生時に出力されるメッセージを出す処理-->
            </div>

            <!-- メールアドレス入力欄 -->
            <div class="hero__signup-emailaddressField">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <label class="#">
                    <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                    <input class="hero__signup-emailForm" v-model="signUpForm.email">
                    <div class="hero__signup-areaMsg">
                        <!-- メッセージがあった際に表示させる。 -->
                        <span v-if="signUpEmailValidMessage" style="color: red;">
                            <strong>{{ Validation.signUpEmailValidMessage }}</strong>
                        </span>
                    </div>
                </label>
            </div>

            <!-- パスワード入力 -->
            <div class="hero__signup-passwardField">
            <label class="#">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <input class="hero__signup-passwordForm" v-model="signUpForm.password">

                <div class="hero__signup-areaMsg">
                    <!-- メッセージがあった際に表示させる。 -->
                        <span v-if="signUpPasswordValidMessage" style="color: red;">
                            <strong>{{ Validation.signUpPasswordValidMessage }}</strong>
                        </span>
                </div>
            </label>
            </div>

            <!-- 確認用パスワード入力 -->
            <div class="hero__signup-confirmationPasswardField">
            <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <label class="#">
                    <input class="hero__signup-passwordConfirmationForm" type="password" placeholder="Confirmation Password" v-model="signUpForm.confirmationPassword">
                </label>
            </div>

            <div class="hero__signup-registerBtnField">
                <button class="hero__signup-registerBtn" type="submit">登録する</button>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            signUpForm: {
                email: '',
                password: '',
                confirmationPassword: '',
            },
            Validation:{
                signUpEmailValidMessage: '',
                signUpPasswordValidMessage: '',
            },
        };
    },
    methods: {
        async signUp () {
        // authストアのresigterアクションを呼び出す
        await this.$store.dispatch('auth/register', this.registerForm)
        // トップページに移動する
        this.$router.push('/mypage')
        }
    },
};
</script>

<style lang="scss" scoped>
    //=============================================================
    //ユーザー登録関係のスタイル
    //=============================================================
    .main{
    &__signup{
        height: 350px;
        width: 400px;
        background-color: #fff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        float: left;
        position: relative;
        top: 10px;
        left: 10px;
        z-index: 1;
        transition: all .5s;
        &-loginWrap{
        height: 367px;
        width: 420px;
        position: relative;
        top: 40px;
        right: 10px;
        overflow: hidden;
        }
        &-title{
        text-align: center;
        font-size: 22px;
        margin: 10px 0;
        }
        &-formStyle{
        height: 236px;
        width: 320px;
        margin: 40px auto;
        }
        &-emailaddressField{
        height: 57px;
        position: relative;
        }
        &-emailForm{
        border: 0;
        border-bottom: 1px solid #b4becb;
        width: 100%;
        padding: 3px;
        font-size: 16px;
        position: absolute;
        top:27px;
        &:focus{
            outline: none;
            border-bottom: 1px solid #047aed;
        }
        }
        &-passwardField{
        height: 57px;
        position: relative;
        }
        &-passwordForm{
        border: 0;
        border-bottom: 1px solid #b4becb;
        width: 100%;
        padding: 3px;
        font-size: 16px;
        position: absolute;
        top:27px;
        &:focus{
            outline: none;
            border-bottom: 1px solid #047aed;
        }
        }
        &-confirmationPasswardField{
        height: 57px;
        position: relative;
        }
        &-passwordConfirmationForm{
        border: 0;
        border-bottom: 1px solid #b4becb;
        width: 100%;
        padding: 3px;
        font-size: 16px;
        position: absolute;
        top:27px;
        &:focus{
            outline: none;
            border-bottom: 1px solid #047aed;
        }
        }

        &-registerBtnField{
        height: 57px;
        position: relative;
        padding: 0 105px;
        }
        &-registerBtn{
        position: absolute;
        top:30px;
        padding: 10px 30px;
        background-color: #047aed;
        border: none;
        border-radius: 5px;
        color: #fff;
        }
    }
    }
</style>
