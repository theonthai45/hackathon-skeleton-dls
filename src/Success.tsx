import {
  DivaCard,
  DivaIconButton,
  Iconography,
  Typography,
} from "@diva_changi/changi-diva-dls";
import "./App.scss";
import CAGLogo from './assets/cag-logo.png';
import CAGBG from './assets/cagbg.png';

interface SuccessProps {
  firstName: string;
  lastName: string
}

function SuccessPage(
  props: SuccessProps
) {
  return (
    <main className="successpage">
      <div className="cag-bg">
        <img src={CAGLogo} alt="CAG" width="96" className="cag-logo" />
        <Typography
          component="h6"
          style="bold"
          variant="small-text"
          classname="caption"
        >
          Assistance Service on Arrival
        </Typography>
      </div>
      <div className="ins-container">
        <DivaIconButton
          aria-label="check"
          size="medium"
          variant="primary"
          rounded={true}
          className="tick-icon"
        >
          <Iconography
            fontSize={64}
            iconName="core-checkbox-check-solid"
          />
        </DivaIconButton>
        <div className="ins-caption">
          <Typography
            component="h5"
            style="bold"
            variant="h5"
            classname="paragraph"
          >
            You have successfully submitted your application
          </Typography>
          <Typography
            component="h6"
            style="normal"
            variant="l-body"
            classname="paragraph"
          >
            A copy of your application has been sent to your email. If you have any issue when landed, you can reach out to us through the contact information in the email. 
          </Typography>
          <Typography
            component="h6"
            style="normal"
            variant="l-body"
          >
            We shall see you when you arrive at your gate!
          </Typography>
        </div>
      </div>
      <div>
        <DivaCard classname="success-card">
          <div className="detail-container">
            <Typography
              component="h6"
              style="bold"
              variant="h6"
            >
              Assisted Traveller Detail
            </Typography>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                First Name
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Ansel
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Last Name
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Wei
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Type of assistance required
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Wheelchair
              </Typography>
            </div>
          </div>
          <div className="detail-container">
            <Typography
              component="h6"
              style="bold"
              variant="h6"
            >
              Your Detail
            </Typography>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                First Name
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Aaron
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Last Name
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Gabriel
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Phone Number
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                +65 9191 1919
              </Typography>
            </div>
          </div>
          <div>
            <Typography
              component="h6"
              style="bold"
              variant="h6"
            >
              Flight Detail
            </Typography>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Flight No.
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                SQ 335
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Arrival Date
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                23 Mar 2024
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Arrival Time
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                12:30PM
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Terminal
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                Terminal 1
              </Typography>
            </div>
            <div className="field-container">
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
                classname="subheader"
              >
                Gate
              </Typography>
              <Typography
                component="h6"
                style="normal"
                variant="s-body"
              >
                12
              </Typography>
            </div>
          </div>
          
        </DivaCard>

      </div>
        
    </main>
  );
}

export default SuccessPage;
