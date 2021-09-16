<template>
    <div>
        <Loading :is-loading="isLoading" />
        <div v-if="!isLoading" class="flex flex-col min-h-screen relative">
            <!-- <AppbarIndex
                :menu-open="menuOpen"
                :nav-links="navLinks"
                class="z-40 relative"
                @eventMenuStatus="updateMenuStatus"
            /> -->

            <AppbarIndex />
            <Nuxt class="z-0" />
        </div>
    </div>
</template>

<script>
// import { navLinks } from '@/config'
export default {
    data() {
        return {
            isLoading: true,
            // isHome: true,
            menuOpen: false,
            // navLinks: navLinks,
        }
    },
    watch: {
        // menuOpen: function () {
        //     if (this.menuOpen) {
        //         document
        //             .querySelector("body")
        //             .setAttribute("style", "overflow:hidden");
        //     } else {
        //         document
        //             .querySelector("body")
        //             .setAttribute("style", "overflow:auto");
        //     }
        // },
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
