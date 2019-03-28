define(
    [
        'organizator/Organizator/Application'
    ],
    function(
        Organizator_Application
    ){
        class MyApp extends Organizator_Application {
            constructor(){
                super('MyApp');

                this.hello();
            }

            hello(){
                this.document = document.querySelector('body').innerHTML = 'Hello world';
            }
        }
        
        return MyApp;
    }
);