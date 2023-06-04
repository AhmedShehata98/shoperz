import { ChangeEvent, useState } from "react";

const useFormData = (initialstate: any) => {
  const [formData, setFormData] = useState(initialstate);

  const handleInputFormData = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const id = event.target.id;
    const value = event.target.value;
    if (name === "") {
      setFormData((prevData: any) => ({ ...prevData, [id]: value }));
    } else {
      setFormData((prevData: any) => ({ ...prevData, [name]: value }));
    }
    if (event.target.type === "checkbox") {
      const value = event.target?.checked;
      setFormData((prevData: any) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFormDataManually = (data: any) => {
    setFormData(data);
  };

  return { formData, handleInputFormData, handleFormDataManually };
};
export default useFormData;
