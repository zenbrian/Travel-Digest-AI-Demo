import { Calendar, ChevronLeft, ChevronRight, Compass, Heart, History, PanelLeft, Settings } from 'lucide-react';

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  tripDaysCount: number;
  tripStopsCount: number;
}

export default function NavigationSidebar({ activeTab, onTabChange, isCollapsed, onToggleCollapse, tripDaysCount, tripStopsCount }: Props) {
  const navItems = [
    { id: 'explore', label: '探索景點', icon: Compass },
    { id: 'itinerary', label: '我的行程', icon: Calendar },
    { id: 'favorites', label: '收藏清單', icon: Heart },
    { id: 'history', label: '歷史對話', icon: History },
    { id: 'settings', label: '設定中心', icon: Settings }
  ];

  return (
    <aside className={`h-full bg-white/88 dark:bg-zinc-950/92 border-r border-zinc-200/70 dark:border-zinc-800/80 flex flex-col justify-between select-none shrink-0 transition-all duration-300 ease-in-out z-30 backdrop-blur-2xl ${isCollapsed ? 'w-[72px] p-3' : 'w-64 lg:w-72 p-5'}`}>
      <div className="space-y-6">
        <div className={`flex items-center ${isCollapsed ? 'flex-col gap-3 justify-center' : 'justify-between px-2'}`}>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black text-base shadow-sm tracking-tighter shrink-0">TD</div>
            {!isCollapsed && (
              <div className="animate-fade-in-up overflow-hidden whitespace-nowrap">
                <h1 className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white leading-tight">Travel Digest AI</h1>
                <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider">OSAKA TRIP</p>
              </div>
            )}
          </div>
          <button onClick={onToggleCollapse} title={isCollapsed ? '展開側邊欄' : '摺疊側邊欄'} className="p-1.5 rounded-xl text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
            {isCollapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isItinerary = item.id === 'itinerary';
            const isActive = activeTab === item.id && isItinerary;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isItinerary) onTabChange(item.id);
                }}
                disabled={!isItinerary}
                aria-disabled={!isItinerary}
                title={isItinerary ? item.label : `${item.label}（暫不可用）`}
                className={`w-full flex items-center rounded-2xl transition-all duration-150 text-left ${isCollapsed ? 'justify-center p-2.5' : 'gap-3.5 px-3.5 py-2.5 text-[13px]'} ${isItinerary
                  ? isActive
                    ? 'cursor-pointer bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-white font-semibold shadow-xs'
                    : 'cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 font-medium'
                  : 'cursor-not-allowed text-zinc-300/70 dark:text-zinc-700/80 opacity-45 grayscale pointer-events-none'
                }`}
              >
                <Icon className={`size-4.5 shrink-0 ${isItinerary ? (isActive ? 'text-zinc-950 dark:text-white stroke-[2.2]' : 'text-zinc-400 dark:text-zinc-500') : 'text-zinc-300 dark:text-zinc-700'}`} />
                {!isCollapsed && <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-900">
        {!isCollapsed && (
          <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-800 p-3">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100"><PanelLeft className="size-3.5" /> Trip Snapshot</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
              <div className="rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 p-2"><b className="block text-zinc-900 dark:text-zinc-100 text-sm">{tripDaysCount}</b>天數</div>
              <div className="rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 p-2"><b className="block text-zinc-900 dark:text-zinc-100 text-sm">{tripStopsCount}</b>景點</div>
            </div>
          </div>
        )}
        <div className={`flex items-center rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors ${isCollapsed ? 'justify-center p-1' : 'justify-between p-2'}`}>
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="USER" className="w-full h-full object-cover" />
            </div>
            {!isCollapsed && <div className="leading-tight animate-fade-in-up overflow-hidden whitespace-nowrap"><div className="font-bold text-xs text-zinc-900 dark:text-zinc-100">USER</div><div className="text-[10px] text-zinc-400 dark:text-zinc-500">Traveler</div></div>}
          </div>
        </div>
      </div>
    </aside>
  );
}
