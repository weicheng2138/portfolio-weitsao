<template>
    <div id="root">
        <Loading :is-loading="isLoading" />
        <div v-if="!isLoading" class="relative flex flex-col min-h-screen">
            <AppbarMaster
                :menu-open="menuOpen"
                :nav-links="navLinks"
                class="z-40"
                @eventMenuStatus="updateMenuStatus"
            />

            <Overlay
                v-if="menuOpen"
                class="z-20"
                @click.native="changeMenuStatus"
            ></Overlay>
            <Nuxt class="z-0" />
            <Footer />
        </div>
    </div>
</template>

<script>
import { navLinks } from '@/config'
export default {
    data() {
        return {
            isLoading: true,
            isHome: true,
            menuOpen: false,
            navLinks,
        }
    },
    watch: {
        menuOpen() {
            if (this.menuOpen) {
                document
                    .querySelector('body')
                    .setAttribute('style', 'overflow:hidden')
            } else {
                document
                    .querySelector('body')
                    .setAttribute('style', 'overflow:auto')
            }
        },
    },
    mounted() {
        this.isLoading = false
        // setTimeout(() => {
        //     this.isLoading = false
        // }, 2000)
    },

    methods: {
        updateMenuStatus(bool) {
            this.menuOpen = bool
        },
        changeMenuStatus() {
            this.menuOpen = !this.menuOpen
        },
    },
}
</script>
