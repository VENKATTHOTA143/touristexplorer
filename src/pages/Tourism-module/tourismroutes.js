import BookingComp from "./BookingComp.vue";
import DestinationComp from "./DestinationComp.vue";
import ErrorComp from "./ErrorComp.vue";
import TestimonialComp from "./TestimonialComp.vue";
import TravelGuideComp from "./TravelGuideComp.vue";
import TourComp from "./TourComp.vue";

const tourismroutes = [{
   path: "/tour",
   component: TourComp,
   children: [{
      path: "destination",
      component: DestinationComp,
      name: "destination"
   },
   {
      path: "booking",
      component: BookingComp,
      name: "booking"
   },
   {
      path: "travelguides",
      component: TravelGuideComp,
      name: "travelguides"
   },
   {
      path: "testimonial",
      component: TestimonialComp,
      name: "testimonial"
   },
   {
      path: "error",
      component: ErrorComp,
      name: "error"
   }
   ]
}];

export default tourismroutes;


// import BookingComp from "./BookingComp.vue";
// import DestinationComp from "./DestinationComp.vue";
// import ErrorComp from "./ErrorComp.vue";
// import TestimonialComp from "./TestimonialComp.vue";
// import TravelGuideComp from "./TravelGuideComp.vue";
// import TourComp from "./TourComp.vue";

// const tourismroutes = [{
//    path: "/tour",
//    component: TourComp,
//    // redirect: "/tour/booking",
//    children: [{
//       path: "destination",
//       component: DestinationComp,
//       name: "destination"
//    },
//    {
//       path: "booking",
//       component: BookingComp,
//       name: "booking"
//    },
//    {
//       path: "travelguides",
//       component: TravelGuideComp,
//       name: "travelguides"
//    },
//    {
//       path: "testimonial",
//       component: TestimonialComp,
//       name: "testimonial"
//    },
//    {
//       path: "error",
//       component: ErrorComp,
//       name: "error"
//    }
//    ]
// }];

// export default tourismroutes;