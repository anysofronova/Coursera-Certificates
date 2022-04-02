'use strict';


function validateForm(parameters) {
    const inputs = [...document.querySelectorAll('input')];
    inputs.forEach(i => {
        i.addEventListener('blur', chekInput, true);
        i.addEventListener('focus', removeError, true);
    })

    const submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', checkForm);

    function removeError() {
        if (this.classList.contains(parameters.inputErrorClass)) this.classList.remove(parameters.inputErrorClass);
    }

    function chekInput() {
        switch (this.dataset.validator) {
            case 'letters':
                this.classList.toggle(parameters.inputErrorClass, !this.value.match(/^[a-zа-яё]+$/i))
                break;
            case 'number':
                if (this.dataset.validatorMin && this.dataset.validatorMax) {
                    let numberMatch = this.value.length === 0 || isNaN(this.value) || Number(this.value) < this.dataset.validatorMin || Number(this.value) > this.dataset.validatorMax;
                    this.classList.toggle(parameters.inputErrorClass, numberMatch)
                } else {
                    this.classList.toggle(parameters.inputErrorClass, !this.value.match(/^-?\d+$/i));
                }
                break;
            case 'regexp':
                this.classList.toggle(parameters.inputErrorClass, !this.value.match(this.dataset.validatorPattern));
                break;
        }
    }

    function checkForm(e) {
        e.preventDefault();
        const form = document.getElementById(parameters.formId);
        const emptyInput = i => i.value.length == 0;
        if (inputs.some(emptyInput)) {
            inputs.forEach(i => {
                if (i.dataset.hasOwnProperty('required')) chekInput.call(i);
                else if (i.value.length == 0) i.classList.remove(parameters.inputErrorClass);
            })
        }
        const notValid = i => i.classList.contains(parameters.inputErrorClass);
        form.classList.toggle(parameters.formValidClass, !inputs.some(notValid));
        form.classList.toggle(parameters.formInvalidClass, inputs.some(notValid))
    }
};