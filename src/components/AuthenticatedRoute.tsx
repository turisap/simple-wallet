import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

export const AuthenticatedRoute: FC = (props) => {
  const { connected } = useWallet();
  const navigate = useNavigate();

  if (!connected) {
    navigate("/");
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
