<template>
    <div>
        <header class="title-block">
            <div class="grid-container grid-bottom">
                <div class="grid-start-1 grid-span-6">
                    <h1>Contact White Bodyworks</h1>

                    <p><strong>White Bodyworks</strong><br />36 Benfield Way, Braintree,<br />Essex, CM7 3YS</p>

                </div>
                <div class="grid-start-7 grid-span-6">
                    <p><strong>Telephone:</strong> <a href="tel:01376617490">01376 617 490</a><br />
                    <strong>Mobile: </strong><a href="tel:07445392833">07445 392 833</a><br />
                    <strong>Email: </strong><a href="mailto:info@whitebodyworks.co.uk">info@whitebodyworks.co.uk</a></p>

                </div>
            </div>
        </header>

        <no-ssr>
            <GmapMap :center="map.position" :zoom="16" map-type-id="terrain" class="title-image">
                <GmapMarker :position="map.position" />
            </GmapMap>
        </no-ssr>

        <section class="content-block">
            <div class="grid-container">
                <div class="grid-start-1 grid-span-6">
                    <form-contact></form-contact>

                </div>
                <div class="grid-start-8 grid-span-5">

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import socialImage from '~/assets/images/logo.svg' //CHANGE TO PAGE IMAGE 800 x 600 
    import ContactForm from '~/components/forms/contact'

    export default  {
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
                    title: 'Contact White Bodyworks - White Bodyworks',
                    desc: '',
                    url: process.env.websiteUrl + '/contact'
                },
                map: {
                    position: { lat: 51.877302, lng: 0.566013 }
                }
            }
        },
        components: {
            'form-contact': ContactForm
        }
    }
    
</script>