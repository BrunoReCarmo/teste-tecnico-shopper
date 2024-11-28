import * as React from 'react';
import inputMask, { MaskTypes } from '../../lib/mask';
import { Input } from "./input"

type InputMaskProps = React.InputHTMLAttributes<HTMLInputElement> & {
  maskType?: MaskTypes;
};

function InputMask({ maskType, onChange, ...props }: InputMaskProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (maskType) {
      const mask = inputMask[maskType];
      event.currentTarget.value = mask(event);
    }

    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  return <Input {...props} type="text" onChange={handleChange} />;
}

export default InputMask;