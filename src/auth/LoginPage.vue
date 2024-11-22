<template>
   <div class="login-container">
      <div class="login-card">
         <div>
            <img src="../assets/logotravel.jpg" alt="" class=" img-fluid logotravel">
         </div>
         <form @submit.prevent="handleSubmit">
            <div class="form-group">
               <label for="email">Email</label>
               <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div class="form-group">
               <label for="password">Password</label>
               <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" class="btn btn-outline-light text-white">Login</button>
         </form>

         <!-- Error message -->
         <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

         <p class="register-link">
            Don't have an account? <router-link to="/signup">Sign up</router-link>
         </p>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         email: "",
         password: "",
         errorMessage: "",
      };
   },
   methods: {
      handleSubmit() {

         this.errorMessage = "";


         if (!this.email || !this.password) {
            this.errorMessage = "Both email and password are required!";
            return;
         }
         const storedUser = JSON.parse(localStorage.getItem("userDetails"));
         if (storedUser && storedUser.email === this.email && storedUser.password === this.password) {
            localStorage.setItem("authToken", JSON.stringify(this.email));
            this.$router.push({ path: "/main/home" });
         } else {
            this.errorMessage = "Invalid email or password.";
         }
      },
   },
};
</script>


<style scoped>
.logotravel {
   mix-blend-mode: multiply;
   width: 150px;
}

.login-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background-image: url(../assets/loginBackground2.jpg);
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
}

.login-card {
   padding: 2rem;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   text-align: center;
   max-width: 500px;
   width: 100%;
   background-color: #00000033;
   transition: all 0.5s ease-in-out;
}

.login-card:hover {
   background-color: #00000070;
}

.title {
   font-size: 1.5rem;
   margin-bottom: 1.5rem;
   color: #333;
}

.form-group {
   margin-bottom: 1rem;
   text-align: left;
}

label {
   font-size: 0.9rem;
   color: #fff;
   margin-bottom: 0.5rem;
   display: block;
}

input {
   width: 100%;
   padding: 10px;
   border: 1px solid transparent;
   border-radius: 4px;
   font-size: 1rem;
   margin-top: 0.5rem;
   color: #fff;
   background-color: transparent;
   transition: all 0.3s ease-in-out;
}

input:focus {
   border-color: #fff;
   border-radius: 20px;
   border-top: transparent;
   outline: none;
   box-shadow: 0 0 4px rgba(37, 117, 252, 0.4);
}

.btn {
   width: 100%;
   padding: 0.8rem;
   color: #fff;
   text-decoration: none;
   border: none;
   border-radius: 4px;
   font-size: 1rem;
   cursor: pointer;
}

.btn:hover {
   background: #1a5bb8;
}

.register-link {
   margin-top: 1rem;
   font-size: 0.9rem;
   color: #555;
}

.register-link a {
   color: #2575fc;
   text-decoration: none;
}

.register-link a:hover {
   text-decoration: underline;
}
</style>
