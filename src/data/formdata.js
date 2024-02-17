export const fields = [
    {
      fieldName: "name",
      inputType: "text",
      label: "Name",
      defaultValue: "",
      
    },
    {
      fieldName: "age",
      inputType: "number",
      label: "Age",
      defaultValue: "",
      
    },
    {
      fieldName: "language",
      inputType: "select",
      label: "Language",
      options: [
        { value: "english", label: "English" },
        { value: "french", label: "French" }
      ],
      defaultValue: ""
    },
    {
      fieldName: "address",
      inputType: "textarea",
      label: "Address",
      defaultValue: ""
    }
  ];