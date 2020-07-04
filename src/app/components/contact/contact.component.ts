import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';
import { ContactoFormService } from 'src/app/contacto-form.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactForm: FormGroup;
  formSubmitted: boolean = false;
  mailUrl = "https://us-central1-laforjaweb2.cloudfunctions.net/submit";
  headers =
    {
      'postman-token': 'b15dec5b-b539-7a7f-218a-a1cb79fc1d69',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    };

  constructor(public formBuilder: FormBuilder, public http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      nombre: this.formBuilder.control(null),
      email: this.formBuilder.control(null, [Validators.email, Validators.required]),
      message: this.formBuilder.control(null),
      asunto: this.formBuilder.control(null),
      telefono: this.formBuilder.control(null)
    });


  }

  ngOnInit(): void {

    this.hola();

  }


  onSubmitForm() {
    console.log(this.contactForm.value);
    this.formSubmitted = true;
    this.http.post(this.mailUrl, this.contactForm.value).subscribe();;
    this.contactForm.reset();
  }



  /* public logIn(nombre, msj, email, asunto) {
   
    
  }
  
    enviar() {
      console.log(
        this.form.logIn("lolo", "mensaje", "333@dkdkdkdk.com", "ASUNTO")
      );
  
    } */



  /*  contactForm: FormGroup;
   disabledSubmitButton: boolean = true;
   optionsSelect: Array<any>;
 
   @HostListener('input') oninput() {
 
     if (this.contactForm.valid) {
       this.disabledSubmitButton = false;
     }
   }
 
   constructor(private fb: FormBuilder, private connectionService: ConnectionService) {
 
     this.contactForm = fb.group({
       'contactFormName': ['', Validators.required],
       'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
       'contactFormSubjects': ['', Validators.required],
       'contactFormMessage': ['', Validators.required],
       'contactFormCopy': [''],
     });
   }
 
   onSubmit() {
     this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
       alert('Your message has been sent.');
       this.contactForm.reset();
       this.disabledSubmitButton = true;
     }, error => {
       console.log('Error', error);
     });
   } */


  hola() {
    let styruintype: string = " algo";
  console.log(
    styruintype.toUpperCase());
    let styruintype1: any = " algo1";
   console.log(

     styruintype.toUpperCase()
   );
   
    let styruintype2: Object = " algo2";
    styruintype.toUpperCase();
  }

}