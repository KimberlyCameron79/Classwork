
let mainEl = document.querySelector('main')

// Task 1.1

mainEl.style.backgroundColor='var(--main-bg)'

// Task 1.2

mainEl.innerHTML='<h1>SEI Rocks!</h1>'

// Task 1.3

mainEl.setAttribute('class','flex-ctr')

// Task 2.0

let topMenuE1 = document.getElementById('top-menu')

// Task 2.1

topMenuE1.style.height = "100%"

// Task 2.2 

topMenuE1.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3

topMenuE1.setAttribute("class", "flex-around")

// Task 3.0

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  // Task 3.1 

  for (let link of menuLinks) {
    let aEle = document.createElement('a')
    aEle.setAttribute('href', link.href)
    aEle.innerHTML=link.text
    topMenuE1.appendChild(aEle)
  }

  //Step 4.0

    let subMenuE1 = document.getElementById('sub-menu')

  //4.1 

  subMenuE1.style.height= '100%' 

  subMenuE1.style.backgroundColor = 'var(--sub-menu-bg)'

  //4.3

  subMenuE1.setAttribute('class', 'flex-around')

  //4.4

  subMenuE1.style.position = 'absolute'

  //4.5

  subMenuE1.style.top = '0'

  //5.0

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

  //5.1

  let topMenuLinks = topMenuE1.getElementByTagName('a')

  let showingSubMenu = false
 

//5.2

topMenuE1.addEventListener('click', handleclick)
event.prevenDefdault();
if (evemt/)
console.log(event. )



//5.3

showingSubMenuE1.addEventListener('click', handleclick )



//5

.7