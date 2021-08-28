# Civil Engineer Blog 

Civil Engineering Blog is an application in which contributors give their perspective on what’s happening today – across all the civil engineering disciplines. Civil engineers and other industry professionals talk about the real world challenges, issues and technical developments they have to deal with.

## Tools, technologies and development server

    •	Technology: HTML, CSS, Angular-8, Firebase;
    •	Database: Firebase (Cloud Firestore, Firestore Authentication, Firestore Storage);

    This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Structure of Firebase/Cloud Firestore:
    • Posts
        o title: string;
        o author: string;
        o publishedDate: string;
        o imageUrl: string;
        o language: string;
        o content: string;
        o userId: string;
        o claps?: string[];    

    • Users
        o displayName: string
        o email: string;
        o password: string;
        o posts: string[];

## Structure of application:
    • core (module)
        o footer (component);
        o header (component);
    • shared (module)
        o models
             posts;
             user;
        o validators;
    • post (module)
        o posts (component)
        o post-details (component)
        o create-post (component);
        o post-routing (module);
        o post-service (service);
    • auth (module)
        o login (component);
        o register (component);
        o my-posts (component);
        o auth-routing (module);
        o auth-service (service);
    • home (component);
    • about (component);
    • not-found (component);


## This application covers all fundamentals of Angular:

    • Cross component communication:
    • Components, Template, and Data Binding;
    • Routing and navigation: app-routing, post-routing, auth-routing;
    • Service workers: post.service, auth.service;
    • Dynamic pages: All Posts, Post Details, Create Post, My Posts;
    • Authentication – user can view:
        o Public part (accessible without authentication):
             Header – Login and Register;
             Home, About us, All Posts, Post Details without claps;
             Footer;
        o Private part (accessible after successful login)
             Header – Welcome, displayName; Logout; My Posts;
             Home, About us, All Posts, Create Post, Post Details with claps;
             Footer;
    • Validations and error handlings:
        o Login, Register – with Reactive Forms;
        o Create Post – with Template-Driven Forms;
    • Dependency injection;
    • CRUD operations;
    • Use a file storage cloud API;

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.