import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MealCategorie } from 'src/app/models/mealCategorie.model';
import {register} from 'swiper/element/bundle';
import {Swiper} from 'swiper/types';

@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.page.html',
  styleUrls: ['./discover-list.page.scss'],
})
export class DiscoverListPage implements OnInit {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  mealCategories : MealCategorie[] = [
    {
      title : 'Burger',
      imgUrl : "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
    {
      title : 'Pasta',
      imgUrl : 'https://static.vecteezy.com/system/resources/previews/027/144/753/original/penne-pasta-with-tomato-sauce-parmesan-cheese-and-basil-on-transparent-background-png.png'
    },
    {
      title : 'Pizza',
      imgUrl : 'https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png',
    },
    {
      title : 'Burger',
      imgUrl : "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
    {
      title : 'Pasta',
      imgUrl : 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png'
    },
    {
      title : 'Pizza',
      imgUrl : 'https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png',
    },
    {
      title : 'Burger',
      imgUrl : "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
    {
      title : 'Pasta',
      imgUrl : 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png'
    },
    {
      title : 'Pizza',
      imgUrl : 'https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png',
    },
    {
      title : 'Burger',
      imgUrl : "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
    {
      title : 'Pasta',
      imgUrl : 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png'
    },
    {
      title : 'Pizza',
      imgUrl : 'https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png',
    },
    {
      title : 'Burger',
      imgUrl : "https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
    {
      title : 'Pasta',
      imgUrl : 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png'
    },
    {
      title : 'Pizza',
      imgUrl : 'https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_6651523.png',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    register()
  }

  onActiveIndexChange(){

  }

}
