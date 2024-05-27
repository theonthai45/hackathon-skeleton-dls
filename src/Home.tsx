import {
  DivaButton,
  DivaDropdown,
  DivaFormFieldWrapper,
  DivaInputField,
  Typography,
} from "@diva_changi/changi-diva-dls";

export default function Home() {
  return (
    <main className="homepage">
      <Typography variant="h4">Assisted Traveller Detail</Typography>
      <div className="flex flex-col gap-3">
        <DivaInputField
          label="First name"
          name="firstName"
          placeholder="John"
          value={null}
          onChange={() => {}}
        />

        <DivaInputField
          label="Last name"
          name="lastname"
          placeholder="Doe"
          value={null}
          onChange={() => {}}
        />

        <DivaFormFieldWrapper
          label="Assistance Required"
          component={
            <DivaDropdown
              options={[
                {
                  label: "Wheelchair",
                  value: "Wheelchair",
                },
              ]}
              placeholder="Wheelchair"
              name="assistanceRequired"
              value={""}
              handleChange={() => {}}
            />
          }
        />

        <div className="h-6 justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="text-purple-800 text-base font-bold font-['Lato'] leading-tight">
            Add More Passenger
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-[295px] h-6 text-neutral-800 text-lg font-bold font-['Lato'] leading-snug">
          Your Detail
        </div>
        <div className="w-[327px] text-zinc-700 text-sm font-normal font-['Lato'] leading-[18px]">
          We will notify you via SMS once we have picked up the assisted
          traveller(s) at the arrival gate.
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <DivaInputField
          label="First name"
          name="firstName"
          placeholder="John"
          value={null}
          onChange={() => {}}
        />

        <DivaInputField
          label="Last name"
          name="lastname"
          placeholder="Doe"
          value={null}
          onChange={() => {}}
        />

        <DivaInputField
          label="Phone Number"
          name="phoneNumber"
          placeholder="+65"
          value={null}
          onChange={() => {}}
        />

        <DivaButton
          type="submit"
          variant="primary"
          onClick={() => console.log("submitting form")}
        >
          Next
        </DivaButton>
      </div>
    </main>
  );
}
