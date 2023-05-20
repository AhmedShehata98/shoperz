import React from "react";

type Props = {
  title: string;
};
function ProfileSettings({ title }: Props) {
  return (
    <article className="porfile-setting">
      <h3 className="text-xl capitalize text-Grey-800 font-semibold mb-3 mt-4">
        {title}
      </h3>
      <div className="profile-setting-wrapper">
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
            <form className="settings-input-form">
              <span className="input-field-wrapper">
                <label
                  htmlFor="fullname"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="full name"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper">
                <label
                  htmlFor="phone-number"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  phone number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="phone number"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper">
                <button className="max-lg:w-full bg-Primary-700 text-white rounded shadow-md px-6 py-1 hover:bg-Primary-600 mt-5 self-center">
                  save
                </button>
              </span>
            </form>
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
            <form className="settings-input-form">
              <span className="input-field-wrapper">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  e-mail address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  id="email"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper">
                <button className="max-lg:w-full bg-Primary-700 text-white rounded shadow-md px-6 py-1 hover:bg-Primary-600 mt-5 self-center">
                  save
                </button>
              </span>
            </form>
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
            <form className="settings-input-form">
              <span className="input-field-wrapper">
                <label
                  htmlFor="current-password"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  current password
                </label>
                <input
                  type="current-password"
                  name="current-password"
                  placeholder="example@email.com"
                  id="current-password"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper mt-3">
                <label
                  htmlFor="new-password"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  new password
                </label>
                <input
                  type="new-password"
                  name="new-password"
                  placeholder="example@email.com"
                  id="new-password"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper mt-3">
                <label
                  htmlFor="confirm-password"
                  className="text-sm font-medium text-Grey-700 capitalize"
                >
                  confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  placeholder="example@email.com"
                  id="confirm-password"
                  className="custom-input-field"
                />
              </span>
              <span className="input-field-wrapper mt-4">
                <button className="max-lg:w-full bg-Primary-700 text-white rounded shadow-md px-6 py-1 hover:bg-Primary-600 mt-5 self-center">
                  save
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProfileSettings;
