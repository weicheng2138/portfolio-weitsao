<template>
    <div
        class="
            drawer
            fixed
            inset-y-0
            right-0
            transform
            translate-x-full
            transition
            duration-300
            ease-in-out
            h-screen
            bg-secondary01
            opacity-80
        "
        :class="{ translateDrawer: open }"
    >
        <div
            class="
                linkParent
                flex flex-col
                items-center
                justify-center
                w-full
                h-full
                text-center
            "
        >
            <NuxtLink
                v-for="link in navLinks"
                :key="link.name"
                :to="{ path: link.url }"
                class="linkElement navBtn mb-32 focus:outline-none"
                @click.native="emitCloseDrawer()"
            >
                {{ link.name }}
            </NuxtLink>
            <a
                href="/weichenghung_cv_l2.pdf"
                target="_blank"
                class="
                    bg-primary
                    text-white
                    align-middle
                    text-center
                    rounded-full
                    px-4
                    py-1
                    mx-auto
                    min-w-max
                "
            >
                下載履歷
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            require: true,
        },
        // eslint-disable-next-line vue/require-default-prop
        navLinks: {
            type: Array,
            require: true,
        },
    },
    methods: {
        emitCloseDrawer() {
            this.$emit('eventCloseDrawer')
        },
    },
}
</script>

<style  scoped>
.translateDrawer {
    @apply transform translate-x-0;
}
.drawer {
    width: min(75vw, 400px);
}
.linkParent {
    list-style: none;
}
.linkElement {
    font-size: clamp(14px, 4vw, 18px);
}
</style>