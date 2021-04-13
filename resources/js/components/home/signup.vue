<template>
    <!-- 会員登録関係 -->
    <div class="hero__signup js-signup-style">

        <!-- Vue & Vuetifyでバリデーション付きのフォームを作ってみる(:rulesについて触れている。) -->
        <!-- https://qiita.com/tekunikaruza_jp/items/0a68d86084d961d632ac -->
        <!-- {{-- postメソッド・uriに/register持ちのルーティングにアクセス --}} -->
        <!-- ここでボタンを押した時に発火させるメソッドを指定している。validateemail -->
        <!-- :rules内のrulesはdata内のreturnのrules:と紐付けられている。 -->
        <!-- フォームのバリデーション -->
        <!-- https://jp.vuejs.org/v2/cookbook/form-validation.html -->
        <form class="hero__signup-formStyle" :model="signUpForm" :rules="rules" @submit.prevent="signUp">

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
                        <span v-if="validateEmail" style="color: red;">
                            <strong>{{ validateEmail }}</strong>
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
                            <span v-if="validatePassword" style="color: red;">
                                <strong>{{ validatePassword }}</strong>
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

// 次やること 前の会社でもらったtypescriptのコードをもう一度見てみる。
// ユーザー登録の一連の動作ができてなおかつtypescriptが導入できそうならやってみる。

<script>
import { validEmail, validPassword } from '../utils/validate';

export default {
    data: function() {
        const validateEmail = (rule,value,callback) => {
            if (this.signUpForm.email === "" || this.signUpForm.email === null) {
                //恐らく
                callback(new Error('emailが入力されていません。'));
            } else if (!validEmail(this.signUpForm.email)) {
                callback(new Error("emailの形式が不正です。"));
            } else {
                callback();
            }
        };
        const validatePassword = (rule,value,callback) => {
            if (this.signUpForm.password === "") {
                callback(new Error("passwordが入力されていません。"));
            } else if (!validPassword(this.signUpForm.password)) {
                callback(new Error("passwordは8文字以上20文字以内で設定してください。"));
            } else if (this.signUpForm.password !== this.signUpForm.confirmationPassword){
                callback(new Error("確認用パスワードが合致しません。"));
            }
        };
        return {
            signUpForm: {
                email: '',
                password: '',
                confirmationPassword: '',
            },
            rules: {
                // 引数として入力された文字列が渡され、制約に合致していればtrueを返し、合致していなければエラーメッセージの文字列を返す関数
                // https://qiita.com/tekunikaruza_jp/items/0a68d86084d961d632ac
                email: [{ required: true, trigger: 'blur', validator: validateEmail }],
                password: [{ required: true, trigger: "blur", validator: validatePassword }],
            },
        };
    },
    methods: {
        signUp () {
            this.signUpForm.validate(async (valid) => {
                this.errorMessage = "";
                if (!valid) return false;
                try {
                    this.loading = true;
                    const response = await createUser(this.form);
                    setNotificationMessage(response.message);
                    this.$store.dispatch("app/setLoading");
                    this.$router.push('/users');
                } catch (error) {
                    this.isError = true;
                    console.log("Register Process Error!");
                    this.loading = false;
                }
            });



            console.log(this.signUpForm);
        // // authストアのresigterアクションを呼び出す
        // // 多分dispatchの第一引数はstoreフォルダ内のファイルを探している。
        // this.$store.dispatch('auth/register', this.registerForm)
        // // トップページに移動する
        // this.$router.push('/mypage')
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
