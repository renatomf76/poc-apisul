import { useState } from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import styles from "./splitPane.module.css";
import { Content } from "./content";
import { TableLeft } from "./tableLeft";

export const SplitPane = (): JSX.Element => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ position: "absolute", top: 12, right: 68 }}>
          <button
            onClick={() => {
              setVisible((visible) => !visible);
            }}
            className="bg-transparent text-white font-bold py-2 px-4 rounded"
          >
            {visible ? "Esconder" : "Mostrar"}
          </button>
        </div>
      </div>
      <Allotment>
        <Allotment.Pane preferredSize={1500}>
          <TableLeft />
        </Allotment.Pane>
        <Allotment.Pane minSize={300} visible={visible}>
          <Content />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};
