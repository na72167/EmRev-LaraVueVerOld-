const state = {
    user: null
}

const getters = {}

const mutations = {
    setUser (state, user) {
        state.user = user
    }
}

const actions = {
    async register (context, data) {
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
