<template>
    <section class="navigation">
        <div class="container">
            <nuxt-link to="/" class="nav-logo" @click.native="closeNav">
                <logo-name></logo-name>
            </nuxt-link>

            <div class="mob-nav-btn" @click="navClick" :class="{ 'open-nav': showNav }">
                <div class="mob-nav-icon">
                    <div class="mob-nav-inner"></div>
                </div>
            </div>

            <div class="nav-block" :class="{ 'open-nav': showNav }">
                <ul>
                    <li><nuxt-link @click.native="closeNav" to="/" class="nav-btn">Home</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/manufacturer-approved" class="nav-btn">Manufacturer Approved</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/insurance-lease-repairs" class="nav-btn">Insurance &amp; Lease Repairs</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/airport-clients" class="nav-btn">Airport Clients</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/services" class="nav-btn">Services</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/process" class="nav-btn">Process</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/gallery" class="nav-btn">Gallery</nuxt-link></li>
                    <li><nuxt-link @click.native="closeNav" to="/contact" class="nav-btn">Contact</nuxt-link></li>
                    <li><a href="tel:01376617490" class="nav-phone-number">01376 617 490</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import logoName from '~/components/logo/logo-name'

    export default {
        head () {
            return {
                bodyAttrs: {
                    class: this.showNav ? 'nav-is-open' : ''
                }
            }
        },
        data () {
            return {
                showNav: false
            };
        },
        methods: {
            navClick: function () {
                this.showNav = !this.showNav;
            },
            closeNav: function () {
                this.showNav = false;
            }
        },
        components: {
            'logo-name': logoName
        }
    }
</script>