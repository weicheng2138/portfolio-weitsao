<template>
    <div class="h-[42px]">
        <svg v-if="direction === 'right'" viewBox="0 0 420 42">
            <polyline
                points="0,1.5 360,1.5 402,42"
                style="fill: none; stroke-width: 3"
                class="stroke-current text-primary"
            />
        </svg>
        <svg v-else viewBox="0 0 420 42">
            <polyline
                points="0,42 42,1.5 402,1.5"
                style="fill: none; stroke-width: 3"
                class="stroke-current text-primary"
            />
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        direction: {
            default: 'right',
            type: String,
            require: true,
        },
    },
}
</script>
<style scoped>
svg {
    @apply w-full h-full;
}
</style>

