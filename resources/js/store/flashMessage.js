
//state・・・vueとlaravel内で扱う扱う情報をまとめたもの。
//直接値を変更させると思わぬ動作を起こす原因になる為getter(フロントへステート内情報をリターンさせるもの)
//とmutations(フロント(vue)とサーバー(laravel)をリクエストとリターンをつなぐメソッド群?)
const state = {
    message: null
}

//getters・・・ステート内情報を関節的にフロント側へ伝える為のメソッド群。
const getters = {
    massageCheck: state => !! state.message,
}

//触った感じフロントから非同期で発火されたactions内メソッドでフォームから送信されたデータをコントローラーへ送信。
//コントローラーからリターンされた値をミューテーション内メソッドを経由してステート内情報を更新する。

//mutations・・・主に同期処理でステートを変更するメソッドをまとめた物
const mutations = {
    // ステート内のuser変数を更新するメソッド
    setUser (state, message) {
        state.message = message
    }
}

//actions・・・非同期処理でステートを変更するメソッドをまとめた物
const actions = {
    //恐らくvueにはcontextやstateなど予め予約されている引数名かregister,setUserが予め用意されているメソッドで
    //第一引数が予め用意されたクラスが代入された変数を引数として指定してメソッド内で使ってる感じ？
    //(サイト内のコードをいじりながら使っているのでよく分かってない。)
    //第二引数は登録フォームから送信された登録情報。

    // ====まだ======

    async register (context, data) {
        //第二引数はフロント側でregisterメソッド使った際に送信されるフォームデータが保持されている。
        //axios.post()でcontrollerからreturnされた値がresponseに代入される。
        const response = await axios.post('/api/register', data)
        //アクションの第一引数にはコンテキストオブジェクトが渡されます。コンテキストオブジェクトにはミューテーションを呼び出すための commit メソッドなどが入っています。
        context.commit('setUser', response.data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
