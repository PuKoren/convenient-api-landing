<template>
    <form @submit.prevent="onSubmit" class="form-demo">
        <label>
            <span>Email</span>
            <input type="email" v-model="form.email.string" autofocus @input="onInput" @blur="onBlur" ref="email"/>
        </label>
        <label>
            <span>Firstname</span>
            <input type="text" v-model="form.firstname" />
        </label>
        <label>
            <span>Lastname</span>
            <input type="text" v-model="form.lastname" />
        </label>
        <label>
            <span>Gender</span>
            <select v-model="form.sex">
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </label>
        <label>
            <span>Country</span>
            <select v-model="form.country">
                <option v-for="country in $options.countries" :value="country.code" :key="country.code">
                    {{ country.name }}
                </option>
            </select>
        </label>
    </form>
</template>

<script>
import { search } from '../api'
import countries from '../../countries'

export default {
    countries,
    data() {
        return {
            form: {
                email: {
                    string: ''
                },
                firstname: '',
                lastname: '',
                country: '',
                birthyear: '',
                sex: ''
            },
            pending: true
        }
    },
    mounted() {
        this.fillEmail('bernard.dupond@gmail.com');
    },
    methods: {
        fillEmail(email) {
            let index = 0;

            this.interval = setInterval(() => {
                if (this.form.email.string.length === email.length) {
                    this.$refs.email.dispatchEvent(new Event('blur'));
                    return clearInterval(this.interval)
                }
                this.form.email.string += email[index++];
            }, 200)
        },
        onInput() {
            clearInterval(this.interval);
        },
        async onBlur() {
            const fakeLatency = new Promise(resolve => setTimeout(resolve, 2000));

            this.pending = true;
            try {
                const [{ data }]= await Promise.all([search(this.form), fakeLatency]);
                this.form = data;
            } finally {
                this.pending = false
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style scoped lang="stylus">
@import '../theme/styles/config.styl'

.form-demo

    label
        display block
        margin-bottom 0.5rem

        span
            text-align left
            display inline-block
            width 10rem

    input, select
        color lighten($textColor, 25%)
        width 16rem
        display inline-block
        border 1px solid darken($borderColor, 10%)
        font-size 0.9rem
        line-height 1.2rem
        padding 0.6rem 0.5rem
        outline none
        transition all .2s ease
        background: white

        &:focus
            border-color $accentColor
</style>
