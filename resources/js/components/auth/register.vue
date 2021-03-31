 <template>
 <!-- 会員登録関係 -->
    <div class="hero__signup js-signup-style">

    <!-- postメソッド・uriに/register持ちのルーティングにアクセス -->
    <form method="POST" class="hero__signup-formStyle" action="{{ route('register') }}">
        @csrf
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
                <input class="hero__signup-emailForm @error('email') err @enderror" name="email" value="{{ old('email') }}">
                <div class="hero__signup-areaMsg">
                    @error('password')
                        <span class="" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </label>
        </div>

        <!-- パスワード入力 -->
        <div class="hero__signup-passwardField">
        <label class="#">
            <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
            <input class="hero__signup-passwordForm @error('password') err @enderror" name="password" value="{{ old('password') }}">

            <div class="hero__signup-areaMsg">
                @error('password')
                    <span class="" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>
        </label>
        </div>

        <!-- 確認用パスワード入力 -->
        <div class="hero__signup-confirmationPasswardField">
        <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
        <label class="#">
            <input class="hero__signup-passwordConfirmationForm" name="password_confirmation" type="password" placeholder="Confirmation Password" value="">
        </label>
        </div>

        <div class="hero__signup-registerBtnField">
        <input class="hero__signup-registerBtn" type="submit" name="user_register" value="登録する">
        </div>

    </form>
    </div>
</template>
