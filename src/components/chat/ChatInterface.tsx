import { useA2UI, A2UIRenderer } from '@a2ui/react';

export default function ChatInterface() {
  const { clearSurfaces } = useA2UI();

  return (
    <div className="container">
      <A2UIRenderer surfaceId="main-surface" />
      <button type="button" onClick={() => clearSurfaces()}>
        초기화
      </button>
    </div>
  );
}
