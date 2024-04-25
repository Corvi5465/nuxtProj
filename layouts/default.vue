<template>
    <div>
        <header class="shadow-sm bg-[#1b1b1b] ">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold bg-transparent"><img src="/assets/CodeHub_Logo.png" alt="navLogo" class="w-40"/></NuxtLink>
                <ul class="flex gap-4 mt-2">
                    <li><NuxtLink to="/login" class=" text-[#ffa31a] px-2 py-2 rounded-md text-sm">Log In</NuxtLink></li>
                    <li><NuxtLink to="/signup" class=" text-[#ffa31a] px-2 py-2 rounded-md text-sm">Sign Up</NuxtLink></li>
                    <li><img src="/assets/NotifIcon.png" alt="notifIcon" class="w-11 h-10 -mt-2"/></li>
                </ul> 
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>

</template>

<style scoped>
.router-link-exact-active {
    color: black;
    background-color: #ffa31a ;
}
</style>