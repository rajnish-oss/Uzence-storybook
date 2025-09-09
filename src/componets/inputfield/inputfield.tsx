import React, { useState } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  clearable?: boolean;
  loading?: boolean;
  theme?: 'light' | 'dark';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable,
  loading,
  theme = 'light',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  // Size-based classes
  const sizeClasses =
    size === 'sm'
      ? 'text-sm h-8 px-2 pr-8'
      : size === 'lg'
      ? 'text-lg h-12 px-4 pr-10'
      : 'text-base h-10 px-3 pr-9';

  // Variant classes
  const variantClasses =
    variant === 'filled'
      ? `border ${
          theme === 'dark' ? 'border-zinc-600 bg-zinc-700' : 'border-zinc-200 bg-zinc-100'
        } focus:ring focus:ring-blue-400`
      : variant === 'ghost'
      ? 'border-transparent bg-transparent focus:ring focus:ring-blue-400'
      : `border ${
          theme === 'dark' ? 'border-zinc-600 bg-zinc-800' : 'border-zinc-300 bg-white'
        } focus:ring focus:ring-blue-400`;

  // Theme text & placeholder
  const themeClasses =
    theme === 'dark'
      ? 'text-white placeholder-zinc-400'
      : 'text-black placeholder-zinc-500';

  // Button hover classes
  const buttonClasses = `absolute right-2 text-zinc-500 ${
    theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
  }`;

  return (
    <div
      className={`flex flex-col space-y-1 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label && (
        <label
          className={`font-semibold text-sm ${
            theme === 'dark' ? 'text-zinc-500' : 'text-zinc-800'
          }`}
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          type={isPassword && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-xl outline-none transition-all duration-200 ease-in-out
            shadow-sm focus:shadow-md
            ${sizeClasses} ${variantClasses} ${themeClasses}
            ${
              invalid
                ? 'border-red-500 focus:border-red-500 focus:ring-red-300'
                : theme === 'dark'
                ? 'focus:border-blue-400 focus:ring-blue-500'
                : 'focus:border-blue-500 focus:ring-blue-300'
            }
          `}
        />

        {loading && <Loader2 className={buttonClasses + ' animate-spin'} size={18} />}

        {clearable && value && !isPassword && !loading && (
          <button
            type="button"
            onClick={() =>
              onChange?.({
                target: { value: '' },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className={buttonClasses}
          >
            <X size={18} />
          </button>
        )}

        {isPassword && !loading && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={buttonClasses}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {invalid && errorMessage ? (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      ) : helperText ? (
        <p
          className={`text-xs mt-1 ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
