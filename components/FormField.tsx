//React Hook Form is a lightweight and performant library for building and managing forms in React. It uses React hooks to simplify form handling, reduce boilerplate code, and improve performance.

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, Field, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

// Define the props for the FormField component using generics for type safety
const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <div>
      {/* Use Controller to connect the input field with React Hook Form */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
              {/* field -- Provides all the props needed for React Hook Form to manage this input.*/}
              <Input
                className="input"
                placeholder={placeholder}
                {...field}
                type={type}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormField;
