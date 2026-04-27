import { A2UIRenderer } from '@a2ui/react';

/** 액션 처리는 Shell/Explorer의 MessageProcessor 콜백에서 합니다. */
export default function MyActionWrapper() {
  return (
    <div>
      <A2UIRenderer surfaceId="main-surface" />
    </div>
  );
}
