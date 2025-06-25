import { BrowserRouter, Routes, Route } from "react-router-dom";
import InpView from "./components/inp-view";

import BasicBad from "./pages/render/basic-bad";
import BasicGood from "./pages/render/basic-good";
import SpinBad from "./pages/render/spin-bad";
import SpinGood from "./pages/render/spin-good";
import ParentBad from "./pages/render/parent-bad";
import ParentGood from "./pages/render/parent-good";
import ClickSetStateBad from "./pages/render/click-set-state-bad";
import ClickSetStateGood from "./pages/render/click-set-state-good";
import CombineStoreBad from "./pages/render/combine-store-bad";

import EllipsisBad from "./pages/mix-read-write/ellipsis-bad";
import EllipsisGood from "./pages/mix-read-write/ellipsis-good";

import ExpandBad from "./pages/next-frame/expand-bad";
import ExpandGood from "./pages/next-frame/expand-good";
import TabChangeCacheBad from "./pages/next-frame/tab-change-cache-bad";
import TabChangeCacheGood from "./pages/next-frame/tab-change-cache-good";
import SelectedBad from "./pages/next-frame/selected-bad";
import SelectedGood from "./pages/next-frame/selected-good";

import ExpandParseBad from "./pages/long-task/expand-parse-bad";
import ExpandParseGood from "./pages/long-task/expand-parse-good";

import LazyloadListBad from "./pages/cut-down-dom/lazyload-list-bad";
import LazyloadListGood from "./pages/cut-down-dom/lazyload-list-good";

function App() {
  return (
    <div>
      <InpView />
      <BrowserRouter basename="/INP_DEMO">
        <Routes>
          <Route path="/render/basic-bad" element={<BasicBad />} />
          <Route path="/render/basic-good" element={<BasicGood />} />
          <Route path="/render/spin-bad" element={<SpinBad />} />
          <Route path="/render/spin-good" element={<SpinGood />} />
          <Route path="/render/parent-bad" element={<ParentBad />} />
          <Route path="/render/parent-good" element={<ParentGood />} />
          <Route
            path="/render/click-set-state-bad"
            element={<ClickSetStateBad />}
          />
          <Route
            path="/render/click-set-state-good"
            element={<ClickSetStateGood />}
          />
          <Route
            path="/render/combine-store-bad"
            element={<CombineStoreBad />}
          />
          <Route
            path="/mix-read-write/ellipsis-bad"
            element={<EllipsisBad />}
          />
          <Route
            path="/mix-read-write/ellipsis-good"
            element={<EllipsisGood />}
          />
          <Route path="/next-frame/expand-bad" element={<ExpandBad />} />
          <Route path="/next-frame/expand-good" element={<ExpandGood />} />
          <Route
            path="/next-frame/tab-change-cache-bad"
            element={<TabChangeCacheBad />}
          />
          <Route
            path="/next-frame/tab-change-cache-good"
            element={<TabChangeCacheGood />}
          />
          <Route path="/next-frame/selected-bad" element={<SelectedBad />} />
          <Route path="/next-frame/selected-good" element={<SelectedGood />} />

          <Route
            path="/long-task/expand-parse-bad"
            element={<ExpandParseBad />}
          />
          <Route
            path="/long-task/expand-parse-good"
            element={<ExpandParseGood />}
          />

          <Route
            path="/cut-down-dom/lazyload-list-bad"
            element={<LazyloadListBad />}
          />
          <Route
            path="/cut-down-dom/lazyload-list-good"
            element={<LazyloadListGood />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
