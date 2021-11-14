import Google from "./Google";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Github from "./Github";

function Social() {
  return (
    <div className="social-links-container">
      <Google />
      <Facebook />
      <Twitter />
      <Github />
    </div>
  );
}

export default Social;
