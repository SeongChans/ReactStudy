import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes())

export default posts;

/* 리팩토링 전


import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router(); // /api/posts/:id
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
//posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;
*/