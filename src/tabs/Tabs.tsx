import React, { createContext, useContext, useState } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs must be used inside <Tabs>");
  }
  return context;
};

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};
