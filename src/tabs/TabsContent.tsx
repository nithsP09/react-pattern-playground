import { useTabs } from "./Tabs";

export const TabsContent = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div className="mt-4 rounded-md bg-gray-50 p-6 text-sm text-gray-800 shadow-inner">
      {children}
    </div>
  );
};
