import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  dataLength: any;
  page = 1;
  pageSize = 4;
  pager: any;
  keyword = 'mainCity';

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  propertyDetails = [
    {
      "mainCity": "Cardina",
      "address": "l3300 Sonoma Trail, Ennis, TX 75119",
      "rentalPrice": "1775",
      "latitude": "32.332296",
      "longitude": " 96.62403",
      imageArray: [
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
      "propertyDescription": "4bd | 2.5ba",
      "area": "2001 sq ft",
      "availiability": "9/30/2020"
    },
    {
      "mainCity": "Cardina1",
      "address": "3206 Sonoma Trail, Ennis, TX 75119",
      "rentalPrice": "2000",
      "latitude": "32.332296",
      "longitude": " 96.62403",
      imageArray: [
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
      "propertyDescription": "4bd | 3.5ba",
      "area": "2410 sq ft",
      "availiability": "11/19/2020"
    },
    {
      "mainCity": "Cardina2",
      "address": "3104 Sonoma Trail, Ennis, TX 75119",
      "rentalPrice": "1700",
      "latitude": "32.332296",
      "longitude": " 96.62403",
      imageArray: [
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
      "propertyDescription": "3bd | 2ba",
      "area": "1755 sq ft",
      "availiability": "11/29/2020"
    },
    {
      "mainCity": "Cardina3",
      "address": "1600 Bobolink Drive, Ennis, TX 75119",
      "rentalPrice": "1650",
      "latitude": "32.332296",
      "longitude": " 96.62403",
      imageArray: [
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
      "propertyDescription": "4bd | 2.5ba",
      "area": "2039 sq ft",
      "availiability": "11/19/2020"
    },
  ]

  reviews = [
    {
      "experience": "Great Experience",
      "description": "My experience has been great cant wait to meet the staff once the situation gets normal..Than you so Much.",
      "givenBy": "Deepak Yadav",
      "reviewDate": "01-01-2020"
    },
    {
      "experience": "Great Experience",
      "description": "My experience has been great cant wait to meet the staff once the situation gets normal..Than you so Much.",
      "givenBy": "Deepak Yadav",
      "reviewDate": "01-01-2020"
    },
    {
      "experience": "Great Experience",
      "description": "My experience has been great cant wait to meet the staff once the situation gets normal..Than you so Much.",
      "givenBy": "Deepak Yadav",
      "reviewDate": "01-01-2020"
    },
  ]

  facilities = [
    {
      "type": "Multiple payment Options",
      "description": " Checking Account,Debit Card,Credit Card,or RentMoney(Cash Option)"
    },
    {
      "type": "Maintenance Requests",
      "description": "Conveniently submit and check the status of maintenance requests online"
    },
    {
      "type": "Lawn Mowing Provided",
      "description": " Enjoy lawn mowing service for the front and back yard"
    },
    {
      "type": "Convenient Tenant Portal",
      "description": " Rent Payments,Maintenance Requests,Important Documents & more"
    },
  ]
  ngOnInit() {
    this.title.setTitle('Home | Camillo Properties')
    this.meta.updateTag({ name: 'description', content: 'This is the home page' })
    this.meta.updateTag({ name: 'og:description', content: 'This is the home page and this is description for open Graph' })
    this.meta.updateTag({ name: 'robots', content: 'index, follow' })
    this.dataLength = this.propertyDetails.length;
  }
  isOdd(i: any) {
    if (i % 2 == 0) {
      return true;
    }

  }

  propertyList(userId, page) {
    // this.data = res;
    // this.data = this.data.payload;
    // this.pager = this.data.pager;
    // this.testPlansArray = res;
    // this.testPlansArray = this.testPlansArray.payload.planList;
  }
}
