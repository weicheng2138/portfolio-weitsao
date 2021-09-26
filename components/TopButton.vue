<template>
    <div>
        <button
            class="
                fixed
                bottom-8
                right-4
                border border-secondary03
                bg-secondary01
                opacity-50
                w-20
                h-20
                rounded-full
                text-sm
                imgDescription
                shadow-md
                hover:bg-primary
                hover:opacity-100
                hover:border-0
                hover:text-secondary01
                sm:right-8
                lg:right-[50%]
                lg:transform
                lg:translate-x-[500px]
            "
            @click="srollToTop()"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
            <br />回頂端
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        srollToTop() {
            document.documentElement.scrollTop = 0
        },
    },
}
</script>

<style  scoped>
</style>