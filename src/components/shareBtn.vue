<template>
    <div>
        <v-btn rounded color="success" small dark @click="shareText">SEND TO</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        shareText() {
            if (navigator.share) {
                navigator.share({
                    title: window.document.title,
                    url: window.document.location.href
                }).then(() =>{
                    console.log('Thanks for sharing!');
                }).catch(console.error)
            } else {
                alert('Sharing Feture Not available on this device')
            } 
        }
    }
}
</script>