<script setup lang="ts">
import { reactive, ref } from 'vue';
import { helpers, required, maxLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
// import { useToast } from "../../node_modules/vue-toastification";

//toast interface
// const toast = useToast();

// use it!
// toast.success("My toast content", {
//         timeout: 2000
//       });
// form
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

const rules = {
    // email: { required, email },
    email: {
        required: helpers.withMessage('Remplissez votre champ "mail"', required),
        maxLength: helpers.withMessage(
        ({
            $invalid,
            $params,
        }) => `Le mail doit contenir au maximum ${$params.max} caractères, elle est donc ${$invalid ? 'invalid' : 'valid'}`,
        maxLength(40)
    )
    },
    dateEvent: {
        required: helpers.withMessage('Selectionnez votre date', required)
    },
    selected: { 
        required: helpers.withMessage('Selectionnez votre thématique', required)
    },
    checkedTerms: { 
        required: helpers.withMessage('la condition est obligatoire, veuillez cocher', required)
    }
}

const v$ = useVuelidate(rules, form)


const checkForm = async (e) => {
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
const isFormCorrect = await v$.value.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return alert("formulaire incorrect ")
      alert("formulaire correct")
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
        <p class="mess-error"
        v-for="(error, index) of v$.email.$errors"
        :key="index"
        >{{ error.$message }}</p>
        <label for="email" class="mt-9">Email address *</label><br>
        <input class="mb-4" v-model="form.email" type="email" placeholder="test@gmail.com" /><br>

        <p class="mess-error"
        v-for="(error, index) of v$.dateEvent.$errors"
        :key="index"
        >{{ error.$message }}</p>
        <label for="event">When is your event? *</label><br>
        <input class="mb-4" v-model="form.dateEvent" type="date"><br>

        <p class="mess-error"
        v-for="(error, index) of v$.selected.$errors"
        :key="index"
        >{{ error.$message }}</p>
        <label for="selection">Sélection: * {{ selected }}</label><br>
        <select class="mb-4" v-model="form.selected">
            <option v-for="option in options" :value="option.value">
                {{ option.value }}
            </option>
        </select><br>

        <label for="information">Détails:</label><br>
        <textarea class="mb-4" v-model="form.message" placeholder="informations complémentaires"></textarea><br>

        <button class="p-2 mb-3 button" type="submit" value="Submit">submit</button><br>
     
        <p class="mess-error"
        v-for="(error, index) of v$.checkedTerms.$errors"
        :key="index"
        >{{ error.$message }}</p>
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
.mess-error {
    color: red;
}
</style>