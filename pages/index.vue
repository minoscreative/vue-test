<template>
    <div>
        <div class="home-header">
            <div class="grid-container">
                <div class="home-white-content">
                    <div class="home-content-text">
                        <h1>White Bodyworks, the complete accident repair centre</h1>

                        <p>Welcome to White Bodyworks. Here at WBW we pride ourselves on our quality of workmanship and customer satisfaction. Whether it's that annoying scratch or heavy accident damage, with over 30 years' experience we can guarantee perfect results for your vehicle.</p>

                        <div class="arrow-down" v-scroll-to="'#first-section'"></div>
                    </div>
                </div>
            </div>

            <div class="home-scene">
                <div class="home-background">
                    <img src="../assets/images/home/header-bg.jpg" alt="Road with trees along the side" />
                </div>

                <div id="scene" class="para-header">
                    <div class="para-layer" data-depth="0.2">
                        <div class="grid-container">
                            <div class="home-car">
                                <img src="../assets/images/home/car.png" alt="BMW car on transparent background" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="first-section" class="content-block">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-6">
                    <h2>Manufacturer Approved Repairs</h2>

                    <p>Using the latest repair techniques, our qualified technicians will have your vehicle looking as good as new, using only manufacturer approved parts, materials and techniques to ensure that your vehicle is not only back to show room condition but also safe too.</p>

                    <p>All our work is guaranteed for as long as you own the vehicle.</p>

                    <nuxt-link to="/about" class="general-link">About White Bodyworks</nuxt-link>
                </div>
                <div class="grid-start-8 grid-span-5 hide-mobile">
                    <full-logo></full-logo>
                </div>
            </div>
        </section>

        <section class="content-block mobile-no-pad">
            <div class="home-audi-bg">
                <img src="../assets/images/home/audi-bg.jpg" alt="Audi on a road" />
            </div>
            <div class="grid-container">
                <div class="grid-start-4 grid-span-9">
                    <h2>From that annoying scratch to panel replacement</h2>

                    <p>Using only genuine parts we can guarantee perfect repairs bring your vehicle back to showroom condition. The latest paint technology ensures flawless colour matches.</p>
                </div>

                <div class="grid-start-4 grid-span-4 home-services-list">

                    <h3>Manufacturer Repair Methods</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis bibendum tortor, sed viverra eros.</p>

                    <div class="home-services-link">Manufacturer Repair Methods</div>

                    <nuxt-link to="/about" class="home-services-hover"></nuxt-link>
                </div>
                <div class="grid-start-9 grid-span-4 home-services-list">
                    <h3>Dents &amp; Scratches</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis bibendum tortor, sed viverra eros.</p>

                    <div class="home-services-link">Dents &amp; Scratches</div>

                    <nuxt-link to="/about" class="home-services-hover"></nuxt-link>
                </div>

                <div class="grid-start-4 grid-span-4 home-services-list">
                    <h3>Insurance Repairs</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis bibendum tortor, sed viverra eros.</p>

                    <div class="home-services-link">Insurance Repairs</div>

                    <nuxt-link to="/about" class="home-services-hover"></nuxt-link>
                </div>
                <div class="grid-start-9 grid-span-4 home-services-list">
                    <h3>Alloy Wheel Refurbishment</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis bibendum tortor, sed viverra eros.</p>

                    <div class="home-services-link">Alloy Wheel Refurbishment</div>

                    <nuxt-link to="/about" class="home-services-hover"></nuxt-link>
                </div>
            </div>
        </section>

        <section class="content-block mobile-no-pad">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-12">
                    <h2>All vehicle makes and models catered for</h2>

                    <p>We specialise in a wide range of vehicle makes and models including:</p>

                    <ul class="badges-grid">
                        <li><img src="../assets/images/home/logos/ford.jpg" alt="Ford logo" /></li>
                        <li><img src="../assets/images/home/logos/audi.jpg" alt="Audi logo" /></li>
                        <li><img src="../assets/images/home/logos/bmw.jpg" alt="BMW logo" /></li>
                        <li><img src="../assets/images/home/logos/land-rover.jpg" alt="Land Rover logo" /></li>
                        <li><img src="../assets/images/home/logos/mercedes.jpg" alt="Mercedes logo" /></li>
                        <li><img src="../assets/images/home/logos/citroen.jpg" alt="Citroen logo" /></li>
                        <li><img src="../assets/images/home/logos/renault.jpg" alt="Renault logo" /></li>
                        <li><img src="../assets/images/home/logos/vw.jpg" alt="VW logo" /></li>
                        <li><img src="../assets/images/home/logos/vauxhall.jpg" alt="Vauxhall logo" /></li>
                        <li><img src="../assets/images/home/logos/porsche.jpg" alt="Porsche logo" /></li>
                        <li><img src="../assets/images/home/logos/peugeot.jpg" alt="Peugeot logo" /></li>
                        <li><img src="../assets/images/home/logos/more.jpg" alt="More models" /></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="content-block home-gallery">
            <img src="../assets/images/home/gallery-bg.jpg" alt="Nissan GTR in car wash" class="home-gallery-bg" />

            <div class="grid-container">
                <div class="grid-start-1 grid-span-4">
                    <h2>See the results for yourself in our gallery</h2>

                    <nuxt-link to="/about" class="arrow-outline-right"></nuxt-link>
                </div>
            </div>
        </section>

        <section class="content-block">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-6">
                    <h2>Get behind the scenes and find out the process we go through when working of your car</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet eros dui, finibus imperdiet quam pellentesque eu. Mauris eu libero accumsan risus viverra imperdiet. Duis porta dignissim risus, gravida pulvinar purus lobortis et.</p>

                    <nuxt-link to="/about" class="general-link">See our process</nuxt-link>
                </div>
                <div class="grid-start-8 grid-span-5 home-process-collage">
                    <img src="../assets/images/home/process-collage.jpg" alt="Collage of cars" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
   import socialImage from '~/assets/images/logo.svg' //CHANGE TO PAGE IMAGE 800 x 600
   import Parallax from 'parallax-js'

   import logoBig from '~/components/logo/logo-big'

   export default {
      head() {
         return {
            title: this.metaData.title,
            meta: [
               { hid: 'description', name: 'description', content: this.metaData.desc },
               { hid: 'og:title', name: 'og:title', content: this.metaData.title },
               { hid: 'og:description', name: 'og:description', content: this.metaData.desc },
               { hid: 'og:url', name: 'og:url', content: this.metaData.url },
               { hid: 'og:image', name: 'og:image', content: process.env.websiteUrl + socialImage }
            ],
            link: [
               { rel: 'canonical', href: this.metaData.url }
            ]
         }
      },
      data() {
         return {
            metaData: {
               title: 'Complete accident repair centre - White Bodyworks',
               desc: '',
               url: process.env.websiteUrl + '/'
            }
         }
      },
      components: {
          'full-logo': logoBig
      },
      mounted: function () {
         var scene = document.getElementById('scene');
         var parallaxInstance = new Parallax(scene);
      }
   }
</script>

<style>

</style>
