<template>
    <footer
        class="
            bg-secondary01
            flex flex-col
            justify-center
            items-center
            border-b-[6px] border-primary
            sm:flex-row
            sm:justify-evenly
            sm:items-center
            sm:h-60
        "
    >
        <div class="social mb-20 mt-10 sm:m-0">
            <a href="http://">
                <img
                    src="~/assets/images/behance.svg"
                    width="35"
                    height="35"
                    alt="behance-icon"
                />
            </a>

            <a href="http://">
                <img
                    src="~/assets/images/ig.svg"
                    width="35"
                    height="35"
                    alt="ig-icon"
                />
            </a>

            <a href="">
                <img
                    src="~/assets/images/CakeResume.svg"
                    width="35"
                    height="35"
                    alt="CakeResume-icon"
                />
            </a>
            <a href="http://">
                <img
                    src="~/assets/images/gmail.svg"
                    width="35"
                    height="35"
                    alt="gmail-icon"
                />
            </a>
        </div>
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
            <p class="text-secondary03 text-xs mb-10 leading-5 sm:mb-3">
                © 2021 Designed by Winnie Tsao <br />
                Built by Keck Hung
            </p>
        </div>
    </footer>
</template>

<script>
import { socialMedia } from '~/config'
export default {
    data() {
        return {
            socialMedia: null,
        }
    },
    created() {
        this.socialMedia = socialMedia
    },
}
</script>

<style  scoped>
.social a {
    @apply inline-block relative w-10 h-10 mx-3 rounded-md hover:shadow-md transition-shadow;
}
.social img {
    @apply block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
</style>