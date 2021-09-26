<template>
    <nav
        :class="{ hiddenNavbar: !showNavbar, topNavBar: !topScroll }"
        class="
            fixed
            flex
            justify-center
            bg-secondary01
            w-full
            h-[56px]
            shadow-sm
            px-4
            transition
            sm:px-8
        "
    >
        <div
            class="
                flex flex-row
                w-full
                justify-between
                items-center
                lg:max-w-4xl
            "
        >
            <NuxtLink to="/">
                <img
                    src="~/static/wei-tsao-icon.svg"
                    width="40"
                    height="40"
                    alt="wei-tsao-icon"
                    class="inline-block mr-4"
                />
                <h2 class="text-sm inline-block">WEI．TSAO</h2>
            </NuxtLink>
            <div>
                <AppbarMenu
                    class="sm:hidden relative z-50"
                    :menu-open="menuOpen"
                    :nav-links="navLinks"
                    @click.native="emitMenuStatus()"
                />
                <AppbarDrawer
                    class="sm:hidden z-0"
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
                            px-5
                            py-[17px]
                            inline-block
                            font-notoSans
                            text-sm text-secondary04
                            tracking-wide
                            hover:text-primary
                            focus:border-b-2 focus:border-primary
                        "
                    >
                        {{ link.name }}
                    </NuxtLink>
                    <a
                        href="/weitsao_resume.pdf"
                        target="_blank"
                        class="
                            inline-block
                            border border-secondary02
                            rounded-full
                            my-[11px]
                            ml-2
                            py-1
                            px-4
                            font-notoSans
                            text-sm text-secondary04
                            tracking-wide
                            hover:bg-primary
                            hover:text-secondary01
                            hover:border-secondary01
                        "
                    >
                        下載簡歷
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import _ from 'lodash'
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
    mounted() {
        // Handle window resize
        window.addEventListener('resize', _.throttle(this.onResize, 200))
        // Handle scroll event
        this.lastScrollPosition = window.pageYOffset
        // window.addEventListener('scroll', this.onScroll)
        window.addEventListener('scroll', _.throttle(this.onScroll, 300))
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
    },
    destroyed() {
        window.removeEventListener('resize', this.myEventHandler)
        window.removeEventListener('scroll', this.onScroll)
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

<style  scoped>
.hiddenNavbar {
    @apply transform translate-y-[-70px];
}
.topNavBar {
    @apply h-[56px];
}
</style>