import yo from 'yo-yo';
import $ from 'jquery';
import List from 'list.js';

export function renderInbox(inbox) {
  var el = yo`
    <li id="inbox" class="inbox">       
      <input class="search" placeholder='Search by employee'/>
      <i class="material-icons">search</i>
      <ul class="collection list">
        ${inbox.map(item => renderItem(item))}     
      </ul>
    </li>
    `;

  $('.gvacation-sidenav').append(el);

  //Add features of List.js Searching & Sorting
  var employees = new List('inbox', { valueNames: ['title'] });
}

function renderItem(item) {
  return yo`  
    <li class="collection-item avatar">
     <a href="/inbox/${item.id}">
      <img src="${item.picture}" alt="item.fullname" class="circle">           
      <span class="title">${item.fullname}</span>
      <p>${item.duration} <br>
        ${item.applicationDate}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
     </a> 
    </li>
  `
    ;
}