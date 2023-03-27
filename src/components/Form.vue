<script setup lang="ts">
import { ValidationProvider } from 'vee-validate';
import { reactive, ref } from 'vue';

const checkedTerms = ref('')
const message = ref('')
const email = ref('')
const dateEvent = ref('')
const selected = ref('')

const options = reactive([
  { id: 0, value: 'correction du site' },
  { id: 1, value: 'service client' },
  { id: 2, value: 'problème de paiement' }
])

const form = reactive({
    checkedTerms: false, message:'', email:'', selected:'', dateEvent:''
})

const checkForm = (e) => {
// if (email && dateEvent) {
//     return true
// }
// this.errors = [];

// if (!this.name) {
//   this.errors.push('Name required.');
// }
// if (!this.age) {
//   this.errors.push('Age required.');
// }

// e.preventDefault();
console.log(form)
}
</script>

<template>
    <form class="" @submit.prevent="checkForm">
        <!-- <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p> -->

        <label for="email" class="mt-9">Email address</label><br>
        <input class="mb-4" v-model="form.email" type="email" placeholder="test@gmail.com" /><br>

        <label for="event">When is your event?</label><br>
        <input class="mb-4" v-model="form.dateEvent" type="date"><br>

        <label for="selection">Sélection: {{ selected }}</label><br>
        <select class="mb-4" v-model="form.selected">
            <option v-for="option in options" :value="option.value">
                {{ option.value }}
            </option>
        </select><br>

        <label for="information">Détails:</label><br>
        <textarea class="mb-4" v-model="form.message" placeholder="informations complémentaires"></textarea><br>

        <button class="p-2 mb-3 button" type="submit" value="Submit">submit</button><br>
     
        <label for="condition" class="mt-4">conditions: </label><br>
        <input type="checkbox" v-model="form.checkedTerms" ><br>
    </form>
</template>

<style>
.button {
    border: 3px solid #EDB571;
    background-color: #f9f4eb;
    border-radius: 5px;
}
</style>