import page from 'page';
import landing from 'src/landing';
import inbox from 'src/inbox';
import detail from 'src/detail';

/*Client-side entrypoint */

page('/', '/home');

page({
    hashbang: true
});