# MealPal

Welcome to MealPal, an innovative online platform that aims to provide users with personalized meal plans tailored to their individual needs or health challenges.
Cohort 8 Pro Capstone Project

## Table of contents

- [Features]()
- [Team Members](#team-members)
  - [Team Alpha](#team-alpha)
  - [Team Beta](#team-beta)
  - [Team Eta](#team-eta)
  - [Team One](#team-one)
- [Tools](#tools)
- [Resources](#resources)
- [Hosted Project](#hosted-project)

## Features

### Landing Page

The landing page includes the welcoming address, get started function and sign in function.

### Get Started

The get started process is the first step to enjoy the full benefits of our meal planning app. Follow these steps:

- Open the app and click on the "Get Started" button.
- Select your goal, dietary preferences, allergies, health conditions, and enter your BMI to calculate your body mass index.
- Enter your email address and create a strong password.
- Fill in your personal details, including your name and contact information.
- Review our Terms and Conditions and Privacy Policy.
- Click the "Sign Up" button to create your account.

### Sign In

If you already have an account, log in using these steps:

- Open the app and click on the "Log In" button.
- Enter your registered email address and password.
- Click the "Sign In" button to access your account.

### Referral Feature

- Automatically generates a referral link for logged-in users.
- Referral links are unique to the each user because it's been generated with the User ID.
- Users earn points for every successful referral.
- Points can be redeemed for rewards.
- Users can copy their referral link to the clipboard.
- Points are now stored in firebase database to add 10 points to a user that refers a new user by signing up successfully. 

#### How It Works

- Upon logging in, users are automatically provided with a referral link.
- Users can copy their referral link to the clipboard by clicking the "Copy" button.
- When a referral signs up using the referral link, the referring user earns points.
- Points are displayed in the UI and stored in firebase database.
- Users can redeem their points for rewards by clicking the "Redeem Points" button.

## Team Members

### Team Alpha

- Ayomikun Adeosun [ayomikun-ade](https://www.github.com/ayomikun-ade)
- Ireoluwa Adegoke [Adereb-web](https://www.github.com/Adereb-web)
- Fracesca Ezih [Cesca04](https://www.github.com/Cesca04)

### Team Beta

- Frieda Odagboyi [friedaodagboyi](https://www.github.com/friedaodagboyi)

### Team Gamma

- Divine Dibobie [divinedibobie](https://github.com/divinedibobie)
- Elizabeth Godfrey [miyemicodes](https://github.com/miyemicodes)
- Zahidat Alao [Ayomii1](https://github.com/Ayomii1)

### Team Delta

- Babatunde Maryam [Joyfuol](https://github.com/Joyfuol)

### Team ETA - Gamification

- Anezi Ugwuomarima [janeAnezi](https://www.github.com/janeAnezi)
- Sarah Lutaaya [sarahlutaaya256](https://www.github.com/sarahlutaaya256)
- Favour Joseph []()


### Team Zeta

- Ola Esther Pelumi [ESTHER-OLA](https://github.com/ESTHER-OLA/c8Project)
- Joy Wilson []()
- Moromoke Bello [moromoke01](https://github.com/moromoke01/c8Project/tree/master)

### Team Epsilon

- Chioma Marycynthia []()


### Team One

- Achi Faith [IfyFaith24](https://github.com/ifyfaith24)
- Nwachukwu Chinechelum Eucharia [Eucharian8](https://github.com/Eucharian8)

### Team Two

- Babatunde Maryam [Joyfuol](https://github.com/Joyfuol)


  # Overview

  The app is designed to incentivize user engagement through gamification features such as referral links, point awards, and meal plan points.

  # Team Contributions

  - Profile : [Joyfuol] Worked on the profile input section by changing the dummy text to a placeholder which allows users to input their details without having to delete any text.

- Allergies : [Joyfuol] Added more allergies to ensure users with different ailments can benefit from the app.

- Diet Options : [Joyfuol] Included more diets to the dietary options. This will enable 70% of individuals to benefit from the app.

- Meal list : [Joyfuol] Updated the recommended meal plans by adding different types of meal ranging from African dishes, Chinese dishes ...


- Meal Plan Points: [sarahlutaaya256] developed the functionality related to meal plan points, including tracking user activities and assigning points accordingly.

- Referral Link: [Eucharian8] Made the referral link redirect the new user to the signup page.  Each referral link is generated with the User's ID that is stored in the firebase database, making it unique to each user.

- Copy Link and Share Button: [Eucharian8] Improved the UI of the referral link copy button and added a share button.

- Feedback API: [Eucharian8] Added a feedback form api that captures all feedback sent in the feedback section of the app. Each user gets a reply after their feedback has been received.


  # Features

  - Referral System
    Users can generate unique referral links that includes their User's ID.
    Points are awarded to users when someone signs up using their referral link.
    Detailed analytics and reporting on referral activities.
  - Point System
    Points are awarded for various in-app actions such as completing tasks, reaching milestones, and engaging with content.
    Points can be redeemed for rewards or used to unlock premium features.
  - Meal Plan Points
    Users earn points for following the meal plan provided by the app.
    Points are awarded based on adherence to the plan, healthy eating choices, and consistency.
  - Create Meal Plan
    Enhance the ability for users to create customized meal plans based on dietary preferences, health goals, and calorie requirements. 

  # Installation

  - Clone the repository:
    git clone https://github.com/PrincessMaggy/MealPalV2
  - Install dependencies:
    npm install
  - Build and run the application:
    npm run build
    npm run dev


## Tools

- React: Frontend framework for building user interfaces.
- JavaScript: Programming language used for frontend logic.
- HTML/CSS: Markup and styling languages for structuring and styling the UI.
- Firebase: Used to store and retrieve points for each user.
- API: A food api may analyze recipe costs and nutritional values,classify foods into allergens,compute meal plans, etc. Spoonacular food and recipe api is the only API you will ever need. Its effficient and reliable.
- API: A form api that captures all feedback sent in the feedback section of the app. Each user gets a reply after their feedback has been received.

## Languages, Framework and Tools

- Firebase (for data storage)
- React(vite)
- Tailwind CSS
- Github
- API (https://spoonacular.com/food-api)
- Feedback API (https://www.emailjs.com/docs/)

## Hosted Project

Explore the live version of the MealPal Web App here [MealPal](https://meal-pal-v2-delta.vercel.app/).
Thank you for choosing MealPal
