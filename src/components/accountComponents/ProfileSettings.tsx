import CustomButton from "@/components/CustomButton";
import FormInputWrapper from "@/components/FormInputWrapper";
import InputField from "@/components/InputField";
import useFormData from "@/hooks/useFormData";
import useGetToken from "@/hooks/useGetToken";
import {
  useChangeCurrentPasswordMutation,
  useUserDataQuery,
} from "@/services/shoperzApi.service";
import React from "react";

type Props = {
  title: string;
};

function ProfileSettings({ title }: Props) {
  const { token } = useGetToken();
  const {
    isLoading: loadingUserData,
    data: userData,
    isSuccess: isSuccessGetUsrData,
  } = useUserDataQuery(token, { skip: !Boolean(token) });

  const { formData, handleInputFormData, handleFormDataManually } = useFormData(
    {
      fullname: "",
      phone: "",
      email: "",
      "current-password": "",
      "new-password": "",
      "confirm-password": "",
    }
  );
  const [fetchChangePassword, chpwdResponse] =
    useChangeCurrentPasswordMutation();

  async function handleChangePassword({
    currentPassword,
    newPassword,
    newPasswordRepeat,
  }: ChangeUserPassword) {
    const res = await fetchChangePassword({
      currentPassword,
      newPassword,
      newPasswordRepeat,
    }).unwrap();
  }
  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);

    handleChangePassword({
      currentPassword: data.get("current-password") as string,
      newPassword: data.get("new-password") as string,
      newPasswordRepeat: data.get("confirm-password") as string,
    });
  }

  React.useEffect(() => {
    if (!loadingUserData && isSuccessGetUsrData) {
      handleFormDataManually({
        fullname: userData?.data.user.fullname,
        phone: userData?.data.user.phone,
        email: userData?.data.user.email,
      });
    }
  }, [loadingUserData, isSuccessGetUsrData]);

  return (
    <article className="porfile-setting">
      <h3 className="text-xl capitalize text-Grey-800 font-semibold mb-3 mt-4">
        {title}
      </h3>
      <form
        action=""
        className="profile-setting-wrapper"
        onSubmit={handleSubmit}
      >
        <div className="setting-section">
          <h4 className="block w-full capitalize text-Grey-700 font-medium border-b border-Grey-400 pt-3 pb-3">
            profile information
          </h4>
          <div className="w-full flex max-lg:flex-col items-start gap-4 mt-3">
            <span className="w-full lg:basis-2/5 block mt-2 mb-6">
              <small className="text-Grey-600 font-bold">
                assertive utilize adaptive customer service for future-proof
                platforms completely drive optimal markets .
              </small>
            </span>
            <div className="settings-input-form">
              {loadingUserData ? (
                <SkeletonLoadingForm />
              ) : (
                <>
                  <FormInputWrapper dir="col">
                    <label
                      htmlFor="fullname"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      full name
                    </label>

                    <InputField
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="full name"
                      value={formData.fullname}
                      disabled
                      readOnly
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <FormInputWrapper dir="col">
                    <label
                      htmlFor="phone-number"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      phone number
                    </label>
                    <InputField
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="phone number"
                      value={formData.phone}
                      disabled
                      readOnly
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <span className="input-field-wrapper">
                    <CustomButton type="submit" disabled>
                      save
                    </CustomButton>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="setting-section">
          <h4 className="block w-full capitalize text-Grey-700 font-medium border-b border-Grey-400 pt-3 pb-3">
            e-mail address
          </h4>
          <div className="w-full flex max-lg:flex-col items-start gap-4 mt-3">
            <span className="block basis-2/5 mt-3 mb-6">
              <small className="text-Grey-600 font-bold">
                assertive utilize adaptive customer service for future-proof
                platforms completely drive optimal markets .
              </small>
            </span>
            <div className="settings-input-form">
              {loadingUserData ? (
                <SkeletonLoadingForm />
              ) : (
                <>
                  <FormInputWrapper dir="col" extraClassName="mb-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      e-mail address
                    </label>
                    <InputField
                      type="email"
                      name="email"
                      placeholder="example@email.com"
                      id="email"
                      value={formData.email}
                      disabled
                      readOnly
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  {/* <FormInputWrapper dir="col" extraClassName="mb-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      verify code
                    </label>
                    <InputField
                      type="text"
                      name="verify-code"
                      placeholder="enter verify code .."
                      id="verify-code"
                      value={formData["uid-code"]}
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <span>
                    <CustomButton
                      type="button"
                      onClick={() => handleVerifyEmail()}
                    >
                      {verifyResponse.isLoading ? (
                        <label className="flex items-center justify-around gap-3">
                          <span className="spinner-loading w-6 h-6 border-white"></span>
                          <small>wait a moment ..</small>
                        </label>
                      ) : (
                        "send verify"
                      )}
                    </CustomButton>
                  </span> */}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="setting-section">
          <h4 className="block w-full capitalize text-Grey-700 font-medium border-b border-Grey-400 pt-3 pb-3">
            password
          </h4>
          <div className="w-full flex max-lg:flex-col items-start gap-4 mt-3">
            <span className="block basis-2/5 mt-3 mb-6">
              <small className="text-Grey-600 font-bold">
                assertive utilize adaptive customer service for future-proof
                platforms completely drive optimal markets .
              </small>
            </span>
            <div className="settings-input-form">
              {loadingUserData ? (
                <SkeletonLoadingForm />
              ) : (
                <>
                  <FormInputWrapper dir="col">
                    <label
                      htmlFor="current-password"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      current password
                    </label>
                    <InputField
                      type="password"
                      name="current-password"
                      placeholder="example@email.com"
                      id="current-password"
                      value={formData["current-password"]}
                      autoComplete={"false"}
                      autoCapitalize="false"
                      autoCorrect="false"
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <FormInputWrapper dir="col">
                    <label
                      htmlFor="new-password"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      new password
                    </label>
                    <InputField
                      type="password"
                      name="new-password"
                      placeholder="example@email.com"
                      id="new-password"
                      value={formData["new-password"]}
                      autoComplete={"false"}
                      autoCapitalize="false"
                      autoCorrect="false"
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <FormInputWrapper dir="col">
                    <label
                      htmlFor="confirm-password"
                      className="text-sm font-medium text-Grey-700 capitalize"
                    >
                      confirm password
                    </label>
                    <InputField
                      type="password"
                      name="confirm-password"
                      placeholder="example@email.com"
                      id="confirm-password"
                      value={formData["confirm-password"]}
                      autoComplete={"false"}
                      autoCapitalize="false"
                      autoCorrect="false"
                      onChange={handleInputFormData}
                    />
                  </FormInputWrapper>
                  <span className="input-field-wrapper mt-4">
                    <CustomButton type="submit" extraClassName="bg-Danger-700">
                      {chpwdResponse.isLoading ? (
                        <label className="flex items-center justify-around gap-3">
                          <span className="spinner-loading w-6 h-6 border-white"></span>
                          <small>wait a moment ..</small>
                        </label>
                      ) : (
                        "change password"
                      )}
                    </CustomButton>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </article>
  );
}

export default ProfileSettings;

function SkeletonLoadingForm() {
  return (
    <div className="w-full flex flex-col gap-1">
      <span className="w-full h-7 bg-Grey-200 rounded-md animate-pulse mb-2"></span>
      <span className="w-full h-7 bg-Grey-200 rounded-md animate-pulse mb-4"></span>
      <span className="w-1/4 h-8 bg-Grey-200 rounded-md animate-pulse"></span>
    </div>
  );
}
