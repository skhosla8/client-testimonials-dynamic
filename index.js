(function () {
  const customers = [];
  const customerImage = document.querySelector('#customer-image');
  const customerName = document.querySelector('#customer-name');
  const customerRating = document.querySelector('#customer-rating');
  const customerReview = document.querySelector('#customer-review');
  const buttonLeft = document.querySelector('.btn-left');
  const buttonRight = document.querySelector('.btn-right');

  let counter = 0;

  class Customer {
    constructor(image, name, rating, text) {
      this.image = image;
      this.name = name;
      this.rating = rating;
      this.text = text;
    }
  }

  function createCustomer(image, name, rating, text) {
    let customer = new Customer(image, name, rating, text);
    customers.push(customer);
  }
  createCustomer(
    'https://github.com/JS-Beginners/testimonial-project/blob/main/img/customer-0.jpg?raw=true',
    'JOHN',
    3,
    'The purpose of Lorem Ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn\'t distract from the layout.'
  );

  createCustomer(
    'https://github.com/JS-Beginners/testimonial-project/blob/main/img/customer-1.jpg?raw=true',
    'SANDY',
    1,
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
  );

  createCustomer(
    'https://github.com/JS-Beginners/testimonial-project/blob/main/img/customer-2.jpg?raw=true',
    'AMY',
    4,
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
  );

  createCustomer(
    'https://github.com/JS-Beginners/testimonial-project/blob/main/img/customer-3.jpg?raw=true',
    'TYRELL',
    2,
    'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  );

  createCustomer(
    'https://github.com/JS-Beginners/testimonial-project/blob/main/img/customer-4.jpg?raw=true',
    'WANDA',
    5,
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  );

  function getRating(rating) {
    customerRating.innerHTML = '';

    for (let i = 0; i < rating; i++) {
      let star = document.createElement('i');
      star.className = 'fas fa-star fa-xs';
      customerRating.append(star);
    }
  }

  function showTestimonial(n) {
    counter += n;

    if (counter < 0) {
      counter = customers.length - 1;
    }

    if (counter > customers.length - 1) {
      counter = 0;
    }

    customerImage.style.backgroundImage = `url(${customers[counter].image})`;
    customerName.textContent = customers[counter].name;
    customerReview.textContent = customers[counter].text;
    customerRating = getRating(customers[counter].rating);
  }

  buttonLeft.addEventListener('click', function () {
    showTestimonial(-1);
  });

  buttonRight.addEventListener('click', function () {
    showTestimonial(1);
  });

  window.onload = function () {
    counter = 0;
    customerImage.style.backgroundImage = `url(${customers[0].image})`;
    customerName.textContent = customers[0].name;
    customerReview.textContent = customers[0].text;
    customerRating = getRating(customers[0].rating);
  };
})();
