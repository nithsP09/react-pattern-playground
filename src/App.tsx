import { Tabs } from "./tabs/Tabs";
import { TabsList } from "./tabs/TabsList";
import { TabsTrigger } from "./tabs/TabsTrigger";
import { TabsContent } from "./tabs/TabsContent";

export default function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Centered Box */}
      <div className="w-80 bg-white rounded-xl shadow-lg p-6">
        <Tabs>
          <TabsList>
            <TabsTrigger value="1" />
            <TabsTrigger value="2" />
          </TabsList>

          <TabsContent value="1">
            <h3 className="mb-2 text-lg font-semibold">Tab 1 Content</h3>
            <p>This uses Compound Components</p>
          </TabsContent>

          <TabsContent value="2">
            <h3 className="mb-2 text-lg font-semibold">Tab 2 Content</h3>
            <p>Shared state via Context</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
