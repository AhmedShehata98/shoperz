import CustomButton from "@/components/CustomButton";
import React from "react";

type Props = {
  isLoading: boolean;
  title: string;
};
export default function SubmitButton({ isLoading, title }: Props) {
  return (
    <CustomButton
      type="submit"
      extraClassName="w-full md:w-1/3 lg:w-2/5 rounded-full py-3"
    >
      {isLoading ? (
        <label className="flex items-center justify-around gap-3">
          <span className="spinner-loading w-6 h-6 border-white"></span>
          <small>wait a moment ..</small>
        </label>
      ) : (
        title
      )}
    </CustomButton>
  );
}
