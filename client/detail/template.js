import yo from 'yo-yo';
import $ from 'jquery';

export function renderDetail(item) {
    $('.app-container').empty();
    var el = yo`
        <div class="container">
          <div class="row">    
            <div class="section">
              <h5>${item.fullname}</h5>
              <span class="new badge">vacations</span>        
            </div>            
          </div>
          <div class="divider"></div>
          <div class="row">            
            <div class="col s10 m10 l10">
              <ul class="collection">
                <li class="collection-item avatar">
                  <img src=${item.picture} alt="item.fullname" class="circle">
                  <span class="email-title">${item.fullname}</span>                    
                  <p class="grey-text ultra-small">${item.applicationDate}</p>
                </li>
              </ul>
            </div>
            <div class="col s2 m2 l2 actions">
              <a href="#!"><span><i class="material-icons">thumb_up</i></span></a>
              <a href="#!"><span><i class="material-icons">thumb_down</i></span></a>              
            </div>
          </div>
          <div class="email-content">
          <p>${item.comment}</p>            
          </div>      
        </div>`;
    $('.app-container').append(el);
}