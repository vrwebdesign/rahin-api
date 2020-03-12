/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.get('', 'UserController.get');
  Route.put('', 'UserController.update');
  Route.post('seeVideo', 'UserController.seeVideo');
})
  .prefix('user')
  .namespace('Site')
  .middleware('auth');
