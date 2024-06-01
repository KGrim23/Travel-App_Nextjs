import Image from "next/image";
import CustomFormDropdown from "./Components/CustomFormButton"; // Import the HeadlessUIButton component

const Step5: React.FC = () => {
  return (
    <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
      <h1 className="flex font-semibold text-2xl">
        Your mentor account has been created!
      </h1>
      <p className="font-bold">
        Now, link your Google calendar to stay organised.
      </p>
      <p className="pb-5">
        Once connected, your profile will be visible on our Explore page as soon
        as your mentor application is approved.
      </p>
      <p className="pb-5">
        Remember, your account also needs to be verified by filling in the
        mentor verification form available on your dashboard.
      </p>

      <div className="space-y-5">
        <div className="flex flex-row space-x-5">
          <Image
            src="/images/calendar.svg"
            alt="calander"
            width={65}
            height={65}
          />
          <p>
            View all your upcoming sessions in one place. Easily manage your
            time and avoid double-booking.
          </p>
        </div>

        <div className="flex flex-row space-x-5">
          <Image src="/images/sync.svg" alt="calander" width={50} height={50} />
          <p>
            Changes automatically sync with your calendar, keeping you
            up-to-date without manual adjustments.
          </p>
        </div>

        <div className="flex flex-row space-x-5">
          <Image
            src="/images/notification.svg"
            alt="calander"
            width={50}
            height={50}
          />
          <p>
            Receive instant notifications for any schedule changes or updates,
            ensuring you’re always informed.
          </p>
        </div>
      </div>

      <div className="py-8 space-y-6 w-full">
        <div className="flex flex-col py-8 space-y-2">
          {/* Use the HeadlessUIButton component with text and optional onClick function */}

          <CustomFormDropdown
            ButtonText="Connect Google Calendar"
            border="black"
            text={"We respect your privacy."}
          />
          <CustomFormDropdown
            ButtonText="Availability Setting"
            border="black"
            text={"Monday"}
          />
          <CustomFormDropdown
            ButtonText="Personalised Session"
            border="black"
            text={
              "Specify the minimum number of hours you need before accepting a session request. The platform will notify you of new booking requests, which you can manually approve."
            }
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <button className="py-2 px-8 text-black border-2 border-black rounded flex items-center">
            Skip
          </button>
          <button className="py-2 px-8 bg-black text-white rounded flex items-center">
            Complete Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
