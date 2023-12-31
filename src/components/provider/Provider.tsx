"use client";

import URLModal from "@/app/wish/create/_components/URLModal";
import NiceModal from "@ebay/nice-modal-react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  NiceModal.register("URLModal", URLModal);
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
};

export default Provider;
