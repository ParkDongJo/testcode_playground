import { useEffect, useRef, useState } from "react";

const TAB_LIST = [
  {
    tab: "경제",
    tabPanel: <EconomyContent />,
  },
  {
    tab: "과학",
    tabPanel: <ScienceContent />,
  },
  {
    tab: "스포츠",
    tabPanel: <SportsContent />,
  },
];

function Tab() {
  const tablistRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const tablistElement = tablistRef.current;
    const tabElements = tablistElement.childNodes;
    const lastIndex = tabElements.length - 1;

    /* targetIndex에 해당하는 tab으로 초점 이동 */
    const focusToTab = (targetIndex) => {
      const targetTab = tabElements[targetIndex];
      setFocusedIndex(targetIndex);

      targetTab.focus();
    };

    /* 10. 초점 이동 처리 */
    const moveFocus = (event) => {

      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault();

          const prevIndex = focusedIndex - 1 < 0 ? lastIndex : focusedIndex - 1;

          focusToTab(prevIndex);
          break;

        case "ArrowRight":
          event.preventDefault();

          const nextIndex = focusedIndex + 1 > lastIndex ? 0 : focusedIndex + 1;

          focusToTab(nextIndex);
          break;

        case "Home":
          event.preventDefault();

          focusToTab(0);
          break;

        case "End":
          event.preventDefault();

          focusToTab(lastIndex);
          break;
      }
    };

    tablistElement.addEventListener("keydown", moveFocus);

    return () => {
      tablistElement.removeEventListener("keydown", moveFocus);
    };
  }, [focusedIndex]);

  return (
    <>
      <strong id="tablist-title-id">
        뉴스
      </strong>
      <div
        ref={tablistRef}
        role="tablist"
        aria-labelledby="tablist-title-id"
        aria-orientation="horizontal"
      >
        {TAB_LIST.map(({ tab }, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={index}
              type="button"
              role="tab"
              id={`tab-${index}-id`}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${index}-id`}
              onClick={() => setSelectedIndex(index)}
              tabIndex={isSelected ? 0 : -1}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${selectedIndex}-id`}
        aria-labelledby={`tab-${selectedIndex}-id`}
        tabIndex={0}
      >
        {TAB_LIST[selectedIndex].tabPanel}
      </div>
    </>
  );
}

export default Tab;

function EconomyContent() {
  return <div>경제 콘텐츠</div>;
}

function ScienceContent() {
  return <div>과학 콘텐츠</div>;
}

function SportsContent() {
  return <div>스포츠 콘텐츠</div>;
}