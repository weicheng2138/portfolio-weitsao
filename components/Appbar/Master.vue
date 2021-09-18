<template>
    <nav
        :class="{ hiddenNavbar: !showNavbar, topNavBar: !topScroll }"
        class="
            fixed
            flex flex-row
            justify-between
            items-center
            w-full
            py-2
            px-8
            shadow-sm
            bg-secondary01
        "
    >
        <div>
            <a href="/">
                <img
                    src="~/static/wei-tsao-icon.svg"
                    width="40"
                    height="40"
                    alt="wei-tsao-icon"
                    class="inline-block mr-4"
                />
            </a>
            <a
                href="/"
                class="
                    inline-block
                    text-center
                    font-notoSans font-normal
                    text-sm
                "
                >WEI．TSAO</a
            >
        </div>
        <div>
            <AppbarMenu
                class="sm:hidden relative z-50"
                :menu-open="menuOpen"
                :nav-links="navLinks"
                @click.native="emitMenuStatus()"
            />
            <AppbarDrawer
                class="z-0"
                :open="menuOpen"
                :nav-links="navLinks"
                @eventCloseDrawer="emitMenuStatus()"
            />
            <div class="hidden sm:flex">
                <NuxtLink
                    v-for="link in navLinks"
                    :key="link.name"
                    :to="{ path: link.url }"
                    class="
                        mr-6
                        py-1
                        inline-block
                        hover:text-primary
                        focus:border-b-2 focus:border-primary
                    "
                >
                    {{ link.name }}
                </NuxtLink>
                <a
                    href="/weichenghung_cv_l2.pdf"
                    target="_blank"
                    class="border border-black rounded-full py-1 px-4"
                >
                    下載履歷
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        menuOpen: {
            type: Boolean,
            require: true,
        },
        // eslint-disable-next-line vue/require-default-prop
        navLinks: {
            type: Array,
            require: true,
        },
    },
    data() {
        return {
            showNavbar: true,
            topScroll: true,
            lastScrollPosition: 0,
            scrollValue: 0,
        }
    },
    methods: {
        emitMenuStatus() {
            this.$emit('eventMenuStatus', !this.menuOpen)
        },
        onResize() {
            if (this.menuOpen === true && window.innerWidth >= '768') {
                this.emitMenuStatus()
            }
        },
        onScroll() {
            if (window.pageYOffset < 0) {
                return
            }

            // Top position event
            window.pageYOffset === 0
                ? (this.topScroll = true)
                : (this.topScroll = false)
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
                return
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        },
    },
}
</script>

<style lang="scss" scoped>
</style>