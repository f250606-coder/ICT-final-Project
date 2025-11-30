  let users = [];
  let loggedUser = null;

  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const contactForm = document.getElementById("contactForm");
  const welcomeText = document.getElementById("welcomeText");
  const reviewsContainer = document.querySelector(".reviews");

  // SIGNUP
  signupForm.onsubmit = function (e) {
    e.preventDefault();
    const user = {
      name: document.getElementById("signupName").value,
      email: document.getElementById("signupEmail").value,
      password: document.getElementById("signupPassword").value
    };
    users.push(user);
    alert("Signup successful! Please login.");

    signupForm.reset();
    signupForm.style.display = "none";
    loginForm.style.display = "block"; // show login after signup
  };

  // LOGIN
  loginForm.onsubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return alert("Invalid email or password!");

    loggedUser = found;
    welcomeText.innerText = "Welcome, " + loggedUser.name;

    loginForm.style.display = "none";
    contactForm.style.display = "block";

    // Auto-fill contact
    document.getElementById("contactName").value = loggedUser.name;
    document.getElementById("contactEmail").value = loggedUser.email;
  };

  // CONTACT FORM
  contactForm.onsubmit = function (e) {
    e.preventDefault();

    const message = document.getElementById("contactMessage").value;
    const name = loggedUser.name;

    // Create a new review card dynamically
    const newReview = document.createElement("div");
    newReview.className = "review-card";
    newReview.innerHTML = `<p>"${message}"</p><span>- ${name}</span>`;

    // Append the new review to the reviews container
    reviewsContainer.appendChild(newReview);

    alert("Message sent successfully!");
    contactForm.reset();
  };