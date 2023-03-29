'use client'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'
import Session from '@/app/user/[id]/components/_components/Session/Component'

interface IProps {
  userId: string
  sessions: {
    session: {
      difficulty: string
      mode: string
      count: number
      playDate: string
      playerMode: string
      sessionWinnerId: string | null
      correctAnswers: Array<{
        correctAnsweredUserId: string | null
        time: number
      }>
    }
  }[]
}

const VirtualScrollWrapper = ({ userId, sessions }: IProps) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: sessions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 150,
  })
  const items = virtualizer.getVirtualItems()
  return (
    <div className="w-full">
      <div ref={parentRef} className="w-full h-[600px] overflow-auto" style={{ contain: 'strict' }}>
        <div className="w-full" style={{ height: virtualizer.getTotalSize() }}>
          <div className="mx-auto flex flex-col gap-y-7 w-5/6 md:w-full md:px-2" style={{ transform: `translateY(${items[0].start}px)` }}>
            {items.map(virtualRow => (
              <div key={virtualRow.key} data-index={virtualRow.index} ref={virtualizer.measureElement}>
                <Session userId={userId} session={sessions[virtualRow.index].session} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualScrollWrapper
