export function isAuthenticated() {

   return localStorage.getItem("authToken") !== null;
}


export function login(token, email) {

   localStorage.setItem("authToken", token);
   localStorage.setItem("userEmail", email);

}

export function logout() {

   localStorage.removeItem("authToken");
   localStorage.removeItem("userEmail");
}