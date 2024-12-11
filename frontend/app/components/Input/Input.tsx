"use client";

import { cn } from "@/app/utils/Cn";
import { EyeClosed, Eye } from "lucide-react";
import { useState } from "react";

type InputProps = {
  type?: string;
};

const Input = ({
  title = "",
  isTitle = true,
  type = "text",
  disabled = false,
  placeholder = "",
  inputClassName = "",
  labelClassName = "",
  error = {
    error: false,
    message: "",
  },
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {isTitle && (
        <label className={cn("text-primary-dark block mb-2", labelClassName)}>
          {title}
        </label>
      )}

      <div className="flex">
        <input
          type={type === "password" && showPassword ? "text" : type}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "bg-primary-dark p-2 h-12 rounded-sm  focus:outline-primary w-full",
            inputClassName,
            {
              "bg-rose-200 text-red-500 outline-dashed outline-red-500":
                error.error,
            }
          )}
        />

        {type === "password" && (
          <div
            className="flex items-center justify-center h-12 w-12 bg-primary-dark border-l rounded-r-sm border-primary-light text-primary-light hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye size={25} strokeWidth={2} />
            ) : (
              <EyeClosed size={25} strokeWidth={2} />
            )}
          </div>
        )}
      </div>
      {error.error && (
        <label className={cn("text-error block text-right text-sm")}>
          {error.message}
        </label>
      )}
    </div>
  );
};

export default Input;
