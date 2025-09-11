import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  ariaDescribedBy?: string;
  disabled?: boolean;
}

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  required = false,
  pattern,
  placeholder,
  ariaDescribedBy,
  disabled = false
}: FormInputProps) {
  const inputId = `${id}-input`;
  const descriptionId = `${id}-description`;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      <input
        type={type}
        id={inputId}
        name={name}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        aria-required={required}
        aria-describedby={ariaDescribedBy || (required ? descriptionId : undefined)}
        disabled={disabled}
        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {required && (
        <span id={descriptionId} className="sr-only">
          This field is required
        </span>
      )}
    </div>
  );
}