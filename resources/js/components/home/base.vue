<template>
    <div>
        <Hero/>
        <Review/>
        <About/>
        <Contact/>
    </div>
</template>

<script>
import Hero from './hero'
import About from './about'
import Contact from './contact'
import Review from './review'

export default {
    components: {
    Hero,
    About,
    Contact,
    Review
    }
}
</script>
