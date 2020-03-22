<template>
    <v-row align="center">
    <v-card class="mx-auto">
        <v-container>
            <v-form
                ref="form"
                v-model="valid"
                id="boardgameCreate"
            >
                <v-text-field
                v-model="Name"
                name="name"
                :counter="16"
                :rules="nameRules"
                label="Name*"
                required
                ></v-text-field>

                <v-select
                v-model="Type"
                name="type"
                :items="types"
                :rules="[v => !!v || 'Item is required']"
                label="Type*"
                required
                ></v-select>
        
                <v-text-field
                v-model="Location"
                name="location"
                :counter="16"
                :rules="loactionRules"
                label="Location*"
                required
                ></v-text-field>

                <v-text-field
                v-model="Remark"
                name="remark"
                :counter="64"
                :rules="remarkRules"
                label="Remark"
                hint="Please write important attention if necessary"
                ></v-text-field>
                
                <v-file-input
                accept="image/*"
                label="Avatar"
                name="avatar"
                show-size
                prepend-icon="mdi-camera"
                ></v-file-input>

                <br>
                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
                >
                submit
                </v-btn>
        
                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>
        
                <v-btn
                color="warning"
                @click="resetValidation"
                >
                Reset Validation
                </v-btn>
            </v-form>
        </v-container>
    </v-card>
    </v-row>
</template>

<script>
    export default {
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 16) || 'Name must be less than 16 characters',
        ],
        select: null,
        types: [
          'Card Game',
          'Chess Game',
          'City Building',
          'Role-Playing Game',
        ],
        location: '',
        locationRules: [
          v => !!v || 'Location is required',
          v => (v && v.length <= 16) || 'Location must be less than 16 characters',
        ],
        remark:'',
        remarkRules:[
          v => (v.length <= 64) || 'Remark must be less than 64 characters',
        ],
        avatar: null,
        lazy: false,
      }),
  
      methods: {
        async submit() {
            alert('submit');
            var response = await fetch("/boardgame/create", {
                method: "POST",
                credentials: "same-origin",
                body: new FormData(document.getElementById("boardgameCreate"))
            });
            var data = await response.json();
            alert(JSON.stringify(data));   
        },
        validate () {
          this.$refs.form.validate()
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
        
      },
    }
</script>