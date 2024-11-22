<template>
   <div class="signupcomp">

      <div class="signup-container">
         <div>
            <img src="../assets/logotravel.jpg" alt="" class=" img-fluid logotravel">
         </div>
         <form @submit.prevent="handleSignup">
            <div class="form-group">
               <label for="username">Username</label>
               <input type="text" id="username" v-model="form.username" required placeholder="Enter your username" />
            </div>
            <div class="form-group">
               <label for="email">Email</label>
               <input type="email" id="email" v-model="form.email" required placeholder="Enter your email" />
            </div>
            <div class="form-group">
               <label for="password">Password</label>
               <input type="password" id="password" v-model="form.password" required
                  placeholder="Enter your password" />
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
         </form>
         <p class="register-link">
            Already have an account? <a href="/" class="login-link">Log In</a>
         </p>
      </div>
   </div>
</template>

<script>
export default {
   name: "SignupComp",
   data() {
      return {
         form: {
            username: "",
            email: "",
            password: "",
         },
      };
   },
   methods: {
      handleSignup() {
         const { username, email, password } = this.form;

         if (username && email && password) {
            localStorage.setItem("userDetails", JSON.stringify(this.form));


            alert("Signup successful! Redirecting to login page...");
            this.$router.push("/");
         } else {
            alert("All fields are required.");
         }
      },
   },
};
</script>

<style scoped>
.signupcomp {
   background-image: url(../assets/loginBackground2.jpg);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   height: 100vh;

   display: flex;

   justify-content: center;

   align-items: center;

   padding: 20px;

   box-sizing: border-box;

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

.logotravel {
   mix-blend-mode: multiply;
   width: 150px;
   margin-bottom: 20px;
}

.signup-btn {
   background-color: transparent;
   width: 100%;
   padding: 0.8rem;
   color: #fff;
   text-decoration: none;
   border: none;
   border-radius: 4px;
   font-size: 1rem;
   cursor: pointer;
}

.signup-btn:hover {
   background: #1a5bb8;
}

.signup-container {
   background-color: #00000033;
   padding: 30px 40px;
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   max-width: 500px;
   width: 100%;
   transition: all 0.5s ease-in-out;
   text-align: center;
}

.signup-container:hover {
   background-color: #00000070;
}





.form-group {
   margin-bottom: 20px;
   text-align: left;
}

.form-group label {
   display: block;
   font-size: 14px;
   color: #ffffff;
   margin-bottom: 8px;
}





.message {
   margin-top: 15px;
   font-size: 14px;
   color: #555;
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
