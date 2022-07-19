import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  carDetails = [
    {
      id:1,
      carName:"Mustang",
      carDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      carPrice:23400,
      carImg:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:2,
      carName:"Ferrari",
      carDetails:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      carPrice:36900,
      carImg:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      id:3,
      carName:"Audi",
      carDetails:"Suspendisse fringilla, ipsum eget pharetra pulvinar, nunc sem bibendum felis, eu ultricies est purus sit amet augue.",
      carPrice:14500,
      carImg:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id:4,
      carName:"Porche",
      carDetails:"Nulla ullamcorper nulla est, eget gravida quam posuere at.",
      carPrice:10500,
      carImg:"https://images.unsplash.com/photo-1588258219511-64eb629cb833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:5,
      carName:"Old Mustang",
      carDetails:"Ut nec massa est.",
      carPrice:25700,
      carImg:"https://images.unsplash.com/photo-1591293836027-e05b48473b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:6,
      carName:"Camaro",
      carDetails:"Ut fringilla nulla ipsum. In vel eleifend quam, vitae consequat risus. Nam id sollicitudin dolor. Integer id pretium mauris. Etiam consequat, nunc vel efficitur posuere, dui eros dignissim lacus, vel ultricies enim ante sit amet libero. Nulla luctus id massa et luctus.",
      carPrice:21900,
      carImg:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ]
}