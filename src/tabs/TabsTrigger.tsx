import { useTabs } from "./Tabs";

export const TabsTrigger = ({ value }: { value: string }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 text-sm font-medium rounded-t-lg transition-all
        ${isActive
          ? "bg-white text-gray-900 shadow-md border-b-0"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300"}
      `}
    >
      Tab {value}
    </button>
  );
};
