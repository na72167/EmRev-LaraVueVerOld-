<template>
    <div v-show="FlashMassge">
        <div>
            {{flashMessage.error}}
        </div>
        <div>
            {{flashMessage.success}}
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        flashMessage: {
            error: '',
            success: ''
        }
        }
    }
}
</script>
