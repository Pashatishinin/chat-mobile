# Welcome to Lastivka app 👋

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
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo. This is option to check this app on your phone



*After running, you will see QR code, if you want to check app from your phone, and you already installed Expo Go App, you should just scan this QR code, and this app automaticaly will open on your phone


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
│   │   ├── reset-password.tsx    ✅ Page where you can enter your new password 
│   │   ├── fullname.tsx          ✅ Page where user add their fullname 
│   │   ├── add-email.tsx         ✅ Page where user add their email for registration
│   │   ├── signin.tsx            ✅ Sign in page
│   │   ├── signup.tsx            ✅ Sign Up page
│   │   ├── reset.tsx             ✅ Reset Password page
│   │   ├── confirm-otp.tsx       ✅ Confirm OTP for Reset Password
│   │   └── verify-otp.tsx        ✅ Page where user should add OTP verify code 
│   ├── (tab)/           
│   │   ├── _layout.tsx
│   │   ├── settings.tsx          ✅ Settings page
│   │   ├── 
│   │   └── 
│   ├── message/
│   │   └── 
│   ├── (profile-settings)/
│   │   ├── _layout.tsx
│   │   ├── profile-edit.tsx      ✅ Profile edit page
│   ├── _layout.tsx       
│   ├── home.tsx               ✅ First page after Splash screen
│   └── index.tsx              ✅ Splash screen
│  
├── components/
│   ├── components/
│   │   ├── LogOut.tsx                  🛠️ NEED CORRECT 
│   │   ├── NavigateButton.tsx          🛠️ NEED CORRECT 
│   │   └── SettingSwitcher.tsx         🛠️ NEED CORRECT 
│   │
│   ├── HomeBotton.tsx         ✅ Bottom part for home page
│   ├── CustomButton.tsx       🛠️ NEED CORRECT 
│   ├── FormField.tsx          🛠️ NEED CORRECT 
│ 
├── .gitignore
├── app.json
├── declaration.d.ts
├── package-lock.json           # Dependencies of main project
├── package.json                # Dependencies of main project
└── tsconfig.json
```





