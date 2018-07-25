<template>
    <div id="form-holder">
        <form>
            <h2>Contact Form</h2>

            <p>To get in touch with us at White Bodyworks simply complete the form below and one of our staff will get back to you as quickly as possible.</p>

            <div class="form-field">
                <span class="form-label" :class="{' form-focus': form.name != '' }">Name</span>
                <input type="text" class="form-textbox" v-model="form.name" placeholder="Name" name="name" required />
            </div>

            <div class="form-field">
                <span class="form-label" :class="{' form-focus': form.email != '' }">Email</span>
                <input type="email" class="form-textbox" v-model="form.email" placeholder="Email" name="email" required />
            </div>

            <div class="form-field">
                <span class="form-label" :class="{' form-focus': form.subject != '' }">Subject</span>
                <input type="text" class="form-textbox" v-model="form.subject" placeholder="Subject" name="subject"/>
            </div>
            
            <div class="form-field">
                <span class="form-label" :class="{' form-focus': form.message != '' }">Message</span>
                <textarea class="form-textbox" v-model="form.message" placeholder="Message" name="message" rows="5" required />
            </div>

            <button type="submit" class="form-submit" :class="{ 'form-submit-progress': form.submitted }" v-show="!form.submitted">Submit the form</button>
            <app-loader v-show="form.submitted"></app-loader>
            
        </form>
    </div>
</template>

<script>
    import Loader from '~/components/forms/loader'

    export default {
        data () {
            return {
                form: {
                    progress: 'open',
                    submitted: false,
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.submitted = true;

                        return;
                    }
                })
            }
        },
        components: {
            'app-loader': Loader
        }
    }
</script>