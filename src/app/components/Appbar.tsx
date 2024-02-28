import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-blue-100 to-blue-200 shadow">
      <SigninButton />
    </header>
  );
};

export default Appbar;