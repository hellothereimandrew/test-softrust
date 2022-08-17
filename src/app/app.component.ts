import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, MaxLengthValidator } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    captcha: string;
    
    constructor() {
        this.captcha = ''
    }

    formData: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(11)]),
        message: new FormControl('', Validators.required),
        codeIn: new FormControl('', Validators.required),
        codeOut: new FormControl(Math.floor(Math.random() * 99999), Validators.required),
        
        // codeOut: new FormControl(window.crypto.getRandomValues, Validators.required),
    })
    
    submitForm() {
        if (this.formData.status == 'INVALID' || this.formData.value === null) {
            alert('Все поля обязательны для заполнения')
        }
        if (typeof this.formData.value.phone != 'number') {
            alert('В поле "Ваш телефон" можно вводить только цифры')
        }
        // if () {
        //     alert('Вы ввели некорректный email')
        // }
        if (this.formData.value.codeIn !== this.formData.value.codeOut) {
            alert('Не правильный код')
        }
        else {
            alert('Ваше письмо отправлено. Скоро с вами свяжется наш специалист!')
            console.log(this.formData)
        }
    }

    resolvedCaptcha(captchaResponse: string) {
        this.captcha = captchaResponse
    }
    
    // codeGenerate() {
    //     let array = new Uint32Array(10)
    //     window.crypto.getRandomValues(array)
    //     for (let i = 0; i < array.length; i++) {
    //         console.log(array[i])
    //     }
    // }
}