<template>
   <footer class="footer">
      <div class="footer-content">
         <div class="container">
            <div class="row">
               <div class="contact-info col-lg-3 col-md-3 ">
                  <h4>Company</h4>
                  <p>
                     About Us
                  </p>
                  <p>Contact Us</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>FAQ's & HElp</p>
               </div>
               <div class="links col-lg-3 col-md-3 d-inline-block ">
                  <h4>Contact</h4>
                  <ul class="p-0">
                     <li>123 Street, New York, USA</li>
                     <li>+012 345 67890 </li>
                     <li>mail@domain.com</li>
                  </ul>

               </div>
               <div class="notices col-lg-3 col-md-3 ">
                  <h4>Gallery</h4>
                  <ul class="p-0">
                     <li>Terms & Conditions</li>
                     <li>Privacy Policy</li>
                     <li>CSR policy</li>
                     <li> FAQs</li>

                  </ul>

               </div>
               <div class="social col-lg-3 col-md-3 ">
                  <h4>Newsletter</h4>
                  <ul class="p-0">
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>Instagram</li>
                  </ul>

               </div>

            </div>
         </div>
      </div>
      <div class="container">
         <div class="footer-bottom">
            <p>© Your Site Name, All Rights Reserved. Designed By HTML Codex</p>
         </div>
      </div>


   </footer>
</template>
<script>


export default {
   name: "FooterComponent",

}
</script>

<style>
.footer {
   background: rgb(18, 21, 27);
   padding: 2rem;
   color: white
}

.footer-content {
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
}

.footer-logo {
   width: 150px;
   height: 60px;
}

.contact-info .links .notices .social {
   flex: 1;
}

.footer-bottom {
   text-align: center;
   padding: 1rem, 0;
   border-top: 2px solid #BEBEBE;

}

p {
   padding: 2px;
}

li {
   padding: 15px 15px 15px 0px;
}

ul li {
   list-style-type: none;
}
</style>