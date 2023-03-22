<template>
    <div class="container max-w-3xl max-sm:mt-10">
        <div class="card-container grid grid-cols-6 gap-4 relative">
            <div class="flex justify-center items-start">
                <a href="https://spaceplace.nasa.gov/launching-into-space/en/" class="inline-flex items-center justify-center p-2 bg-indigo-500 hover:bg-indigo-700 transition-all rounded-md shadow-lg hover:shadow-none mt-1">
                    <svg class="h-6 w-6 text-white" width="32" height="32" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M73.9 111.4L42.5 149a7.6 7.6 0 0 0-1.6 6.8l12.3 55.7A8 8 0 0 0 66 216l30-24c-17.6-30.6-23.3-57.5-22.1-80.6Zm107.6-.7l31.4 37.7a7.6 7.6 0 0 1 1.6 6.8l-12.3 55.6a8 8 0 0 1-12.8 4.6l-30-24c17.6-30.7 23.3-57.6 22.1-80.7Z" opacity=".2" />
                        <path fill="currentColor" d="M144 216h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Z" />
                        <circle cx="128" cy="96" r="12" fill="currentColor" />
                        <path fill="currentColor" d="m219.6 143.9l-30.2-36.3a125.4 125.4 0 0 0-8-34.9c-11.6-30.2-32.1-50-43.4-59.1a15.9 15.9 0 0 0-20-.1c-11.4 9.1-32.2 28.9-43.9 59.1a121.5 121.5 0 0 0-8.1 35.7l-29.6 35.6a16.1 16.1 0 0 0-3.4 13.7l12.4 55.6a15.9 15.9 0 0 0 10.3 11.6a17 17 0 0 0 5.4.9a16 16 0 0 0 9.9-3.5L98.8 200h58.4l27.8 22.2a16 16 0 0 0 9.9 3.5a17 17 0 0 0 5.4-.9a15.9 15.9 0 0 0 10.3-11.6l12.4-55.6a16.1 16.1 0 0 0-3.4-13.7ZM128 26c70.3 57.1 41.4 131 27.2 158h-54.5c-48-87.7 8.5-143 27.3-158ZM61 209.7l-12.3-55.6l17.9-21.5q3.5 28.1 19.1 57.4Zm134 0l-24.8-19.8c10.4-19.7 16.6-39 18.8-57.8l18.3 22Z" />
                    </svg>
                </a>
            </div>
            <div class="col-span-5">
                <h3 class="text-slate-900 dark:text-white text-base font-medium tracking-tight">
                    How Do We Launch Things Into Space?
                </h3>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    We launch things into space by putting them on rockets with enough fuel, called propellant, to boost them above most of
                    Earth’s atmosphere. Once a rocket reaches the right distance from Earth, it releases the satellite or spacecraft.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LogRocket from 'logrocket';
LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);
</script>

<style scoped>
.card-container {
    @apply 
        bg-white dark:bg-slate-800
        ring-1 ring-zinc-900/5 dark:ring-zinc-600/25
        shadow-xl dark:shadow-zinc-800
        rounded-lg px-6 py-8;
}
</style>