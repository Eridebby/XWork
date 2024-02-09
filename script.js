function emailSend(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "erioluwadeborah@gmail.com",
    Password : "8BD2472BA0BB1A1A15AE92E79BF11DCF8E53",
    To : 'deboraherioluwa@gmail.com',
    From : "erioluwadeborah@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

















const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".button");

const bar = document.querySelector(".bar");
const close = document.querySelector(".close");

bar.addEventListener("click", revealMobileNav);
function revealMobileNav() {
  navLinks.classList.add("reveal");
  close.classList.add("display");
  bar.classList.add("hide");
}

close.addEventListener("click", hideMobileNav);
function hideMobileNav() {
  navLinks.classList.remove("reveal");
  close.classList.remove("display");
  bar.classList.remove("hide");
}



const faqs = document.querySelectorAll(".faq")

  faqs.forEach(faq => {
    faq.addEventListener("click", event => {
      faq.classList.toggle("active");
    });
  });