import type { ReactNode } from 'react'

type BrowserFrameProps = {
  title: string
  badge?: string
  className?: string
  children: ReactNode
}

export function BrowserFrame({
  title,
  badge,
  className = '',
  children,
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_30px_80px_rgba(91,140,181,0.18)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-sky-100/90 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="flex min-w-0 items-center gap-3">
          <div className="truncate rounded-full border border-slate-200/80 bg-slate-50/90 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase">
            {title}
          </div>
          {badge ? (
            <div className="hidden rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-sky-700 uppercase sm:inline-flex">
              {badge}
            </div>
          ) : null}
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}
