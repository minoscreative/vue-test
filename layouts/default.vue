<template>
   <div>
      <app-nav></app-nav>
      <nuxt/>
      <app-footer></app-footer>
   </div>
</template>

<style>

</style>


<script>
    import Navigation from '~/components/layout/navigation'
    import Footer from '~/components/layout/footer'
    
    export default {
        head: {
            bodyAttrs: {
                ontouchstart: ''
            }
        },
        components: {
            'app-nav': Navigation,
            'app-footer': Footer
        }
    }
   
</script>