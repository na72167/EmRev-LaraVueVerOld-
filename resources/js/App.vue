<template>
    <main>
        <div>
            <Header/>
            <FlashMassage/>
        </div>
        <div>
            <RouterView />
        </div>
        <div>
            <Footer/>
        </div>
    </main>
</template>

<script>
import Header from './components/header/header.vue'
import FlashMassage from './components/etc/FlashMassage.vue'
import Footer from './components/footer/footer.vue'

export default {
    components: {
        Header,
        FlashMassage,
        Footer
    }
}
</script>
