import {
  DivaInputField,
  Typography,
} from "@diva_changi/changi-diva-dls";
import "./App.scss";

interface SuccessProps {
  firstName: string;
  lastName: string
}

function SuccessForm(
  props: SuccessProps
) {
  return (
    <main className="successpage">
      <div>
        <Typography variant="h4">Registration form</Typography>
        <form onSubmit={handleSubmit}>
        <DivaInputField
          label="First name"
          name="firstName"
          placeholder="Tadej"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <DivaInputField
          label="Last name"
          name="lastName"
          placeholder="Pogačar"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <DivaRadioGroup
          name="gender"
          label="Gender"
          onChange={handleInputChange}
          row
          value={formData.gender}
          options={[
            {
              label: 'Male',
              radioProps: {
                value: 'M',
              },
            },
            {
              label: 'Female',
              radioProps: {
                value: 'F',
              },
            },
            {
              label: 'Other',
              radioProps: {
                value: 'O',
              },
            },
          ]}
        />

        <DivaFormFieldWrapper
          label="The best programming language is..."
          component={
            <DivaDropdown
              options={[
                {
                  label: 'Python',
                  value: 'python',
                },
                {
                  label: 'Typescript',
                  value: 'typescript',
                },
                {
                  label: 'Rust',
                  value: 'rust',
                },
                {
                  label: 'Java',
                  value: 'java',
                },
                {
                  label: 'Swift',
                  value: 'swift',
                },
              ]}
              placeholder="C#"
              name="favouriteGame"
              value={formData.favouriteGame}
              handleChange={handleInputChange}
            />
          }
        />

        <DivaFormControlLabel
          control={
            <DivaCheckbox
              name="appreciateDLS"
              onChange={handleInputChange}
              checked={formData.appreciateDLS}
            />
          }
          label="I appreciate design language systems."
        />

        <DivaButton
          type="submit"
          variant="primary"
          onClick={() => console.log('submitting form')}
        >
          Submit
        </DivaButton>
      </form>
    </div>
    </main>
  );
}

export default SuccessForm;
