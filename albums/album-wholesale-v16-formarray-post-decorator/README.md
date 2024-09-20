# Album Wholesale Angular V16

This project is a simple product cart application. It allows the user to add or remove products to the cart.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

It aims to be converted with angular v17+ and its new features. 

## Development server

This project run a fake backend server with json-server. To run the project, you need to run first ```npm run api```
This will start the json-server on port 3000. 

Then you can run the project with ```npm start``` or ```ng serve```.

Navigate to `http://localhost:4200/`.

## Result:
You should see the following on the screen when you access too ```http://localhost:4200/shop```

![screen.png](src/assets/screen.png)


 - Create a `LogAlbum` decorator.
 - Apply it to the `add(album: Album)` and to the `remove(album: Album)` from the service.
 - Display the logs in the console when the methods are called with the album name and the action according to the method name :
   - `Album added Object { id: "1", name: "Joe's Garage", artist: "Frank Zappa", description: "Joe's Garage is a three-part rock opera released by American musician Frank Zappa in September and November 1979", price: 20.9, tags: (3) […] }`
    OR
   - `Album removed Object { id: "1", name: "Joe's Garage", artist: "Frank Zappa", description: "Joe's Garage is a three-part rock opera released by American musician Frank Zappa in September and November 1979", price: 20.9, tags: (3) […] }`
