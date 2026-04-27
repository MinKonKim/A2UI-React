import AppExplorer from './AppExplorer';
import { ShellApp } from './shell/App';
import './app-mode-nav.css';

/**
 * 기본: [A2UI React Shell](https://github.com/google/A2UI/tree/main/samples/client/react/shell) — 채팅 + A2A(`/a2a`) 또는 `?mock=true` 모의 응답
 * `?view=explorer`: 로컬 specification 예시 JSON Explorer
 */
export default function App() {
  const view = new URLSearchParams(window.location.search).get('view');

  return (
    <>
      <header className="app-mode-nav">
        <span className="app-mode-nav__label">모드</span>
        <a className={view !== 'explorer' ? 'is-active' : undefined} href="?">
          Shell (A2A / mock)
        </a>
        <a className={view === 'explorer' ? 'is-active' : undefined} href="?view=explorer">
          Explorer
        </a>
        {view !== 'explorer' && (
          <span className="app-mode-nav__hint">
            · 에이전트 없이: <a href="?mock=true">?mock=true</a>
            {` · A2A 에이전트(예: :10002) + dev 서버 <code>/a2a</code> 프록시`}
          </span>
        )}
      </header>
      {view === 'explorer' ? <AppExplorer /> : <ShellApp />}
    </>
  );
}
