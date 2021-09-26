<template>
    <div id="root">
        <Loading :is-loading="isLoading" />
        <div v-if="!isLoading" class="relative flex flex-col min-h-screen">
            <AppbarMaster
                id="appbar"
                v-top-target-scroll
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
            <TopButton v-top-hidden-scroll class="z-10" />
            <Nuxt class="z-0" />
            <Footer />
        </div>
    </div>
</template>

<script>
import { navLinks } from '@/config'
import TopButton from '~/components/TopButton.vue'
export default {
    components: { TopButton },
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
            this.menuOpen
                ? document
                      .querySelector('body')
                      .setAttribute('style', 'overflow:hidden')
                : document
                      .querySelector('body')
                      .setAttribute('style', 'overflow:auto')
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
