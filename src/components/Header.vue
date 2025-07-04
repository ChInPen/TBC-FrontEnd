<template>
    <header>
        <div style="background-color: #e6433e;">
            <div class="wrapper">
                <a href="https://www.tbc.net.tw/"><img alt="Vue logo" class="logo slide-in"
                        src="@/assets/logo.png" /></a>
                <!-- <nav><RouterLink to="/">Home</RouterLink> <RouterLink to="/about">About</RouterLink></nav> -->
            </div>
        </div>
    </header>
</template>
<style scoped>
.wrapper {
    width: 970px;
    display: flex;
    height: 95px;
    margin: 0 auto;
}

.wrapper img {
    width: 200px;
}

@keyframes slideIn {
    from {
        transform: translateX(-120%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.slide-in {
    animation: slideIn 1.5s ease-out forwards;
}
</style>