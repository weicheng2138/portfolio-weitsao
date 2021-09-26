<template>
    <footer
        class="
            bg-secondary01
            flex flex-col
            justify-center
            items-center
            w-full
            border-b-[6px] border-primary
            sm:flex-row
            sm:justify-evenly
            sm:items-center
            sm:h-60
        "
    >
        <div class="social mb-20 mt-10 sm:m-0">
            <a
                :href="`${socialMedia.behance}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="~/assets/images/behance.svg"
                    width="35"
                    height="35"
                    alt="behance-icon"
                />
            </a>

            <a
                :href="`${socialMedia.instagram}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="~/assets/images/ig.svg"
                    width="35"
                    height="35"
                    alt="ig-icon"
                />
            </a>

            <a
                :href="`${socialMedia.cakeResume}`"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="~/assets/images/CakeResume.svg"
                    width="35"
                    height="35"
                    alt="CakeResume-icon"
                />
            </a>
            <a :href="`mailto:${socialMedia.gmail}`">
                <img
                    src="~/assets/images/gmail.svg"
                    width="35"
                    height="35"
                    alt="gmail-icon"
                />
            </a>
        </div>
        <div class="flex flex-col items-center">
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
            <p
                class="
                    text-secondary03 text-xs
                    mb-10
                    leading-5
                    sm:mb-3
                    text-center
                "
            >
                <a href="" class="hover:text-primary">Design - Winnie Tsao</a>
                |
                <a href="" class="hover:text-primary">Build - Keck Hung</a>
                <br />© 2021
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