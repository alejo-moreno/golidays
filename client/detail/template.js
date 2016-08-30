import yo from 'yo-yo';
import $ from 'jquery';

export function renderDetail(item) {
  $('.app-container').empty();
  var el = yo`
        <div class="container">
          <div class="row">    
            <div class="section">
              <h5>${item.fullname}</h5>
              <span class="new badge ${item.status}">${item.status}</span>        
            </div>            
          </div>
          <div class="divider"></div>
          <div class="row">            
            <div class="col s8 m8 l10">
              <ul class="collection">
                <li class="collection-item avatar">
                  <img src=${item.picture} alt="item.fullname" class="circle">
                  <span class="email-title">${item.fullname}</span>                    
                  <p class="grey-text ultra-small">${item.applicationDate}</p>
                </li>
              </ul>
            </div>
            <div class="col s4 m4 l2 actions">
              <a href="/inbox/${item.id}/approve"><span><i class="material-icons up">thumb_up</i></span></a>
              <a href="/inbox/${item.id}/decline"><span><i class="material-icons down">thumb_down</i></span></a>              
            </div>
          </div>
          <div class="content">
            <p>${item.comment}</p>
            <p> From: ${item.dateFrom} </p>
            <p> To: ${item.dateTo} </p>
            <p> Duration: ${item.duration} </p>            
          </div>      
        </div>`;
  $('.app-container').append(el);
}

export function renderHome() {
  $('.app-container').empty();
  var el = yo`  
    <div class="row">
       <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <i class="material-icons">folder</i>
            </div>
            <div class="col s10">
              <span class="black-text">
                Welcome to Golidays. Select some item on the side menu to start working.
              </span>
            </div>
          </div>
        </div>
      </div>      
    </div>        
  `;
  $('.app-container').append(el);
}