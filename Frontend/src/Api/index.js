import axios from "axios";
const BaseUrl = "http://localhost:3000/api";

export const handelSignup = async (values) => {
  const res = await axios.post(`${BaseUrl}/auth/signup`, values);
  console.log(res)
  return res;
};

export const getAllOrganization = async () => {
  return await fetchAPI("/organization/get-organization");
};

export const getOrganizationById = async (id) => {
  return await fetchAPI(`/organization/get/${id}`);
};

export const updateOrganizationStatus = async (values) => {
  const res = await fetchAPI(`/organization/update-status/${values.id}`, {
    method: "PUT",
    body: values,
  });
  revalidatePath("/dashboard/organization");
  return res;
};

export const updateOrganizationById = async (values) => {
  const res = await fetchAPI(
    `/organization/update-organization/${values?.org_id}`,
    {
      method: "PUT",
      body: values,
    }
  );

  revalidatePath("/dashboard/organization");
  revalidatePath("/dashboard/organization/" + values?.org_id + "/edit");
  return res;
};

export const deleteOrganization = async (id) => {
  const res = await fetchAPI("/organization/delete-organization/" + id, {
    method: "DELETE",
  });
  revalidatePath("/dashboard/organization");
  return res;
};
