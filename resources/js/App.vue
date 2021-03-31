<template>
    <main>
        <Header/>
            <div>
            <RouterView />
            </div>
        <Footer/>
    </main>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
