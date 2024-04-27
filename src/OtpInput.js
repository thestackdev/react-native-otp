import { View, TextInput } from "react-native";

const OtpInput = ({
  digits,
  otpRef,
  style,
  setOtp,
  otp,
  keyboardAppearance,
  _render,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        maxLength={digits}
        ref={otpRef}
        style={style}
        onChangeText={setOtp}
        value={otp}
        keyboardType="number-pad"
        keyboardAppearance={keyboardAppearance}
      />

      {_render}
    </View>
  );
};
export default OtpInput;
