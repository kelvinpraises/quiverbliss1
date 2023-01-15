import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { Button } from "./Button";

const SaveChange = ({
  state,
  saveChanges,
  resetChanges,
}: {
  state: any;
  saveChanges: (state: any) => void;
  resetChanges: (state: any) => void;
}) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, [state]);

  const memoState = useMemo(() => state, []);

  const handleSave = useCallback(() => {
    saveChanges(state);
    setSaved(true);
  }, [state]);

  const handleReset = useCallback(() => {
    resetChanges(memoState);
    setSaved(true);
  }, [memoState]);

  if (JSON.stringify(state) === JSON.stringify(memoState) || saved) {
    return (
      <>
        <SBox1 visible={false}>
          <div style={{ marginRight: "1rem" }}>
            <Button warn={true} onClick={handleReset}>
              Cancel edit
            </Button>
          </div>

          <Button onClick={handleSave}>Save edit</Button>
        </SBox1>
      </>
    );
  }

  return (
    <>
      <SBox1 visible={true}>
        <div style={{ marginRight: "1rem" }}>
          <Button warn={true} onClick={handleReset}>
            Cancel edit
          </Button>
        </div>

        <Button onClick={handleSave}>Save edit</Button>
      </SBox1>
    </>
  );
};

export default SaveChange;

const SBox1 = styled.div<{ visible: boolean }>`
  display: flex;
  user-select: none;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: all 500ms;
`;
