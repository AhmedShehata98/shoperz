import { ChangeEvent, useState } from "react";

const useFormData = (initialstate: any) => {
  const [formData, setFormData] = useState(initialstate);

  const handleInputFormData = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const id = target.id;
    const value = target.value;
    if (name === "") {
      setFormData((prevData: any) => ({ ...prevData, [id]: value }));
    } else {
      setFormData((prevData: any) => ({ ...prevData, [name]: value }));
    }
    if (target.type === "checkbox") {
      const value = target.checked;
      setFormData((prevData: any) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFormDataManually = (data: any) => {
    setFormData(data);
  };

  return { formData, handleInputFormData, handleFormDataManually };
};
export default useFormData;
