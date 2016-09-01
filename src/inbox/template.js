import yo from 'yo-yo';
import List from 'list.js';


/*Render inbox */
export function renderInbox(inbox) {
  var $sideNav = $('.gvacation-sidenav');
  var el = yo`
    <li id="inbox" class="inbox">       
      <input class="search" placeholder='Search by employee'/>
      <i class="material-icons">search</i>
      <ul class="collection list">
        ${inbox.map(item => renderItem(item))}     
      </ul>
    </li>
    `;
  $sideNav.empty();
  $sideNav.append(el);

  //Add features of List.js Searching & Sorting
  var employees = new List('inbox', { valueNames: ['title'] });
}

/*Render item */
function renderItem(item) {
  return yo`  
    <li class="collection-item avatar" data-id=${item.id} >
     <a href="/inbox/${item.id}" onclick=${selectItem.bind(this)}>
      <img src="${item.picture}" alt="item.fullname" class="circle">           
      <span class="title">${item.fullname}</span>
      <p class="grey-text">${item.duration} <br>
        ${item.applicationDate}
      </p>
      <a href="/inbox/${item.id}" class="secondary-content"><i class="material-icons ${item.status}">${item.status == 'approved' ? 'thumb_up' : item.status == 'declined' ? 'thumb_down' : 'grade'}</i></a>
     </a > 
    </li >
    `;
  function selectItem(el) {
    $('.gvacation-sidenav .collection').find('*').removeClass('active');
    var item = $(el.currentTarget).closest('li').addClass('active');
    if ($(window).width() <= 992) {
      $('.button-collapse').sideNav('hide');
    }
  }
}

/*UI approve request */
export function approveItem(id) {
  var badge = $('.app-container').find('.section .badge');
  badge.removeClass('declined').addClass('approved').html('approved');
  var $item = $('.gvacation-sidenav').find(`.collection li[data-id=${id}]`);
  $item.find('a.secondary-content i').text('thumb_up').css('color', '#03A9F4');
}

/*UI decline request */
export function declineItem(id) {
  var badge = $('.app-container').find('.section .badge');
  badge.removeClass('approved').addClass('declined').html('declined');
  var $item = $('.gvacation-sidenav').find(`.collection li[data-id=${id}]`);
  $item.find('a.secondary-content i').text('thumb_down').css('color', '#FF5252');
}