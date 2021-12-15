import { css } from "@emotion/react";
import CloseIcon from "../../Icons/Close";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setTabs, setClosedTabs } from "../../store/slices/tabs";
import { useRouter } from "next/router";

var CloseButton = ({ id, href, index, ...props }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  var tabs = useAppSelector((store) => store.tabs.tabs);
  var closedTabs = useAppSelector((store) => store.tabs.closedTabs);
  var path = router.pathname;
  var isProjects = path === "/" || path.startsWith("/projects");
  var isActive = href === "/" ? isProjects : path.startsWith(href);
  var isLastTab = index === tabs.length - 1;
  var hasOnlyOneTab = isLastTab && tabs.length === 1;

  return (
    <div
      className="closeButton"
      css={css`
        margin-left: auto;
        cursor: pointer;

        ${hasOnlyOneTab &&
        css`
          pointer-events: none;
          opacity: 0.4;
        `}
      `}
      onClick={() => {
        // Update closed tabs
        var closedTab = tabs.find((tab, i) => tab.id === id);
        var updatedClosedTabs = [...closedTabs];
        updatedClosedTabs.push(closedTab);
        dispatch(setClosedTabs(updatedClosedTabs));

        // Update tabs
        var updatedTabs = tabs.filter((tab, i) => tab.id !== id);
        dispatch(setTabs(updatedTabs));

        // If closed tab are first one, active the new first one
        if (isActive) {
          if (index === 0) {
            router.push(updatedTabs[0].href, undefined, { shallow: true });
          } else {
            // If last
            if (isLastTab) {
              // Get the previous tab to show if last
              let closedIndex = tabs.findIndex((tab, i) => tab.id === id);
              router.push(tabs[closedIndex - 1].href, undefined, {
                shallow: true,
              });
            } else {
              // Get the previous tab to show if last
              let closedIndex = tabs.findIndex((tab, i) => tab.id === id);
              router.push(updatedTabs[closedIndex].href, undefined, {
                shallow: true,
              });
            }
          }
        }
      }}
      {...props}
    >
      <CloseIcon width="10" />
    </div>
  );
};

export default CloseButton;
