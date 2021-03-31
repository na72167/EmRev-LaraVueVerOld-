<template>
    <!-- ログイン関係 -->
    <div class="hero__login js-login-style hidden">

        <form method="POST" class="hero__login-formStyle" action="{{ route('login') }}">
            @csrf
            <h2 class="hero__login-title">Login</h2>
            <div class="hero__login-commonMsgArea">
                <!-- 接続エラー等のメッセージをここに出力させる。 -->
                <!--例外処理発生時に出力されるメッセージを出す処理-->
            </div>

            <!-- メールアドレス入力欄 -->
            <div class="hero__login-emailaddressField">
                <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                <label class="#">
                    <!-- バリに引っかかった際にはerrクラスを付属させる。 -->
                    <input class="hero__login-emailForm @error('email') err @enderror" name="email" value="{{ old('email') }}">
                    <div class="hero__login-areaMsg">
                        @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </label>
            </div>

            <!-- パスワード入力 -->
            <div class="hero__login-passwardField">
                <label class="#">
                    <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 -->
                    <input class="hero__login-passwordForm @error('password') err @enderror" name="password" value="{{ old('password') }}">
                    <div class="hero__login-areaMsg">
                        @error('password')
                            <span class="" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </label>
            </div>

            <div class="hero__login-registerBtnField">
                <input class="hero__login-registerBtn" type="submit" name="user_register" value="ログイン">
            </div>

        </form>
        <!-- ================================================ -->
    </div>
</template>
