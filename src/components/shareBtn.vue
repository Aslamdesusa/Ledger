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
            if (window.navigator.share) {
                window.navigator.share({
                    title: 'Total Items',
                    text: 'Hello World',
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