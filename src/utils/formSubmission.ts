const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyRBE1wEhTMJ7sQswte30B04WespNN0ZknFoQonhzDRdVns7c54Z3sToGdHk1dy0hYe/exec";

export const submitLeadForm = async (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) => {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "lead",
        ...data,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error("Lead form submission error:", error);
    throw error;
  }
};

export const submitBrochureForm = async (data: {
  name: string;
  phone: string;
  email: string;
}) => {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "brochure",
        ...data,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error("Brochure form submission error:", error);
    throw error;
  }
};
