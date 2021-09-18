<template>
    <div class="menuBtn z-50" :class="{ open: menuOpen }">
        <div class="menuBtnBurger"></div>
    </div>
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
}
</script>

<style scoped>
.menuBtn {
    @apply w-10 h-10 cursor-pointer transition;
}
.menuBtnBurger {
    display: inline-block;
    width: 26px;
    height: 1px;
    background: #000000;
    border-radius: 1px;
    transition: all 0.5s ease-in-out;

    /** inline-block with absolute center*/
    position: absolute;
    @apply inset-0;
    margin: auto;

    /* position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%); */
}
.menuBtnBurger::before,
.menuBtnBurger::after {
    content: '';
    position: absolute;
    width: 26px;
    height: 1px;
    background: #000000;
    border-radius: 1px;
}
.menuBtnBurger::before {
    animation: beforeAniOut 0.5s forwards;
}
.menuBtnBurger::after {
    animation: afterAniOut 1s forwards;
}

/* Animation */
.menuBtn.open .menuBtnBurger {
    @apply bg-transparent;
}
.menuBtn.open .menuBtnBurger::before {
    animation: beforeAniIn 1s forwards;
}
.menuBtn.open .menuBtnBurger::after {
    animation: afterAniIn 1s forwards;
}
@keyframes beforeAniIn {
    0% {
        transform: translateY(-8px);
    }
    50% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: rotate(45deg);
    }
}
@keyframes afterAniIn {
    0% {
        transform: translateY(8px);
    }
    50% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: rotate(-45deg);
    }
}
@keyframes beforeAniOut {
    0% {
        transform: rotate(45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: translateY(-8px);
    }
}
@keyframes afterAniOut {
    0% {
        transform: rotate(-45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: translateY(8px);
    }
}
</style>