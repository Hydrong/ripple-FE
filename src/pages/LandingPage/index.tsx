import { useState } from "react";
import FeedPage from "../FeedPage";
import SignUpPage from "../SignUpPage";

const LandingPage = () => {
  const [isLoggedIn] = useState(false);
  return <>{isLoggedIn ? <FeedPage /> : <SignUpPage />}</>;
};

export default LandingPage;
