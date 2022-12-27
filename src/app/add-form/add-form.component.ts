import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/shared/product.model';
import { ProductDetailService } from 'src/app/product-detail.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers: [ProductDetailService]
})
export class AddFormComponent implements OnInit {
  isSubmitted: boolean = false;
  reactiveForm: FormGroup;


  // setting date maximum limit start
  todayDate: any;
  maxDate: any;
  date1 = new Date();

  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();

  finalMonth: any;
  finalday: any;
  // setting date maximum limit end

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private Service: ProductDetailService) {


  }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      shortCode: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      category: new FormControl('fruit', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      description: new FormControl(null, [Validators.minLength(3), Validators.maxLength(250)]),
      image: new FormControl(null),
      isBest: new FormControl(null),
      countInStock: new FormControl(null),
      date: new FormControl(null, Validators.required),
      origin: new FormControl('bd', Validators.required)


    });


    //setting date maximum limit start
    if (this.currentMonth < 10) {
      this.finalMonth = "0" + this.currentMonth;
    }
    else {
      this.finalMonth = this.currentMonth;
    }

    if (this.currentDay < 10) {
      this.finalday = "0" + this.currentDay;
    }
    else {
      this.finalday = this.currentDay;
    }

    this.todayDate = this.currentYear + "-" + this.finalMonth + "-" + this.finalday;
    // console.log(this.todayDate)
    this.maxDate = this.todayDate;
    //setting date maximum limit end

  }





  submit() {
    this.isSubmitted = true;
    const fv = this.reactiveForm.value;
    console.log(fv.name)
    console.log(fv.isBest)

    const product: any = {
      name: fv.name,
      shortCode: fv.shortCode,
      category: fv.category,
      price: fv.price,
      description: fv.description,
      image: fv.image,
      countInStock: fv.countInStock,
      isBest: fv.isBest,
      date: fv.date,
      origin: fv.origin
    }
    this.Service.createProduct(product).subscribe();
  };



}

