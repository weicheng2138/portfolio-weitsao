<template lang="html">
    <div
        v-if="isLoading"
        key="key"
        class="flex justify-center items-center h-screen bg-primary"
    >
        <picture class="h-12 w-12">
        <img src="~/assets/gif/landing.gif" alt="landing"  />
        </picture>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            require: true,
        },
    },
}
</script>

<style scoped>
#wei {
    stroke-width: 0.4px;
    stroke-linecap: round;
    animation: textAnimate 3.5s;
    animation-fill-mode: forwards;
}

/* #wei, */
#frame {
    animation: fadeInUp 2s;
    animation-fill-mode: forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20%);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
    }
}

@keyframes textAnimate {
    0% {
        stroke-dasharray: 0 50%;
        stroke-dashoffset: 20%;
    }
    50% {
        stroke-dasharray: 50% 0;
        /* stroke-width: 10px; */
        /* fill: #64ffda; */
        stroke-dashoffset: 20%;
        fill: transparent;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
