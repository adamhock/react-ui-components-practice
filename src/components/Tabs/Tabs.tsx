import React, { useState, ReactNode } from 'react';
import './Tabs.css';
type TabData = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabData[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabItems, setTabItems] = useState(tabs);

  function removeTab(i: number): void {
    const newTabs = [...tabItems];
    newTabs.splice(i, 1);
    if (activeIndex >= newTabs.length) {
      setActiveIndex(newTabs.length - 1);
    } else if (i === activeIndex) {
      setActiveIndex(i);
    }
    setTabItems(newTabs);
  }

  return (
    <div>
      <div className='tab-container'>
        {tabItems.map((tab, i) => (
          <div key={i} className={`tab ${i === activeIndex ? 'active' : ''}`}>
            <div
              onClick={() => setActiveIndex(i) }
              className={'tab-label'}
            >
              {tab.label}
            </div>
            <span 
              className='close-button'
              onClick={() => removeTab(i)}>x</span>
          </div>
        ))}
      </div>
      <div className='tab-content'>
        {tabItems.length === 0 ? <div>No tabs</div> : tabItems[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;