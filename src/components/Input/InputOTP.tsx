import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const style = StyleSheet.create({
  TextInputHidden: {
    position: 'absolute',
    opacity: 0,
  },
});

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const SplitBoxes = styled.View`
  border-radius: 5px;
  min-width: 48px;
  padding: 12px;
  background-color: #f2f4f7;
`;

export const SplitBoxText = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: DB Heavent;
  color: #475467;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
  background-color: grey;
`;

interface InputOTPProps {
  code?: string;
  setCode?: (text: string) => void;
  maximumLength?: number;
  setIsPinReady?: (val: boolean) => void;
}

const InputOTP: FunctionComponent<InputOTPProps> = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady && setIsPinReady(code?.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady && setIsPinReady(false);
    };
  }, [code]);
  const boxDigit = (_: any, index: number) => {
    const emptyInput = '';
    const digit = code?.[index] || emptyInput;

    const isCurrentValue = index === code?.length;
    const isLastValue = index === maximumLength && maximumLength - 1;
    const isCodeComplete = code?.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </SplitOTPBoxesContainer>
      <TextInput
        style={style.TextInputHidden}
        onChangeText={setCode}
        value={code}
        maxLength={maximumLength}
        onBlur={handleOnBlur}
        ref={inputRef}
      />
      {/* <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        onBlur={handleOnBlur}
      /> */}
    </OTPInputContainer>
  );
};

InputOTP.defaultProps = {
  code: '',
  maximumLength: 0,
  setCode: () => {},
  setIsPinReady: () => {},
};

export default InputOTP;
