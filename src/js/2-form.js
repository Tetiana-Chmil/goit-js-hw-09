const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

email.value = formData.email || '';
textarea.value = formData.message || '';

form.addEventListener('input', event => {
    formData.email = email.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        return alert('Fill please all fields');
    }

    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(localStorageKey);
    form.reset();
}
