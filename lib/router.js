Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
    //home
    this.route('home', {
      path: '/',
      template: 'home'
    });

    //login
    this.route('login',{
      path: '/login',
      template: 'login'
    });

    //register
    this.route('register',{
      path: '/register',
      template: 'register'
    });

    //about
    this.route('about', {
      path: '/about',
      template: 'about'
    });



});
