# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.




___

# STRUCTURE

```diff
/
├── .expo
├── .vscode               
├── app
│   ├── (add-friends)/           
│   │   ├── _layout.tsx
│   │   └── 
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   ├── reset-password.tsx    + Page where you can enter your new password 
│   │   ├── fullname.tsx          + Page where user add their fullname 
│   │   ├── add-email.tsx         + Page where user add their email for registration
│   │   ├── signin.tsx            + Sign in page
│   │   ├── signup.tsx            + Sign Up page
│   │   ├── reset.tsx             + Reset Password page
│   │   ├── confirm-otp.tsx       + Confirm OTP for Reset Password
│   │   └── verify-otp.tsx        + Page where user should add OTP verify code 
│   ├── (tab)/           
│   │   ├── _layout.tsx
│   │   ├── settings.tsx        + Settings page
│   │   ├── 
│   │   └── 
│   ├── message/
│   │   └── 
│   ├── (profile-settings)/
│   │   ├── _layout.tsx
│   │   ├── profile.tsx
│   ├── _layout.tsx       
│   ├── home.tsx               + First page after Splash screen
│   └── index.tsx              + Splash screen
│  
├── components/
│   ├── components/
│   │   ├── LogOut.tsx                  - NEED CORRECT 
│   │   ├── NavigateButton.tsx          - NEED CORRECT 
│   │   └── SettingSwitcher.tsx         - NEED CORRECT 
│   │
│   ├── HomeBotton.tsx         + Bottom part for home page
│   ├── CustomButton.tsx       - NEED CORRECT 
│   ├── FormField.tsx          - NEED CORRECT 
│ 
├── .gitignore
├── app.json
├── declaration.d.ts
├── package-lock.json           # Dependencies of main project
├── package.json                # Dependencies of main project
└── tsconfig.json

```markdown
```diff
/
├── .expo
├── .vscode               
├── app
│   ├── (add-friends)/           
│   │   ├── _layout.tsx
│   │   └── 
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   ├── 
│   │   ├── fullname.tsx        !!! #5 Page where user add their fullname 
│   │   ├── add-email.tsx       !!! #3 Page where user add their email for registration
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   ├── 
│   │   └── verify-otp.tsx         + #4 Page where user should add OTP verify code 
│   ├── (tab)/           
│   │   ├── _layout.tsx
│   │   ├── settings.tsx          !!! Sett
│   │   ├── 
│   │   └── 
│   ├── message/
│   │   └── 
│   ├── (profile-settings)/
│   │   ├── _layout.tsx
│   │   ├── profile.tsx



│   ├── _layout.tsx       
│   ├── home.tsx               !!! #2 First page after Splash screen
│   └── index.tsx              !!! #1 Splash screen
│  
│   
│   
├── components/
│   ├── components/
│   │   ├── LogOut.tsx                  =>  NEED CORRECT 
│   │   ├── NavigateButton.tsx          =>  NEED CORRECT 
│   │   └── SettingSwitcher.tsx         =>  NEED CORRECT 
│   │
│   ├── HomeBotton.tsx         !!! Bottom part for home page
│   ├── CustomButton.tsx       =>  NEED CORRECT 
│   ├── FormField.tsx          =>  NEED CORRECT 
│ 
├── .gitignore
├── app.json
├── declaration.d.ts
├── package-lock.json           # Dependencies of main project
├── package.json                # Dependencies of main project
└── tsconfig.json

```