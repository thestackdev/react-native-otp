<h1 align="center">
  React Native OTP
</h1>

<div style="display:flex;justify-content:space-evenly;align-items:center">

![](assets/Simulator%20Screenshot%20-%20iPhone%2015%20Pro%20-%202024-04-27%20at%2013.38.28.png)

</div>

<h4>Light Weight and <b>Robust</b> Splitted Text Input.</h4>

- Design split OTP component of your choice
- Pass number of OTP digits by your choice
- Fully Customizable by props
- Very Easy to use
- Make your apps professional in UI/UX

# Compatibility

| iOS | Android | Expo |
| --- | ------- | ---- |
| ✅  | ✅      | ✅   |

# 🔌 Installation

```sh
$ npm install react-native-text-input-otp

```

OR

```sh
$ yarn add react-native-text-input-otp
```

# 😎 Displaying the otp input

All you need is to just import the otp text input component and then pass the
required props to display the splitted otp text input as shown in the code snippet below:

```jsx
import OtpTextInput from "react-native-text-input-otp";

const App = () => {
  const [otp, setOtp] = React.useState("");

  return <OtpTextInput otp={otp} setOtp={setOtp} digits={5} />;
};
```

# ⭐ Props for the component

| Name               | Type                | Reuired | Description                     |
| ------------------ | ------------------- | ------- | ------------------------------- |
| otp                | state variable      | Yes     | State variable to store the otp |
| setOtp             | state update method | Yes     | Method to update state variable |
| digits             | numeric             | Yes     | No of otp split fields          |
| style              | style object        | No      | Style of the input fields       |
| fontStyle          | style object        | No      | Style of font in input fields   |
| focusedStyle       | style object        | No      | Style of field when in focus    |
| keyboardAppearance | string              | No      | Keyboard Appearance Style       |
