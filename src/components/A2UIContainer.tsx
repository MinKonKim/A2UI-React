import { useEffect } from 'react';
import { A2UIRenderer, useA2UI } from '@a2ui/react';

/** 레거시 스텁 — 실제 에이전트 메시지는 v0.9 `A2uiMessage[]` 형태로 `processMessages`에 넘기세요. */
const A2UIContainer = () => {
  const { processMessages } = useA2UI();

  useEffect(() => {
    // 필요 시 여기서 API 응답을 파싱해 processMessages(messages) 호출
    void processMessages;
  }, [processMessages]);

  return (
    <div className="renderer-wrapper">
      <A2UIRenderer surfaceId="main-view" />
    </div>
  );
};

export default A2UIContainer;
