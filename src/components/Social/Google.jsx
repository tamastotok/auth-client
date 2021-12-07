import { GoogleLogin } from 'react-google-login';

export default function Google() {
  const googleSuccess = async (res) => {
    //console.log(res);
  };

  const googleFailure = (error) => {
    //console.log(error);
  };

  return (
    <>
      <GoogleLogin
        clientId="GOOGLE ID"
        render={(renderProps) => (
          <button
            className="social-button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="21.8826" cy="21.5981" r="20.5" stroke="#828282" />
              <path
                d="M21.91 15.8883C23.7953 15.8883 25.5006 16.8557 26.478 18.1887L28.7945 15.8556C27.409 14.054 24.7425 12.6255 21.91 12.6255C16.9505 12.6255 12.8828 16.6388 12.8828 21.5983C12.8828 26.5578 16.9505 30.5711 21.91 30.5711C26.0213 30.5711 29.4797 27.8141 30.5402 24.0454C30.7685 23.2622 30.8828 22.4465 30.8828 21.5983V20.7826H22.7257V24.0448H27.049C26.1517 25.97 24.1776 27.3083 21.91 27.3083C18.7614 27.3083 16.1457 24.7469 16.1457 21.5983C16.1457 18.4497 18.7614 15.8883 21.91 15.8883Z"
                fill="#828282"
              />
            </svg>
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </>
  );
}
