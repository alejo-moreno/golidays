import page from 'page';
import * as inbox from 'src/inbox';
import * as template  from './template';

/*GET application landing */
page('/home', function (ctx, next) {
    template.renderHome();
    inbox.getInbox();
});