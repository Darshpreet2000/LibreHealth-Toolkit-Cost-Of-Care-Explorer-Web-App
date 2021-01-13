import React from "react";
import ChargemasterItem from "./ChargemasterItem";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { WindowScroller } from "react-virtualized";
function ChargeMasterList(props) {
  const listOfData = props.listOfData;

   const cache =
   new CellMeasurerCache({
      fixedWidth:true,
     defaultHeight: 50,
  })
  
  let renderRow = ({ index, key, style, parent, registerChild }) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ registerChild }) => (
          <div ref={registerChild} style={style}>
            <div style={{ margin: "4px" }}>
              <ChargemasterItem object={listOfData[index]} />
            </div>
          </div>
        )}
      </CellMeasurer>
    );
  };
  return (
    <div>
      {listOfData.length === 0 && (
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            textAlign: "center",
            padding: "10px",
          }}
        >
          We could not find results matching your requirement. Try changing
          filter or search query
        </h3>
      )}

      <div style={{ margin: "8px" }}>
        <WindowScroller>
          {({ height, scrollTop, registerChild }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <div ref={registerChild}>
                  <List
                    style={{ outline: "none" }}
                    autoHeight
                    height={height}
                    width={width}
                    scrollTop={scrollTop}
                    rowHeight={cache.rowHeight}
                    deferredMeasurementCache={cache}
                    rowRenderer={renderRow}
                    rowCount={listOfData.length}
                    overscanRowCount={10}
                  />
                </div>
              )}
            </AutoSizer>
          )}
        </WindowScroller>
        {/* */}
      </div>
    </div>
  );
}

export default ChargeMasterList;
