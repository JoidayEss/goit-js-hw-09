const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    document.getElementById('email').value = formData.email;
    document.getElementById('message').value = formData.message;
  }
});

document.getElementById('feedback-form').addEventListener('input', event => {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

document.getElementById('feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    formData.email = '';
    formData.message = '';
  }
});
