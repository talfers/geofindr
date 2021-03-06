var background = document.querySelector('#background');

var bgs = [
  "https://images.unsplash.com/photo-1580213845018-b9344d58d7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1572289930805-8726ca496e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80",
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "https://images.unsplash.com/photo-1519709063170-124e1d4a8e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1484856299450-fb14549bca50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2060&q=80",
  "https://images.unsplash.com/photo-1506519056028-d18449e82c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80",
  "https://images.unsplash.com/photo-1470218091926-22a08a325802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80",
  "https://images.unsplash.com/photo-1508885368104-a4871600f1e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "https://images.unsplash.com/photo-1541535758951-5df4591cbd79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "https://images.unsplash.com/photo-1518620664663-35a1f6378ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1623&q=80",
  "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1516689948391-3379ec7c7df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1476385822777-70eabacbd41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1499571915857-1463cca3370a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1508971344143-29b17efc1689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
  "https://images.unsplash.com/photo-1514864151880-d1bef4892f29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/245634/pexels-photo-245634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/753868/pexels-photo-753868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1045844/pexels-photo-1045844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/421788/pexels-photo-421788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3604267/pexels-photo-3604267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

var randNum = Math.floor(Math.random() * bgs.length);
background.style.backgroundImage = `url(${bgs[randNum]})`;
