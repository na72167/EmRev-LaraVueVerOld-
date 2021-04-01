<template>
    <!-- 会員登録関係 -->
    <div class="hero__signup js-signup-style">

        <!-- {{-- postメソッド・uriに/register持ちのルーティングにアクセス --}} -->
        <form method="POST" class="hero__signup-formStyle" action="{{ route('register') }}" @submit.prevent="signUp">
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
                    <input class="hero__signup-emailForm @error('email') err @enderror" name="email" value="{{ old('email') }}"  v-model="signUpForm.email">
                    <div class="hero__signup-areaMsg">
                        <!-- @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror -->
                    </div>
                </label>
            </div>

            <!-- パスワード入力 -->
            <div class="hero__signup-passwardField">
            <label class="#">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <input class="hero__signup-passwordForm @error('password') err @enderror" name="password" value="{{ old('password') }}" v-model="signUpForm.password">

                <div class="hero__signup-areaMsg">
                    <!-- {{-- rollについて --}}
                    {{-- https://www.osaka-kyoiku.ac.jp/~joho/html5_ref/role_attr.php?menutype=2dtaldl01l02l03A0 --}} -->
                    <!-- @error('password')
                        <span class="" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror -->
                </div>
            </label>
            </div>

            <!-- 確認用パスワード入力 -->
            <div class="hero__signup-confirmationPasswardField">
            <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
            <label class="#">
                <input class="hero__signup-passwordConfirmationForm" name="password_confirmation" type="password" placeholder="Confirmation Password" value="" v-model="signUpForm.confirmationPassword">
            </label>
                <!-- {{-- 確認用パスワードはあくまでパスワードの比較用なのでバリを通す予定無し。 --}} -->
            </div>

            <div class="hero__signup-registerBtnField">
            <input class="hero__signup-registerBtn" type="submit" name="user_register" value="登録する">
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data () {
    return {
        tab: 1,
        signUpForm: {
            email: '',
            password: '',
            confirmationPassword: ''
        },
    }
  },
    methods: {
        signUp () {
        console.log(this.loginForm)
        }
    }
}
</script>

<style lang="scss" scoped>
    //=============================================================
    //ユーザー登録関係のスタイル
    //=============================================================
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
            // border-bottom: 1px solid $primary-color;
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
            // border-bottom: 1px solid $primary-color;
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
            // border-bottom: 1px solid $primary-color;
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
        // background-color: $primary-color;
        border: none;
        border-radius: 5px;
        color: #fff;
        }
    }
</style>
