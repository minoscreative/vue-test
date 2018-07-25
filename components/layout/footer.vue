<template>
    <footer>
        <div class="footer">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-4">
                    <full-logo class="footer-logo"></full-logo>

                    <p>White Bodyworks was established in 0000, providing high quality vehicle body and paint repairs and resprays from our base in Essex.</p>

                    <a href="tel:01376617490" class="footer-tel">01376 617 490</a>
                </div>

                <div class="grid-start-5 grid-span-3">
                    <h3>Useful Links</h3>

                    <nuxt-link to="/" class="footer-link">About White Bodyworks</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Process</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Gallery</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Contact</nuxt-link>
                </div>

                <div class="grid-start-8 grid-span-3">
                    <h3>Services</h3>

                    <nuxt-link to="/" class="footer-link">Manufacturer Repair Methods</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Insurance Repairs</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Dents &amp; Scratches</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Alloy Wheel Refurbishment</nuxt-link>
                </div>
                <div class="grid-start-11 grid-span-2">
                    social links
                </div>
            </div>
        </div>

        <div class="second-footer">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-6">
                    Copyright WhiteBodyworks.co.uk - All Rights Reserved
                </div>
                <div class="grid-start-7 grid-span-6 text-right">
                    <a href="https://www.minoscreative.co.uk" target="_blank">Website design by Minos Creative</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import logoFull from '~/components/logo/logo-big'

    export default {
        components: {
            'full-logo':  logoFull
        }
    }
    
</script>