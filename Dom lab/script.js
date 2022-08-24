var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  let mainEl = document.querySelector("main");
  console.log(mainEl)

  //let mainColor = var(--main-bg);

  
 mainEl.style.backgroundColor = "var(--main-bg)"

 mainEl.innerHTML = "<h1> SEI Rocks! </h1>"

mainEl.classList.add("flex-ctr")