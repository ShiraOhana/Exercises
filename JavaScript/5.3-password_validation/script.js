function passwordCheck(password) {
  if (password.length > 7) {
    console.log("strong");
  } else {
    console.log("Weak");
  }
}

password.length > 7 ? "Strong" : "Weak";

let password = () => {
  return (password.length > 7 && "Strong") || "Weak";
};
