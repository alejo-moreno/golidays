import yo from 'yo-yo';

/*Render landing */
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
                Welcome to Golidays. Select an item on the side menu to start working.
              </span>
            </div>
          </div>
        </div>
      </div>      
    </div>        
  `;
  $('.app-container').append(el);
}