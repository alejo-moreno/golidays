import yo from 'yo-yo';

/* Render request detail */
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
